import React, { Component } from "react";
import styled from "styled-components";
import theme from "../theme";

/* NOME DO CAMPO */
const Label = styled.label`
  color: ${theme.ThemePrimary.ColorBlue4};
  font-size: 1.3em;
  font-family: ${theme.Fonts.Roboto300};
  margin: 18px 0 8px 0;
`;

/* INPUT */
const CampoTxt = styled.input`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  color: #d4d4d4;
  font-size: 1.2em;
  padding: 5px 0 5px 5px;
  margin: 5px 0;
  font-family: ${theme.Fonts.Roboto200};
`;

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <Label>
        {this.props.Input.TitleInput}
        <CampoTxt
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.Input.PlaceHolder}
        />
      </Label>
    );
  }
}

export default FormInput;
