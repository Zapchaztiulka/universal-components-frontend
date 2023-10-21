import { useState } from "react";
import { TextField, InputPassword } from ".";
import { ValidationStatus } from "../../types/validationStatus";
import { ShowContainer } from "../showContainer";

export const Inputs = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const toogleDisplayPassword = () => {
    setDisplayPassword((prev) => !prev);
  };
  return (
    <div>
      <p>All inputs</p>
      <ShowContainer
        component={<TextField placeholder="placeholder" label="Label" />}
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

      <ShowContainer
        component={
          <TextField
            label="Label"
            status={ValidationStatus.error}
            message="infooooo"
            asterisk={true}
            disabled={true}
            messageClassName="text-textInputDefault"
          />
        }
        componentName="TextField"
              width={500}
              
          />

           <ShowContainer
        component={
                    <InputPassword displayPassword={displayPassword} toogleDisplayPassword={toogleDisplayPassword} />

        }
        componentName="TextField"
        width={500}
      />
    </div>
  );
};
// messageClassName передаємо за умовою колір тексту (error && 'text-textError') || (success && 'text-textSuccess') || "text-textInputDefault"
