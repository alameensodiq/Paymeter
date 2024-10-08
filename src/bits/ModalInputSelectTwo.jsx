import React from "react";
import styled from "styled-components";

const ModalInputSelectTwo = ({ label, itemer, setItemer }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setItemer(value); // Set itemer to the value of the checked box
    } else {
      setItemer(""); // Clear itemer if unchecked
    }
  };

  return (
    <Flex>
      <div className="container">
        <span className="label">
          {label}
          <span className="asterik">*</span>
        </span>
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              value="Fixed"
              checked={itemer === "Fixed"}
            />
            Fixed
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              value="Percentage"
              checked={itemer === "Percentage"}
            />
            Percentage
          </div>
        </div>
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

export default ModalInputSelectTwo;
