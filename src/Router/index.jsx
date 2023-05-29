import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Error } from "../pages/Error";
import { Imobi } from "../pages/Imobi";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Perfil } from "../pages/Perfil";
import { PrivateRouter } from "../components/PrivateRouter";

export const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel/:slug" component={Imobi} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <PrivateRouter path="/perfil" component={Perfil} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};
