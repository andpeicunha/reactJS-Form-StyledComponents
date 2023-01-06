import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 18px;
  height: 70vh;
  width: 100vh;
  align-items: center;
  justify-content: flex-start;

  border-radius: 15px;

  background: rgb(255, 255, 255);
  /* background: linear-gradient(
    0deg,
    rgba(98, 90, 255, 0.25) 0%,
    rgba(136, 130, 255, 0.05) 50% */
  );

  -webkit-box-shadow: 0px 9px 24px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 9px 24px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 9px 24px -15px rgba(0, 0, 0, 0.75);
`;

export default Container;
