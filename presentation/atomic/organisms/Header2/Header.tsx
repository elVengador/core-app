import React from 'react';

import './Header.scss';
import { Title } from '../../atoms/Title/Title';

interface HeaderProps {
    title?: string;
    leftElementOptions?: JSX.Element;
    rightElementOptions?: JSX.Element;
}

export const Header2 = ({
    title = "Palace",
    ...props
}: HeaderProps): JSX.Element => {
    return (
        <header className="header">
            <div className="header--items">
                <div>{props.leftElementOptions}</div>
                <Title content={title} color="secondary"></Title>
                <div>{props.rightElementOptions}</div>
            </div>
        </header>
    );
};
