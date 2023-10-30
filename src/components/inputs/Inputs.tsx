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
            message="infooooo"

          />
        }
        componentName="TextField"
        width={500}
      />

      <ShowContainer
        component={
          <TextField
            label="Label"
            status={ValidationStatus.success}
            message="infooooo"
            asterisk={true}
            iconRight={<AttachIcon />}
                    />
        }
        componentName="TextField"
        width={500}
         description="3"
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
         
          />
        }
        componentName="TextField"
        width={600}
        description="4"
      />
      <ShowContainer
        component={
          <InputPassword
            type={displayPassword ? "text" : "password"}
            toogleDisplayPassword={toogleDisplayPassword}
            icon={displayPassword ? <EyeIcon size='16'  /> : <EyeOffIcon size='16' />}
            
            message="qqqqqqqqqqqqqq"
          />
        }
        componentName="InputPassword"
        width={500}
      />  
    </div>
  );
};
