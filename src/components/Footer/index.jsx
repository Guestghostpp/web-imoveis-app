import React from "react";
import logoImg from "../../assets/logoImg.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Copy, Item } from "./style";

export const Footer = () => {
  return (
    <>
      <Container>
        <Item>
          <img src={logoImg} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex tenetur
            debitis nostrum ab deserunt ullam, quo odit consequatur nesciunt
            culpa quisquam? Alias soluta assumenda eum eveniet saepe fugit
            doloribus officiis.
          </p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Nosso Serviço</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Nosso Serviço</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Nosso Serviço</h3>
          <ul>
            <li>
              <span>Comprar</span>
            </li>
            <li>
              <span>Alugar</span>
            </li>
            <li>
              <span>Vender</span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>Copyright 2022 - Workside Tecnologia All Rights</p>
        <ul>
          <li>Termos de uso</li>
          <li>Política de Privacidade</li>
          <li>Política de Cookies</li>
        </ul>
      </Copy>
    </>
  );
};
