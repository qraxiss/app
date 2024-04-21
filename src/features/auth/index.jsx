import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { connectWalletAsync, selectJwt, selectStatus } from './slice'
import FancyButton from '../../components/button/fancy-button'

export function ConnectWallet() {
    const jwt = useSelector(selectJwt)
    const status = useSelector(selectStatus)
    const dispatch = useDispatch()

    return (
        <FancyButton
            onClick={() => {
                dispatch(connectWalletAsync('asasdf'))
            }}
            state={status}
        >
            {jwt ? jwt : 'Connect'}
        </FancyButton>
    )
}
