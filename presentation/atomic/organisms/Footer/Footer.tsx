import React from 'react';

import './Footer.scss';
import { Title } from '../../atoms/Title/Title';
import { FOOTER_TEXT } from '../../../../../app/presentation/configPage.util';

interface FooterProps {
    title?: string;
}

export const Footer = ({
    title = FOOTER_TEXT,
}: FooterProps): JSX.Element => {

    return (
        <footer className="footer">
            <div className="footer--items">
                <Title content={title} size="xs" color="secondary"></Title>
            </div>
        </footer>
    );
};
