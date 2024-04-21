import './index.scss'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Content from './components/content'
import MainContainer from '../components/container'
export default function Layout({ children }) {
    return (
        <div className="layout">
            <Sidebar />

            <Content>
                <Header />
                <MainContainer>{children}</MainContainer>
                <Footer />
            </Content>
        </div>
    )
}
