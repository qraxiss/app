import { MutationHookOptions, QueryHookOptions, DocumentNode, ApolloError, FetchResult } from '@apollo/client'
import { GQL_STATUS } from 'types/gql'

import { simplifyResponse } from './simplify-response'

import { client } from './provider'

export const handle = (fn: CallableFunction) => {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.error(err)
        }
    }
}

export const mutate = async <DType>(
    mutation: DocumentNode,
    options?: MutationHookOptions,
    notFound?: (data: any) => boolean
): Promise<{
    status: GQL_STATUS
    data?: DType
    error?: ApolloError
}> => {
    const jwt = localStorage.getItem('jwt')

    let response: FetchResult<DType>
    try {
        response = await client.mutate({
            mutation,
            ...options,
            context: {
                headers: jwt
                    ? {
                          Authorization: `Bearer ${jwt}`
                      }
                    : {}
            }
        })
    } catch (e: any) {
        return {
            status: 'error',
            error: e,
            data: undefined
        }
    }
    //@ts-ignore
    const data = (response.data ? simplifyResponse(response.data) : response.data) as DType | undefined
    let status: GQL_STATUS
    if (data) {
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            status = 'success'
        }
    } else {
        status = 'success'
    }

    return {
        data,
        status
    }
}

export const query = async <DType>(
    query: DocumentNode,
    options?: MutationHookOptions,
    notFound?: (data: any) => boolean
): Promise<{
    status: GQL_STATUS
    data?: DType
    error?: ApolloError
}> => {
    const jwt = localStorage.getItem('jwt')

    let response: FetchResult<DType>
    try {
        response = await client.query({
            query,
            ...options,
            context: {
                headers: jwt
                    ? {
                          Authorization: `Bearer ${jwt}`
                      }
                    : {}
            }
        })
    } catch (e: any) {
        return {
            status: 'error',
            error: e,
            data: undefined
        }
    }
    //@ts-ignore
    const data = (response.data ? simplifyResponse(response.data) : response.data) as DType | undefined
    let status: GQL_STATUS
    if (data) {
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            status = 'success'
        }
    } else {
        status = 'success'
    }

    return {
        data,
        status
    }
}
