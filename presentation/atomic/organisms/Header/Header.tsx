import React, { useEffect, useState } from 'react';

import './Header.scss';
import { Title } from '../../atoms/Title/Title';
import { HEADER_TEXT } from '../../../../../app/presentation/configPage.util';
import { IconButton } from '../../atoms/IconButton/IconButton';

interface HeaderProps {
    title?: string;
}

export const Header = ({
    title = HEADER_TEXT
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
                <div></div>
                <Title content={title} color="primary"></Title>
                {/* <button onClick={() => toogleTheme()}>{theme}</button> */}
                <IconButton
                    icon={"adjust"}
                    attributes={{ title: 'Change theme' }}
                    events={{ onClick: () => toogleTheme() }}
                />
            </div>
        </header>
    );
};
