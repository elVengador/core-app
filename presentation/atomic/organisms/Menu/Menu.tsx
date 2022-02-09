import React from 'react'

import './Menu.scss'
// import { Button } from '../../atoms/Button/Button'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { useWindow } from './useWindow'
// import { Link } from 'react-router-dom'
import { MenuItem } from '../../molecules/MenuItem/MenuItem'

interface MenuSubItemInterface {
    name: string,
    description: string,
    icon: IconProp,
    path: string
}

interface MenuItemInterface {
    name: string,
    description: string,
    icon: IconProp,
    path: string,
    subItems: MenuSubItemInterface[]
}

const menuItems: MenuItemInterface[] = [
    {
        name: 'Notes',
        description: 'Simple Notes',
        icon: 'sticky-note',
        path: '/notes',
        subItems: []
    },
    {
        name: 'Tags',
        description: 'Tags From Notes',
        icon: 'tags',
        path: '/tags',
        subItems: []
    },
    // {
    //     name: 'Module',
    //     description: 'Some module with many views',
    //     path: '',
    //     icon: 'home', subItems: [
    //         {
    //             name: 'view 1',
    //             description: 'Some view',
    //             icon: 'home',
    //             path: '',
    //         }
    //     ]
    // }
]

// interface MenuProps {
//     title?: string;
// }

export const Menu = (): JSX.Element => {

    // const { screenSize } = useWindow()

    // const buildNameToMenuItem = (name: string) => screenSize.width < 600 ? '' : name

    const buildMenuItems = (menuItems: MenuItemInterface[]) => {
        return menuItems.map((cur, idx) => <li className='menu-body--item' key={idx}>
            {/* <Button content={buildNameToMenuItem(cur.name)}
                icon={cur.icon}
                type='alpha'
                attributes={{ title: cur.description }}
            />
            <Link to={cur.path}>{cur.name}</Link> */}
            <MenuItem name={cur.name} path={cur.path} icon={cur.icon} />
        </li>)
    }

    return (
        <nav className='menu'>
            <div className='menu-header'>

            </div>
            <div className='menu-body'>
                {buildMenuItems(menuItems)}
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
