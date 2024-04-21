import Layout from './layout'

import { useSelector, useDispatch } from 'react-redux'
import { products } from './features/products'

import FancyButton from './components/button/fancy-button'

function App() {
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.products.value)
    console.log()

    return (
        <Layout>
            <FancyButton
                onClick={() => {
                    dispatch(products())
                }}
                state="loading"
            ></FancyButton>
            <FancyButton
                onClick={() => {
                    console.log(productsData)
                }}
            ></FancyButton>
        </Layout>
    )
}

export default App
