import { useState } from "react";
import { TextField, InputPassword, Input } from ".";
import { ValidationStatus } from "../../types/validationStatus";
import { ShowContainer } from "../showContainer";
import {
  AttachIcon,
  EyeIcon,
  EyeOffIcon,
  IconButton,
  MenuIcon,
} from "../icons";
import { InputTypes, InputTypesFigma } from "./universalComponents/Input.types";
import { changePhoneNumber } from "../../utils/changePhoneNumber";

export const Inputs = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("0");
  const [query, setQuery] = useState("");
console.log(query);
  const toogleDisplayPassword = () => {
    setDisplayPassword((prev) => !prev);
  };

  const getPhone = (value: string) => {
        setPhone(changePhoneNumber(value));
  };
  const getPrice = (value: string) => {
        setPrice(value);
  };

  const getPassword = (value: string) => {
    setPassword(value);
  };
  const getText = (value: string) => {
    setText(value);
  };
  const getQuery = (value: string) => {
    setQuery(value);
  };

  const clickOnIcon = () => {
    console.log("click");
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
            iconRight={
              <IconButton>
                <AttachIcon />
              </IconButton>
            }
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
            icon={
              displayPassword ? <EyeIcon size="16" /> : <EyeOffIcon size="16" />
            }
            message="qqqqqqqqqqqqqq1"
          />
        }
        componentName="InputPassword"
        width={500}
      />
      <ShowContainer
        component={
          <Input
            value={password}
            inputTypesFigma={InputTypesFigma.Password}
            type={displayPassword ? InputTypes.Text : InputTypes.Password}
            onMainIconClick={toogleDisplayPassword}
            mainIcon={
              displayPassword ? <EyeIcon size="16" /> : <EyeOffIcon size="16" />
            }
            handleChange={getPassword}
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
            value={text}
            handleChange={getText}
            inputTypesFigma={InputTypesFigma.TextField}
            type={InputTypes.Text}
            label="Label"
            message="infooooo"
            asterisk={true}
            mainIcon={
              <IconButton>
                <AttachIcon />
              </IconButton>
            }
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
            value={text}
            handleChange={getText}
            inputTypesFigma={InputTypesFigma.TextField}
            type={InputTypes.Text}
            label="Label"
            message="infooooo"
            asterisk={true}
            mainIcon={
              <IconButton>
                <AttachIcon />
              </IconButton>
            }
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
            value={text}
            handleChange={getText}
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
      <ShowContainer
        component={
          <Input
            value={phone}
            inputTypesFigma={InputTypesFigma.PhoneNumber}
            type={InputTypes.Phone}
            label="Label"
            message="infooooo"
            asterisk={true}
            phoneCode="+38"
              // disabled={true}
            handleChange={getPhone}
            maxLength={13}
          />
        }
        componentName="Input phone number"
        width={500}
        description="10"
      />
         <ShowContainer
        component={
          <Input
            value={price}
            inputTypesFigma={InputTypesFigma.Price}
            type={InputTypes.Text} 
            // disabled={true}
              placeholder='0'
            handleChange={getPrice}
            maxLength={13}
          />
        }
        componentName="Input price"
        width={500}
        description="11"
      />
           <ShowContainer
        component={
          <Input
            value={query}
            inputTypesFigma={InputTypesFigma.SearchField}
            type={InputTypes.Text} 
            // disabled={true}
            placeholder='Я шукаю...'
            handleChange={getQuery}
            maxLength={13}
          />
        }
        componentName="Search field"
        width={500}
        description="12"
      />
    </div>
  );
};
