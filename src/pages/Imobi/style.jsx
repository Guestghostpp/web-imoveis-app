import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius:  5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Descripition = styled.div`
  padding: 30px 0;
  h2,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const Right = styled.div`
  width: 28%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 1005;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescripition = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileFormContact = styled.div`
  h3 {
    margin-bottom: 15px;
    color: var(--secondary);
  }

  form{
    display: flex;
    flex-direction: column;
  }
 
`;
