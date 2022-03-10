import React from 'react';

import './Header.scss';
import { Title } from '../../atoms/Title/Title';
import { IconButton } from '../../atoms/IconButton/IconButton';
import { useTheme } from '../../../utils/hooks/useTheme';

interface HeaderProps {
    title?: string;
    leftElementOptions?: JSX.Element;
    rightElementOptions?: JSX.Element;
}

export const Header = ({
    title = "Palace",
    ...props
}: HeaderProps): JSX.Element => {

    const { theme, setTheme } = useTheme('root', 'light-theme')

    const toogleTheme = () => {
        if (theme === 'light-theme') setTheme('dark-theme')
        if (theme === 'dark-theme') setTheme('light-theme')
    }

    return (
        <header className="header">
            <div className="header--items">
                <div>{props.leftElementOptions}</div>
                <Title content={title} ></Title>
                <div>
                    {props.rightElementOptions}
                    <IconButton
                        icon={"adjust"}
                        attributes={{ title: 'Change theme' }}
                        events={{ onClick: () => toogleTheme() }}
                    />
                </div>
            </div>
        </header>
    );
};
