import './index.scss'

import Top from './components/top'
import Bottom from './components/bottom'

export default function Header() {
    return (
        <header className="header">
            <Top></Top>
            <Bottom></Bottom>
        </header>
    )
}
