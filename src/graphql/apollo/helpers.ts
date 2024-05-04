import { simplifyResponse } from "./simplify-response";
import { client } from "./provider";
import { GQL_STATUS, SHOPCECK_RESPONSE, SHOPCEK_QUERY_PAYLOAD, SHOPCEK_MUTATION_PAYLOAD } from "types/gql";

export const handle = <T>(fn: (options: T) => Promise<any>) => {
    return async (options: T) => {
        try {
            return await fn(options);
        } catch (err: any) {
            console.error(err);
        }
    };
};

export const shopcekQuery = async <DType>({
    query,
    options,
    notFound,
}: SHOPCEK_QUERY_PAYLOAD): Promise<SHOPCECK_RESPONSE<DType>> => {
    const jwt = localStorage.getItem('jwt');

    const { data, error, loading } = await client.query({
        query,
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`,
                  }
                : {},
        },
    });
    let status: GQL_STATUS | undefined;
    if (loading) {
        status = 'loading';
    } else if (error && data) {
        if (notFound && notFound(data)) {
            status = 'error-and-not-found';
        } else {
            status = 'error-and-data';
        }
    } else if (error) {
        status = 'error';
    } else if (data) {
        status = 'success';
    } else status = undefined;

    return {
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        status,
    };
};

export async function shopcekMutation<DType>({
    mutation,
    options,
    notFound,
}: SHOPCEK_MUTATION_PAYLOAD): Promise<SHOPCECK_RESPONSE<DType>> {
    const jwt = localStorage.getItem('jwt');

    try {
        const response = await client.mutate({
            mutation,
            ...options,
            context: {
                headers: jwt
                    ? {
                          Authorization: `Bearer ${jwt}`,
                      }
                    : {},
            },
            fetchPolicy: 'no-cache',
        });

        const { data, error } = response as any;
        let status: GQL_STATUS | undefined;

        if (error && data) {
            if (notFound && notFound(data)) {
                status = 'error-and-not-found';
            } else {
                status = 'error-and-data';
            }
        } else if (error) {
            status = 'error';
        } else if (data) {
            status = 'success';
        } else {
            status = undefined;
        }

        return {
            data: data ? simplifyResponse(data) : data,
            error,
            status,
        };
    } catch (error) {
        // Handle error if client.mutate() throws an exception
        return {
            data: undefined,
            error,
            status: 'error',
        };
    }
}
