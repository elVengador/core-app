import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alerts, AlertsProps, RefControlAlerts } from './Alerts';
// import { within } from '@storybook/testing-library';

export default {
    title: 'Desing System/Organisims/Alerts',
    component: Alerts,
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<typeof Alerts> = (args) => {
    // const trigger = useRef<RefControlAlerts>()
    // const trigger = useRef(null)

    // const AlertsElement =
    // const AlertElement = forwardRef(
    //     (props: AlertsProps, ref: ForwardedRef<RefControlAlerts>) =>
    //         <Alerts {...props} refControlAlerts={ref} />)
    // AlertElement.displayName = 'AlertsElement'

    // return <AlertElement {...args} refControlAlerts={trigger} />

    return <Alerts {...args} />
};

export const Default = Template.bind({});
Default.args = {
    maxAlerts: 3,
    position: 'BOTTOM_RIGHT',
    timeToHide: 10000,
    defaultAlerts: [
        {
            id: 'sldflsakdf',
            message: 'success Alert',
            type: 'SUCCESS'
        },
        {
            id: 'sldflsakd23',
            message: 'error Alert',
            type: 'ERROR'
        },
    ]
};

// export const ShowAlerts = Template.bind({});
// ShowAlerts.args = {
//     maxAlerts: 3,
//     position: 'BOTTOM_RIGHT',
//     timeToHide: 4000,

// };
// ShowAlerts.play = async ({ canvasElement, args }) => {
//     setTimeout(() => {
//         const canvas = within(canvasElement)
//         if (!args.refControlAlerts) { return }
//         // args.refControlAlerts.


//         // args.refControlAlerts.current.addErrorAlert('this is a error alert')

//     }, 2000)

// }
