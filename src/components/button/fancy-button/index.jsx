import { Spinner } from 'react-bootstrap'

import './index.scss'

import { useEffect, useState } from 'react'

export default function FancyButton({ children, onClick, state = '' }) {
    function spinnerEffect() {
        if (state === 'loading') {
            setSpinner(<Spinner className={state} />)
        }
    }
    const [spinner, setSpinner] = useState()
    useEffect(spinnerEffect, [state])

    return (
        <span onClick={onClick} className={`fancy-button ${state}`}>
            {spinner}
            {children}
        </span>
    )
}
