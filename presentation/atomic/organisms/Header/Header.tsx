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

    const toggleTheme = () => {
        const nextTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme'
        setTheme(nextTheme)
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
                        events={{ onClick: () => toggleTheme() }}
                    />
                </div>
            </div>
        </header>
    );
};
