import React from 'react';

import './Footer.scss';

interface FooterProps {
    elementOptions?: JSX.Element;
}

export const Footer2 = ({
    ...props
}: FooterProps): JSX.Element => {

    return (
        <footer className="footer">
            <div className="footer--items">
                {props.elementOptions}
            </div>
        </footer>
    );
};
