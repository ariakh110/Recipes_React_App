import styled from "styled-components";

export const SearchForm = styled.form`
  margin: 0rem 20rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;
