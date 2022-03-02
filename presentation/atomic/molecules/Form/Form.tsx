import React from 'react';

import './Form.scss';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';

interface FormProps {
    title: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element
}

export const Form = ({
    title = '',
    ...props
}: FormProps): JSX.Element => {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <div className="form-header">
                <Title content={title} size="lg" color='inherit'></Title>
            </div>
            <div className="form-body">
                {props.children}
            </div>
            <div className="form-footer">
                <Button
                    content='ok'
                    icon="check"
                    attributes={{ type: 'submit' }}
                />
            </div>
        </form>
    );
};
