import React from "react";
import styled from "styled-components";

export default function ModalLayout({
  children,
  closeModal,
  maxWidth,
  headings,
  wide
}) {
  return (
    <ModalLayoutStyle headings={headings}>
      <ModalBody
        wide={wide}
        style={{ maxWidth: maxWidth }}
        headings={headings}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalBody>
    </ModalLayoutStyle>
  );
}

const ModalLayoutStyle = styled.div`
  background: #0000005d;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  display: grid;
  place-items: center;
  padding: 40px 0;
`;

const ModalBody = styled.div`
  background: white;
  width: ${(props) => (props?.wide ? "79%" : props?.headings ? "65%" : "70%")};
  max-width: ${(props) =>
    props?.wide ? "580px" : props?.headings ? "450px" : "548px"};
  border-radius: 10px;
  margin-bottom: 70px;
`;
