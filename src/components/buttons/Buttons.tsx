import { ShowContainer } from "../showContainer"
import DestructiveBtn from "./universalComponents/DestructiveBtn"

export const Buttons = () => {
    return <div>
        <ShowContainer
            component={<DestructiveBtn text="Button"/>}
            componentName="DestructiveBtn"
            description="default"
        />
        <ShowContainer
            component={<DestructiveBtn
                disabled={true}
                text={"text"}
            />}
            componentName="DestructiveBtn"
            description="disabled"
        />
    </div>
}