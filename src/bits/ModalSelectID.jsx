import React from "react";
import styled from "styled-components";

const ModalSelectID = ({
  options,
  itemer,
  big,
  setItemer,
  onChange,
  value,
  name
}) => {
  const handleChange = (e) => {
    setItemer(e.target.value);
  };

  return (
    <Flex>
      <select name={name} value={value} onChange={onChange} className="input">
        <option>Disco List</option>
        {options?.map((item, index) => (
          <option key={item} value={item?.id}>
            {item.shortName}
          </option>
        ))}
      </select>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .input {
    border: 1px solid #e2e8f0;
    box-shadow: 0px 1px 2px 0px #1018280d;
    width: 500px; /* Adjust as needed */
    border-radius: 8px;
    padding-left: 20px;
    outline: none;
    color: #999999;
    background: #ffffff;
    height: 45px; /* Adjust as needed */
    font-size: 14px; /* Adjust as needed */
  }
`;

export default ModalSelectID;
