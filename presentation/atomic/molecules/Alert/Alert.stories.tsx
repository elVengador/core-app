import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './Alert';
import { userEvent, within } from '@storybook/testing-library';

export default {
    title: 'Desing System/Molecules/Alert',
    component: Alert,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
    const [showAlert, setShowAlert] = useState(true)
    const destroyAlert = () => setShowAlert(false)

    return <>
        {showAlert && <Alert
            {...args}
            autodestroy={() => destroyAlert()}
        />}
    </>
}

export const Empty = Template.bind({});
Empty.args = {
    type: 'INFO',
    value: 'This alert will detroy in 40 seconds',
    timeToDestroyInSeconds: 40
};

export const CloseAlert = Template.bind({});
CloseAlert.args = { ...Empty.args };
CloseAlert.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    setTimeout(async () => {
        await userEvent.click(canvas.getByTitle('Close alert'));
    }, 2000)
}
