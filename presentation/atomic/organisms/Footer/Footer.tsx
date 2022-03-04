import React from 'react';
import { Title } from '../../atoms/Title/Title';

import './Footer.scss';

interface FooterProps {
    elementOptions?: JSX.Element;
}

export const Footer = ({
    elementOptions = <Title content={`by elVengador - ${new Date().getFullYear()}`} ></Title>
    // ...props
}: FooterProps): JSX.Element => {

    return (
        <footer className="footer">
            <div className="footer--items">
                {elementOptions}
            </div>
        </footer>
    );
};
