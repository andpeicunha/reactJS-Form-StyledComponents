import React, { Component } from "react";
import styled from "styled-components";

const ColorBlue1 = (props) => props.theme.ThemePrimary.ColorBlue1;
const ColorBlue2 = (props) => props.theme.ThemePrimary.ColorBlue2;
const ColorBlue3 = (props) => props.theme.ThemePrimary.ColorBlue3;
const ColorBlue4 = (props) => props.theme.ThemePrimary.ColorBlue4;
const Roboto100 = (props) => props.theme.Fonts.Roboto100;
const Roboto200 = (props) => props.theme.Fonts.Roboto200;
const Roboto300 = (props) => props.theme.Fonts.Roboto300;
const Roboto400 = (props) => props.theme.Fonts.Roboto400;

const TitleHeader = styled.div`
  font-family: ${(props) =>
    props.fontFam === "100"
      ? Roboto100
      : props.fontFam === "200"
      ? Roboto200
      : props.fontFam === "300"
      ? Roboto300
      : Roboto400};
  font-size: ${(props) => (props.Size ? props.Size : "10px")};
  color: ${(props) => (props.Color ? props.Color : ColorBlue4)};
`;

const ComentHeader = styled.div``;

export function HeaderForms({ txtHeaderForm }) {
  return (
    <TitleHeader Size="40px">
      {txtHeaderForm.title}
      <TitleHeader fontFam="300" Size="20px" Color={ColorBlue2}>
        {txtHeaderForm.body}
      </TitleHeader>
    </TitleHeader>
  );
}
