import React from "react";
import styled from "styled-components";
import imgBgSideBar from "../images/bg-sidebar-desktop.svg";

/* TRAZ AS DEFINIÇÕES DE THEME GLOBAL */
const ColorBlue1 = (props) => props.theme.ThemePrimary.ColorBlue1;
const ColorBlue2 = (props) => props.theme.ThemePrimary.ColorBlue2;
const ColorBlue3 = (props) => props.theme.ThemePrimary.ColorBlue3;
const ColorBlue4 = (props) => props.theme.ThemePrimary.ColorBlue4;
const Roboto100 = (props) => props.theme.Fonts.Roboto100;
const Roboto200 = (props) => props.theme.Fonts.Roboto200;
const Roboto300 = (props) => props.theme.Fonts.Roboto300;
const Roboto400 = (props) => props.theme.Fonts.Roboto400;

const ImgSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-image: ${(props) => `url(${imgBgSideBar})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100% !important;
  width: 35%;
  border-radius: 15px;
`;

const ListaItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2vw 15px;
`;

const NumberList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2vw;
  aspect-ratio: 1;
  border-radius: 50px;

  background-color: ${(props) =>
    props.ativo ? ColorBlue1 : ""}; /* Se a Props Ativo está TRUE muda a cor */
  border: 1px solid ${ColorBlue1};

  /* Definições de texto */
  color: ${(props) => (props.ativo ? ColorBlue4 : ColorBlue1)};
  font-weight: bold;
  font-size: 1.5vw;
`;

const ListaTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const TitleList = styled.div`
  color: ${(props) => ColorBlue1};
  font-family: ${(props) => Roboto100};
  font-size: 1.3vw;
`;

const BodyList = styled.div`
  color: ${(props) => ColorBlue1};
  font-family: ${(props) => Roboto300};
  font-size: 1.5vw;
`;

export function List({ itens1, itens2, itens3, itens4 }) {
  return (
    <ImgSideBar>
      <ListaItens>
        <NumberList ativo={itens1.ativo}>{itens1.number}</NumberList>
        <ListaTexto>
          <TitleList>{itens1.title}</TitleList>
          <BodyList>{itens1.body}</BodyList>
        </ListaTexto>
      </ListaItens>
      <ListaItens>
        <NumberList ativo={itens2.ativo}>{itens2.number}</NumberList>
        <ListaTexto>
          <TitleList>{itens2.title}</TitleList>
          <BodyList>{itens2.body}</BodyList>
        </ListaTexto>
      </ListaItens>
      <ListaItens>
        <NumberList ativo={itens3.ativo}>{itens3.number}</NumberList>
        <ListaTexto>
          <TitleList>{itens3.title}</TitleList>
          <BodyList>{itens3.body}</BodyList>
        </ListaTexto>
      </ListaItens>
      <ListaItens>
        <NumberList ativo={itens4.ativo}>{itens4.number}</NumberList>
        <ListaTexto>
          <TitleList>{itens4.title}</TitleList>
          <BodyList>{itens4.body}</BodyList>
        </ListaTexto>
      </ListaItens>
    </ImgSideBar>
  );
}
