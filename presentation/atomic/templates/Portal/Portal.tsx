import { useEffect } from 'react'
import { createPortal } from 'react-dom';

import '../../../../../index.scss'


interface PortalProps {
    parentSelector: string,
    id: string,
    children: JSX.Element
}

export const Portal = ({ parentSelector, id, children }: PortalProps): JSX.Element => {
    const mount = document.querySelector(parentSelector)
    const element = document.createElement("div");
    element.id = id

    useEffect(() => {
        console.log('>>>', mount);
        if (!mount) { return }

        mount.appendChild(element);
        return () => { mount.removeChild(element) };
    }, [element, mount]);

    return createPortal(children, element)
}
