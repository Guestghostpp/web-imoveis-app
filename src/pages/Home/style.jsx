import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 150px;

  @media screen and (max-width: 768px) {
    padding: 15px 50px;
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 150px;

  @media screen and (max-width: 768px) {
    padding: 15px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`
