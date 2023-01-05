import React, { Component } from "react";
import styled from "styled-components";

const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const BtEnviar = styled.input`
  background: ${(props) => (props.enviar ? "palevioletred" : "white")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.enviar ? "#bc2e5d" : "white")};
  border-radius: 5px;
`;

class FormInput extends React.Component {
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
      <TitleHeader>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <BtEnviar type="submit" value={btSend.title} enviar />
        </form>
      </TitleHeader>
    );
  }
}

export default FormInput;

// export function FormInput() {
//   return (
//     <TitleHeader>
//       <ComentHeader>asas1</ComentHeader>
//     </TitleHeader>
//   );
// }
