import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    list-style: none;

    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 20rem;
    height: auto;
    object-fit: contain;
  }
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: #313131;
  background: #fff;
  margin-right: 2rem;
  cursor: pointer;
  font-weight: 600;
`;
export const Info = styled.div`
  margin-left: 10rem;
`;
