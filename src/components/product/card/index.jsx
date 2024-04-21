import FancyButton from '../../button/fancy-button'
import './index.scss'

export default function ProductCard({ product: { name, slug, price, image } }) {
    return (
        <div className="product-card">
            <div className="name">{name}</div>
            <img src={image} alt="product" />
            <div className="price">{price}</div>
            <FancyButton>BUY</FancyButton>
        </div>
    )
}
