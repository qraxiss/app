import ProductCard from '../../../components/product/card'
import * as queries from './graphql/queries'
import { useQuery } from '../../utils/wrapper'

import './index.scss'

// import { Suspense } from 'react'

export function Products() {
    const { data } = useQuery({
        query: queries.products
    })

    return (
        <div className="products">
            {data?.map((product) => (
                <ProductCard product={product} key={product.slug} />
            ))}
        </div>
    )
}
