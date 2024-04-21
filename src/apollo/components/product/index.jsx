import ProductCard from '../../../components/product/card'
import * as queries from './graphql/queries'
import { useQuery } from '../../utils/wrapper'

import './index.scss'

export default function Products() {
    const { data, status } = useQuery({
        query: queries.products
    })

    if (status === 'success') {
        return (
            <div className="products">
                {data.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        )
    } else {
        return <div className="test">sa</div>
    }
}
