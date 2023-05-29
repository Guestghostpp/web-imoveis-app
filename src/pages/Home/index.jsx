import React, { useEffect, useState } from "react";
import { Header, Wrapper } from "./style";
import { Card } from "../../components/Card";
import { Banner } from "../../components/Banner";
import Api from "../../services/api";

export const Home = () => {
  const [imobi, setImobi] = useState([]);

  useEffect(() => {
    Api.get("/listimobi")
      .then((res) => setImobi(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Banner />
      <Header>
        <h2>Encontre o imóvel dos seus sonhos</h2>
      </Header>
      <Wrapper>
        {imobi.map((item) => (
          <Card
            key={item.id}
            thumb={item.thumb}
            tipo={item.tipo}
            endereco={item.endereco}
            valor={item.valor}
            slug={item.slug}
          />
        ))}
      </Wrapper>
    </>
  );
};
