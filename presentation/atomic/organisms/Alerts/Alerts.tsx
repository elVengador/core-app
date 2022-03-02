import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { nanoid } from 'nanoid'

import { AlertTypes } from '../../../utils/interfaces.utils'
import { Alert } from '../../molecules/Alert/Alert'

import './Alerts.scss'

interface Alert {
    id: string,
    message: string,
    type: AlertTypes
}

export interface AlertsProps {
    position?: 'TOP_LEFT' | 'TOP_CENTER' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_CENTER' | 'BOTTOM_RIGHT'
    maxAlerts?: number,
    timeToHide?: number,
    defaultAlerts?: Alert[]
    refControlAlerts: React.Ref<RefControlAlerts>
}

export interface RefControlAlerts {
    addSuccessAlert: (message: string) => void,
    addInfoAlert: (message: string) => void,
    addWarningAlert: (message: string) => void,
    addErrorAlert: (message: string) => void,
}


export const Alerts = ({
    position = 'BOTTOM_RIGHT',
    maxAlerts = 3,
    timeToHide = 6000,
    defaultAlerts = [],
    refControlAlerts
}: AlertsProps): JSX.Element => {
    const [alerts, setAlerts] = useState<Alert[]>(defaultAlerts)
    const [alertToRemove, setAlertToRemove] = useState('')

    const onRemoveAllertCallback = useCallback((id: string) => {
        const alertsFiltered = alerts.filter(cur => cur.id !== id)
        setAlerts(alertsFiltered)
    }, [alerts])

    useEffect(() => {
        if (alertToRemove) {
            onRemoveAllertCallback(alertToRemove)
            setAlertToRemove('')
        }
    }, [alertToRemove, onRemoveAllertCallback])

    useImperativeHandle(refControlAlerts, () => {
        const onAddAlert = ({ message, type }: { message: string, type: AlertTypes }) => {
            const newAlert: Alert = { id: nanoid(), message, type }
            // addNewAlert(newAlert)
            const alertsUpdated = [newAlert, ...alerts]
            const minimunAlerts = alertsUpdated.slice(0, maxAlerts)
            setAlerts(minimunAlerts)
        }

        return {
            addSuccessAlert: (message: string) => onAddAlert({ message, type: 'SUCCESS' }),
            addInfoAlert: (message: string) => onAddAlert({ message, type: 'INFO' }),
            addWarningAlert: (message: string) => onAddAlert({ message, type: 'WARNING' }),
            addErrorAlert: (message: string) => onAddAlert({ message, type: 'ERROR' })
        }
    }, [alerts, maxAlerts])


    // const onAddAlertDevelopmentMode = () => {
    //     const types: AlertTypes[] = ['ERROR', 'INFO', 'SUCCESS', 'WARNING']
    //     const id = nanoid()
    //     const type = types[Math.floor(Math.random() * 4)]
    //     const newAlert: Alert = { id, message: id, type }
    //     addNewAlert(newAlert)
    // }


    const onBuildAllerts = alerts.map((cur) => <Alert
        type={cur.type}
        value={cur.message}
        autodestroy={() => setAlertToRemove(cur.id)}
        timeToDestroy={timeToHide}
        key={cur.id}
    />)

    const getPostionClasses = () => {
        if (position === 'TOP_LEFT') { return 'alerts--top alerts--left' }
        if (position === 'TOP_CENTER') { return 'alerts--top alerts--center' }
        if (position === 'TOP_RIGHT') { return 'alerts--top alerts--right' }
        if (position === 'BOTTOM_LEFT') { return 'alerts--bottom alerts--left' }
        if (position === 'BOTTOM_CENTER') { return 'alerts--bottom alerts--center' }
        if (position === 'BOTTOM_RIGHT') { return 'alerts--bottom alerts--right' }
        return ''
    }

    return (
        <div className={`alerts ${getPostionClasses()}`}>
            {/* {showDevelopmentControls &&
                <button onClick={() => onAddAlertDevelopmentMode()}>+ ADD</button>
            } */}
            {onBuildAllerts}
        </div>
    )
}

