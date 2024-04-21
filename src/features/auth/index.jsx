import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { connectWalletAsync, selectJwt, selectStatus } from './slice'
import FancyButton from '../../components/button/fancy-button'

export function ConnectWallet() {
    const jwt = useSelector(selectJwt)
    const status = useSelector(selectStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(status)
    }, [status])

    return (
        <FancyButton
            onClick={() => {
                dispatch(connectWalletAsync('asasdf'))
            }}
            state={status}
        >
            {jwt}
        </FancyButton>
    )
}
