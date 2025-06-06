import React from "react";
import styled from "styled-components";
import ModalText from "./ModalText";
import ModalSelect from "./ModalSelect";
import EarningSelect from "./EarningSelect";
import DistrictSelect from "./DistrictSelect";
// import {ReactComponent as Take} from '../assets/take.svg'

const DistrictManagerSelect = ({
  label,
  placeholder,
  auth,
  name,
  value,
  onChange,
  logo,
  photo,
  onClick,
  options,
  big,
  itemer,
  setItemer
}) => {
  console.log(options);
  return (
    <Flex>
      <div className="container">
        <span className="label">
          {label}
          <span className="asterik">*</span>
        </span>

        <DistrictSelect
          big
          itemer
          setItemer
          options={options}
          name={name}
          value={value}
          onChange={onChange}
          auth={auth}
          fixedWidth
          placeholder={placeholder}
          logo={logo}
        />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    .label {
      display: flex;
      flex-direction: row;
      gap: 10px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: #1e1b39;
      .asterik {
        color: red;
      }
    }
  }
`;

export default DistrictManagerSelect;
