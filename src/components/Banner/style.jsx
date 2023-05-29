import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80");
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
    padding: 150px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 100px 25px;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;

  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
  }

  p {
    color: var(--white);
    margin-bottom: 25px;
  }

  span {
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 50px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
