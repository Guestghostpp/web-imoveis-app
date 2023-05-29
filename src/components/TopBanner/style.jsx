import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  :before {
    background-color: rgba(0, 0, 0, 0.6);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 15px;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  h2 {
    color: var(--white);
    font-size: 3.8rem;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }

  p {
    color: var(--white);
    margin-bottom: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
