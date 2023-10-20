import { TextField } from ".";
import { ValidationStatus } from "../../types/validationStatus";
import { ShowContainer } from "../showContainer";

export const Inputs = () => {
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
    </div>
  );
};
// messageClassName передаємо за умовою колір тексту (error && 'text-textError') || (success && 'text-textSuccess') || "text-textInputDefault"
