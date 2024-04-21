import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

import './index.scss'

function Error({ name, message }) {
    const [show, setShow] = useState(true)

    if (show) {
        return (
            <Alert className="error-alert" variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{name}</Alert.Heading>
                <p>{message}</p>
            </Alert>
        )
    }
}

export default Error
