import { useState } from "react"

export const useModal = (): {
    canShowModal: boolean;
    showModal: () => void;
    hideModal: () => void
} => {
    const [canShowModal, setCanShowModal] = useState(true)

    const showModal = () => setCanShowModal(true)
    const hideModal = () => setCanShowModal(false)

    return { canShowModal, showModal, hideModal }
}
