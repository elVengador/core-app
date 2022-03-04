import React from 'react';

import './Form.scss';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';

interface FormProps {
    title: string;
    loading: boolean;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element
}

export const Form = ({
    title = '',
    loading = false,
    ...props
}: FormProps): JSX.Element => {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <div className="form-header">
                <Title content={title} size="lg" color='fg'></Title>
            </div>
            <div className="form-body">
                {props.children}
            </div>
            <div className="form-footer">
                {!loading && <Button
                    content='ok'
                    icon="check"
                    attributes={{ type: 'submit' }}
                />}
                {loading && <Title content='Loading' icon={'spinner'} iconSpin={true} color="fg" />}
            </div>
        </form>
    );
};
