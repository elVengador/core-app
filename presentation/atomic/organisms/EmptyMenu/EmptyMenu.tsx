import React from 'react'

import './EmptyMenu.scss'

interface EmptyMenuProps {
    bodyComponents: JSX.Element[],
}

export const EmptyMenu = ({ ...props }: EmptyMenuProps): JSX.Element => {

    const buildBodyItems = (bodyMenuItems: JSX.Element[]) => {
        return bodyMenuItems.map((cur, idx) => <div key={idx}>{cur}</div>)
    }

    return (
        <nav className='menu'>
            <div className='menu-header'>

            </div>
            <div className='menu-body'>
                {buildBodyItems(props.bodyComponents)}
            </div>
            {/* <ol className="menu-footer">
                <li className='menu-footer--item'>
                    <Button content={"User"}
                        icon="user"
                        attributes={{ title: 'User information' }}
                        type='alpha'
                    />
                </li>
            </ol> */}
        </nav>
    )
}
