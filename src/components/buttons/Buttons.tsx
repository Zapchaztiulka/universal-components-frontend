import { ShowContainer } from "../showContainer"
import DestructiveBtn from "./universalComponents/DestructiveBtn"

export const Buttons = () => {
    return <div>
        <ShowContainer
            component={<DestructiveBtn children="Button"/>}
            componentName="DestructiveBtn"
            description="default"
        />
        <ShowContainer
            component={<DestructiveBtn
                disabled={true}
                children={"text"}
            />}
            componentName="DestructiveBtn"
            description="disabled"
        />
    </div>
}