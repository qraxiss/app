import { MutationHookOptions, QueryHookOptions } from "@apollo/client"

export const handle = (fn: CallableFunction) => {
    return async (options: MutationHookOptions | QueryHookOptions) => {
        try {
            return await fn(options)
        } catch (err: any) {
            console.error(err)
        }
    }
}
