import { ShowContainer } from "../showContainer";
import DestructiveBtn from "./universalComponents/DestructiveBtn";

export const Buttons = () => {
    return (
        <div>
            <DestructiveBtn text="Button" />
            <br />
            <DestructiveBtn disabled={true} text={"text"} />
            <br />
            <DestructiveBtn withIcon={true} text={"Кнопка"} />
            <br />
            <br />

            <ShowContainer
                component={<DestructiveBtn text="Button" />}
                componentName="DestructiveBtn"
            />
            <ShowContainer
                component={<DestructiveBtn disabled={true} text={"text"} />}
                componentName="DestructiveBtn"
                description="disabled"
            />
            <ShowContainer
                component={<DestructiveBtn withIcon={true} text={"Кнопка"} />}
                componentName="DestructiveBtn"
                description="withIcon true"
            />
        </div>
    );
};
