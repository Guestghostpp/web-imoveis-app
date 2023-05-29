import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 49%;
  }

  h2 {
    font-size: 1.17rem;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 49%;
  }

  h2 {
    font-size: 1.17rem;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 10px;
  padding: 25px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
`;