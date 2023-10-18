import { TextField } from "."
import { ValidationStatus } from "../../types/validationStatus"
import { ShowContainer } from "../showContainer"

export const Inputs = () => {
    return <div>
        <p>All inputs</p>
        <ShowContainer 
            component={
                <TextField 
                    placeholder="placeholder"
                    label="Label"
                />
            }
            componentName="TextField"
            width={500}
        />
        <ShowContainer 
            component={
                <TextField 
                    placeholder="placeholder"
                    label="Label"
                    status={ValidationStatus.error}
                />
            }
            componentName="TextField"
            width={500}
        />
    </div>
}