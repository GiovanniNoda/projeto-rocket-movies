import { Container } from "./style"
import { FiPlus, FiX } from 'react-icons/fi'

export function Marker({ isNew, value, ...rest }) {
    return(
        <Container isNew={isNew}>
            <input 
            type="text" 
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button 
            type="button">
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}