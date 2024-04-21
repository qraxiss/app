import { useMutation as apolloMutation, useQuery as apolloQuery, useLazyQuery as apolloLazyQuery } from '@apollo/client'
import { client } from '../provider'
import simplifyResponse from './simplifyResponse'

function handle(fn) {
    return async (options) => {
        try {
            return await fn(options)
        } catch (err) {
            console.error(err)
        }
    }
}

export async function mutate({ mutation, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    const response = await client.mutate({
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

    const { data, error } = response
    let status
    if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found'
        } else {
            status = 'error-and-data'
        }
    } else if (error) {
        status = 'error'
    } else if (data) {
        status = 'success'
    } else {
        status = undefined
    }

    return {
        data: data ? simplifyResponse(data) : data,
        error,
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
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        called,
        refetch: handle(refetch),
        status
    }
}

export function useMutation({ mutation, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    const [fn, { data, error, loading, called }] = apolloMutation({
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
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        called,
        fn: handle(fn),
        status
    }
}

export function useQuery({ query, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    const { data, error, loading, refetch, called } = apolloQuery(query, {
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
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        called,
        refetch: handle(refetch),
        status
    }
}

export function useLazyQuery({ query, options, notFound }) {
    const jwt = localStorage.getItem('jwt')

    let [lazyCallFunction, { data, error, loading, refetch, called }] = apolloLazyQuery(query, {
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
        if (notFound && notFound(data)) {
            status = 'not-found'
        } else {
            status = 'success'
        }
    } else if (!called) {
        status = 'not-called'
    } else {
        status = undefined
    }

    return {
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        refetch: handle(refetch),
        status,
        called,
        fn: handle(lazyCallFunction)
    }
}
