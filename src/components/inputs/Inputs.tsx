import { useState } from "react";
import { Input, Textarea } from ".";
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
  const [textarea, setTextarea] = useState("");

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
  const getTextarea = (value: string) => {
    setTextarea(value);
  };
  const clickTest = () => {
    console.log("test");
  };
  const clickOnIcon = () => {
    console.log("click");
  };
  return (
    <div>
      <p>All inputs</p>

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
        description="1"
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
        description="2"
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
        description="3"
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
        description="4"
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
            status={ValidationStatus.success}
          />
        }
        componentName="Input phone number"
        width={500}
        description="5"
      />
      <ShowContainer
        component={
          <Input
            value={price}
            inputTypesFigma={InputTypesFigma.Price}
            type={InputTypes.Text}
            // disabled={true}
            placeholder="0"
            handleChange={getPrice}
            maxLength={13}
          />
        }
        componentName="Input price"
        width={500}
        description="6"
      />
      <ShowContainer
        component={
          <Input
            value={query}
            inputTypesFigma={InputTypesFigma.SearchField}
            type={InputTypes.Text}
            // disabled={true}
            placeholder="Я шукаю..."
            handleChange={getQuery}
            maxLength={13}
            status={ValidationStatus.success}
          />
        }
        componentName="Search field"
        width={500}
        description="7"
      />

      <ShowContainer
        component={
          <Textarea
            value={textarea}
            handleChange={getTextarea}
            label="Label"
            asterisk={true}
            status={ValidationStatus.success}
            rows={4}
            disabled={true}
            maxLength={200}
            lettersCounter={true}
            onBlur={clickTest}
          />
        }
        componentName=""
        width={500}
        description="8"
      />
    </div>
  );
};
