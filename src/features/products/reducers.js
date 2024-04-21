import * as queries from './graphql/queries'
import { query } from '../../apollo/wrapper'

export default {
    products(state) {
        query({ name: 'products', query: queries.products }).then((data) => {
            console.log(data)
            state.setValue(data)
        })
    }
}
