import { useRef, useState } from "react";
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
import Tooltip from "../tooltips/universalComponents/Tooltip";
import ArrowTooltipDownIcon from "../icons/universalComponents/ArrowTooltipDownIcon";
import { TooltipLocation } from "../tooltips/universalComponents/Tooltip.types";

export const Inputs = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("0");
  const [query, setQuery] = useState("");
  const [textarea, setTextarea] = useState("");
  const wrapContainerRefTop = useRef(null);
  const wrapContainerRefBottom = useRef(null);
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
      <div ref={wrapContainerRefTop} className="bg-bgBrandLight1 inline-block">
        <ShowContainer
          component={
            <Input
              value={password}
              inputTypesFigma={InputTypesFigma.Password}
              type={displayPassword ? InputTypes.Text : InputTypes.Password}
              onMainIconClick={toogleDisplayPassword}
              mainIcon={
                displayPassword ? (
                  <EyeIcon size="16" />
                ) : (
                  <EyeOffIcon size="16" />
                )
              }
              handleChange={getPassword}
              // disabled={true}
              // status={ValidationStatus.error}
              message="message"
              tooltipTextMainIcon="teeeeeeest"
              tooltipLocationMainIcon={TooltipLocation.Right}
              tooltipWrapContainerRef={wrapContainerRefTop}
            />
          }
          componentName="Password"
          width={500}
          description="1"
        />
      </div>
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
            tooltipTextMainIcon="teeeeeeest"
            tooltipLocationMainIcon={TooltipLocation.BottomCenter}
          />
        }
        componentName="TextField"
        width={500}
        description="2"
      />
    
      <div
        ref={wrapContainerRefBottom}
        className=" inline-block w-[250px] h-[130px] p-[40px] pl-[100px] pb-[70px] border-1 border-borderDefaultBlue">
        <Tooltip
          wrapContainerRef={wrapContainerRefBottom}
          tooltipLocationProps={TooltipLocation.TopLeft}
          textTooltip="iconnnn11111"
     
        >
          <div className="inline-block w-[40px] h-[40px]  border-1 border-borderDefaultBlue">
            
            <ArrowTooltipDownIcon />
          </div>
        </Tooltip>
      </div>

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
        componentName="TextField"
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
        componentName="Text Field"
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
        componentName="Phone number"
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
        componentName="Price"
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
            // status={ValidationStatus.success}
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
            // status={ValidationStatus.success}
            rows={1}
            // disabled={true}
            maxLength={200}
            lettersCounter={true}
            onBlur={clickTest}
          />
        }
        componentName="Textarea"
        width={500}
        height={600}
        description="8"
      />
    </div>
  );
};

