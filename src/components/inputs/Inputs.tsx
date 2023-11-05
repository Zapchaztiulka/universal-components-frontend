import { useState } from "react";
import { TextField, InputPassword, Input } from ".";
import { ValidationStatus } from "../../types/validationStatus";
import { ShowContainer } from "../showContainer";
import { AttachIcon, EyeIcon, EyeOffIcon, IconButton, MenuIcon } from "../icons";
import { InputTypes, InputTypesFigma } from "./universalComponents/Input.types";

export const Inputs = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const toogleDisplayPassword = () => {
    setDisplayPassword((prev) => !prev);
    console.log("toogleDisplayPassword");
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
            
            message="qqqqqqqqqqqqqq1"
          />
        }
        componentName="InputPassword"
        width={500}
      />  
<ShowContainer
        component={
          <Input
            inputTypesFigma={InputTypesFigma.Password}
            type={displayPassword ? InputTypes.Text : InputTypes.Password}
            onMainIconClick={toogleDisplayPassword}
            mainIcon={displayPassword ? <EyeIcon size='16'  /> : <EyeOffIcon size='16' />}
            
            message="qqqqqqqqqqqqqq1"
          />
        }
        componentName="Input"
        width={500}
                description="6"

      />  
      <ShowContainer
        component={
          <Input
            inputTypesFigma={InputTypesFigma.TextField}
            type={InputTypes.Text}
           label="Label"
            message="infooooo"
            asterisk={true}
            mainIcon={<IconButton  ><AttachIcon /></IconButton>}
            extraLeftIcon={<MenuIcon />}
            onMainIconClick={clickOnIcon}
            onExtraLeftIconClick={clickOnIcon}
          />
        }
        componentName="Input"
        width={500}
        description="7"

      />  

        <ShowContainer
        component={
          <Input
            inputTypesFigma={InputTypesFigma.TextField}
            type={InputTypes.Text}
           label="Label"
            message="infooooo"
            asterisk={true}
            mainIcon={<IconButton  ><AttachIcon /></IconButton>}
            onMainIconClick={clickOnIcon}
          />
        }
        componentName="Input"
        width={500}
        description="8"

      /> 
          <ShowContainer
        component={
          <Input
            inputTypesFigma={InputTypesFigma.TextField}
            type={InputTypes.Text}
           label="Label"
            message="infooooo"
            asterisk={true}
          
          />
        }
        componentName="Input"
        width={500}
        description="9"

      /> 
      
    </div>
  );
};
