import React, { Component } from "react";
import Container from "./components/Container";
import { List } from "./components/SideBar";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <Container>
        <List
          itens1={{
            number: "1",
            title: "Step 1",
            body: "Your Info",
            ativo: true,
          }}
          itens2={{
            number: "2",
            title: "Step 2",
            body: "Select Plan",
          }}
          itens3={{
            number: "3",
            title: "Step 2",
            body: "Select Plan",
          }}
          itens4={{
            number: "4",
            title: "Step 2",
            body: "Select Plan",
          }}
        />
        <Form />
      </Container>
    );
  }
}

export default App;
