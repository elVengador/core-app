import React, { useEffect, useState } from 'react';

import './Header.scss';
import { Title } from '../../atoms/Title/Title';
import { IconButton } from '../../atoms/IconButton/IconButton';

interface HeaderProps {
    title?: string;
    leftElementOptions?: JSX.Element;
    rightElementOptions?: JSX.Element;
}

export const Header2 = ({
    title = "Palace",
    ...props
}: HeaderProps): JSX.Element => {

    const [theme, setTheme] = useState("light-theme");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setThemeOnPage() }, [theme])

    const setThemeOnPage = () => {
        console.log('change theme');
        const rootElement = document.getElementById('root')
        if (!rootElement) { return }

        rootElement.classList.remove('light-theme')
        rootElement.classList.remove('dark-theme')
        rootElement.classList.add(theme)
    }

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
