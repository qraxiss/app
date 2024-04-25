import { simplifyResponse } from "./simplify-response";
import { client } from "./provider";
import { SHOPCECK_QUERY_RESPONSE, SHOPCEK_QUERY_PAYLOAD } from "types/gql";

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
    notFound
}: SHOPCEK_QUERY_PAYLOAD): Promise<SHOPCECK_QUERY_RESPONSE<DType>> => {
    const jwt = localStorage.getItem('jwt');

    const { data, error, loading } = await client.query({
        query,
        ...options,
        context: {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`
                  }
                : {}
        }
    });
    let status: string | undefined;
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
    } else status = undefined

    return {
        data: data ? simplifyResponse(data) : data,
        error,
        loading,
        status
    };
}
