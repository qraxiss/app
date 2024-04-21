import { Container } from 'react-bootstrap'
import './index.scss'

export default function MainContainer({ children }) {
    return <Container className="main-container">{children}</Container>
}
