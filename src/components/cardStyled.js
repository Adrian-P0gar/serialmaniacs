import styled from "styled-components";

export const CardDesing = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const Image = styled.img`
  height: auto;
  width: 60%;
`;

export const CardData = styled.div`
  float: right;
  width: 60%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.5rem;
  flex: 3 1 55%;
`;

export const Button = styled.button`
  background: "green";
  font-size: 1.3rem;
  border-color: black;
  border-radius: 50px;
  padding: 7px 10px;
  background: yellow;
  color: black;
  float: right;
  margin: 5px 10px 5px 0;
  &:hover {
    background: white;
  }
`;
