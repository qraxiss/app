import { Button } from 'react-bootstrap'

import './index.scss'

export default function ConnectWallet({ onClick, loading, children }) {
    return (
        <Button className="connectWallet" onClick={onClick}>
            {children ? children : 'Click me to login'}
        </Button>
    )
}
