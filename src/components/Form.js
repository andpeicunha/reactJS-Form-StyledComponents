import React, { Component } from "react";
import styled from "styled-components";

import { HeaderForms } from "./HeaderForm";
import FormInput from "./FormInput";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 0 20px;
`;

class Form extends Component {
  render() {
    return (
      <ContainerForm>
        <HeaderForms
          txtHeaderForm={{
            title: "Pesonal Info",
            body: "Please provide your name...",
          }}
        />
        <FormInput
          btSend={{
            title: "Next Step",
            body: "Please enter your name...",
          }}
        />
      </ContainerForm>
    );
  }
}

export default Form;
