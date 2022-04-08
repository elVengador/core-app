import React from 'react'
import { useNavigate } from 'react-router';
import { IconButton } from '../../atoms/IconButton/IconButton'

export const SignOut = (): JSX.Element => {
    const navigate = useNavigate();

    const onSignOut = () => {
        sessionStorage.clear()
        return navigate('/auth')
    }

    return (
        <IconButton
            icon={"sign-out-alt"}
            attributes={{ title: 'Sign out' }}
            events={{ onClick: () => onSignOut() }}
        />
    )
}
