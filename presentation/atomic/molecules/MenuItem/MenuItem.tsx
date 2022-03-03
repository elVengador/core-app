import React from 'react'

import './MenuItem.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from 'react-router-dom'
import { Title } from '../../atoms/Title/Title'
import { useWindow } from '../../../utils/hooks/useWindow'

interface MenuItemProps {
    name: string;
    path: string;
    icon: IconProp
}

export const MenuItem = ({ ...props }: MenuItemProps): JSX.Element => {

    const { screenSize } = useWindow()

    const buildNameToMenuItem = (name: string) => screenSize.width < 600 ? '' : name

    return (
        <div className='menu-item'>
            <NavLink
                to={props.path}
                style={({ isActive }) => ({ color: isActive ? "var(--main)" : "gray" })}
            >
                <Title
                    content={buildNameToMenuItem(props.name)}
                    icon={props.icon}
                    color='fg'
                />
            </NavLink>
        </div>
    )
}
