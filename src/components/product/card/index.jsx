import { Card } from 'react-bootstrap'

import './index.scss'

export default function ProductCard({ children: { name, slug, price, image } }) {
    return <Card className="product-card">{name}</Card>
}
