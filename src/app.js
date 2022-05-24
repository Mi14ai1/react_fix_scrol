import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import BigContent from "./big-content";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
  }
  
  html {
    margin-left: calc(100vw - 100%);
  }
  `;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: orange;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 50px;
    background-color: green;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Wrapper>
              <h1>Первая страница</h1>
              <p>Начало страницы</p>
              <Link to="/second">Перейти на вторую страницу</Link>
              <BigContent count={5} />
              <Link to="/second">Перейти на вторую страницу</Link>
              <p>Конец страницы</p>
            </Wrapper>
          </Route>
          <Route path="/second" exact>
            <Wrapper>
              <h1>Вторая страница</h1>
              <p>Начало страницы</p>
              <Link to="/">Перейти на первую страницу</Link>

              <Link to="/">Перейти на первую страницу</Link>
              <p>Конец страницы</p>
            </Wrapper>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
