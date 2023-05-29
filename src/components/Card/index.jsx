import React from "react";
import { Container, Descripition, Img, Itens } from "./style";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/api";

export const Card = ({ thumb, tipo, endereco, valor, slug }) => {
  return (
    <Container>
      <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
      </Img>
      <Descripition>
        <h4>{tipo}</h4>
        <Itens>
          <span>
            <FaMapMarkerAlt />
            {endereco}
          </span>
          <span>R$ {valor} / mês</span>
        </Itens>
        <Link to={`imovel/${slug}`}>
          Destalhes <FaArrowRight />
        </Link>
      </Descripition>
    </Container>
  );
};
