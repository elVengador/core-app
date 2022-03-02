import { useState } from "react"
import { InputStatus } from "../interfaces.utils"

export const useInput = (
    initialValue = '',
    initialState: InputStatus = 'default'): [
        string,
        React.Dispatch<React.SetStateAction<string>>,
        InputStatus,
        React.Dispatch<React.SetStateAction<InputStatus>>,
    ] => {
    const [value, setValue] = useState(initialValue)
    const [state, setState] = useState(initialState)

    return [value, setValue, state, setState]
}
