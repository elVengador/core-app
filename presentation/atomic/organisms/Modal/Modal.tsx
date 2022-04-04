import React from 'react'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { Portal } from '../../templates/Portal/Portal'

import './Modal.scss'

interface ModalProps {
    children: JSX.Element | null,
    isOpen: boolean,
    onHide: () => void
}

export const Modal = ({
    children = null,
    isOpen = false,
    onHide
}: ModalProps): JSX.Element | null => {

    const onHideModal = () => { onHide() }

    if (!isOpen) { return null }
    if (!children) { return null }

    return (
        <Portal parentSelector='#root' id='modal-root'>

            <div className='modal'>
                <div className="modal--header">
                    <div className="modal-wrapper">

                        <div className="options">
                        </div>
                        <IconButton
                            icon='times'
                            color='primary'
                            attributes={{ title: 'Close' }}
                            events={{ onClick: onHideModal }}
                        />
                    </div>
                </div>
                <div className="modal--body">
                    <div className="modal-wrapper">
                        {children}
                    </div>
                </div>
                <div className="modal--footer">
                    <div className="modal-wrapper">
                    </div>
                </div>
            </div>

        </Portal>
    )
}
