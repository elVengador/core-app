import { useEffect } from 'react'
import { createPortal } from 'react-dom';

import '../../../../../index.scss'


interface PortalProps {
    children: JSX.Element
}

export const Portal = ({ children }: PortalProps): JSX.Element => {
    const mount = document.getElementById("portal-root");
    const element = document.createElement("div");

    useEffect(() => {
        if (!mount) { return }

        mount.appendChild(element);
        return () => { mount.removeChild(element) };
    }, [element, mount]);

    return createPortal(children, element)
}
