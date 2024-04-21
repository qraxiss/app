import { useMutation as useMutationApollo, useLazyQuery as useLazyQueryApollo, useQuery as useQueryApollo } from '@apollo/client'

import { client } from './provider'

function handle(fn) {
    return async (options) => {
        try {
            return await fn(options)
        } catch (err) {
            console.error(err)
        }
    }
}

export function mutate({ mutation, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    const [fn, { data, error, loading, called }] = client.mutate({
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

    let status
    if (loading) {
        status = 'loading'
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        status = 'success'
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: data,
        error,
        loading,
        called,
        fn: handle(fn),
        status
    }
}

export async function query({ query, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    const { data, error, loading, refetch, called } = await client.query({
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
    let status
    if (loading) {
        status = 'loading'
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        status = 'success'
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: data,
        error,
        loading,
        called,
        refetch: handle(refetch),
        status
    }
}
