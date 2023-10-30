import { useState } from "react";
import { TextField, InputPassword } from ".";
import { ValidationStatus } from "../../types/validationStatus";
import { ShowContainer } from "../showContainer";
import { AttachIcon, EyeIcon, EyeOffIcon, IconButton, MenuIcon } from "../icons";

export const Inputs = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const toogleDisplayPassword = () => {
    setDisplayPassword((prev) => !prev);
    console.log("click");
  };

  const clickOnIcon = () => {
    console.log('click');
  }
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
            iconRight={<AttachIcon />}
            // disabled={true}
            messageClassName="text-textInputDefault"
          />
        }
        componentName="TextField"
        width={500}
      />
 <ShowContainer
        component={
          <TextField
             
            label="Label"
            message="infooooo"
            asterisk={true}
            iconRight={<IconButton  ><AttachIcon /></IconButton>}
            iconLeft={<MenuIcon />}
            onRightIconClick={clickOnIcon}
            messageClassName="text-textInputDefault"
            inputClassName="pr-[80px] w-[100%]"
          />
        }
        componentName="TextField"
        width={600}
      />
      <ShowContainer
        component={
          <InputPassword
            disabled
            type={displayPassword ? "text" : "password"}
            toogleDisplayPassword={toogleDisplayPassword}
            icon={displayPassword ? <EyeIcon size='16'  /> : <EyeOffIcon size='16' />}
            inputClassName='pr-[38px]'
          />
        }
        componentName="InputPassword"
        width={500}
      />  
    </div>
  );
};
// messageClassName передаємо за умовою колір тексту (error && 'text-textError') || (success && 'text-textSuccess') || "text-textInputDefault"
