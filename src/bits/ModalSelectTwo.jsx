import React from "react";
import styled from "styled-components";

const ModalSelectTwo = ({ options, itemer, big, setItemer }) => {
  const handleChange = (e) => {
    setItemer(e.target.value);
  };

  return (
    <Flex>
      <select className="input" onChange={handleChange} value={itemer}>
        <option value="">Select Commission</option>
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
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

export default ModalSelectTwo;
