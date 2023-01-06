import React, { Component } from "react";
import styled from "styled-components";

import { HeaderForms } from "./HeaderForm";
import FormInput from "./FormInput";
import theme from "../theme";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 0 50px;
`;

/* DIV COM TODO O FORMULÁRIO */
const DivForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  width: 100%;
`;

/* BOTÃO ENVIAR OU PROX SESSÃO*/
const BtEnviar = styled.input`
  background: ${(props) => (props.enviar ? "palevioletred" : "white")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.enviar ? "#bc2e5d" : "white")};
  color: ${(props) => (props.enviar ? "white" : "black")};
  border-radius: 5px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <ContainerForm>
        <HeaderForms
          txtHeaderForm={{
            title: "Pesonal Info",
            body: "Please provide your name...",
          }}
        />

        <DivForm onSubmit={this.handleSubmit}>
          <FormInput
            Input={{
              TitleInput: "Name",
              PlaceHolder: "Your name here",
            }}
          />
          <FormInput
            Input={{
              TitleInput: "Email Address",
              PlaceHolder: "abc@abc.com",
            }}
          />
          <BtEnviar type="submit" value="Next Step" enviar />
        </DivForm>
      </ContainerForm>
    );
  }
}

export default Form;
