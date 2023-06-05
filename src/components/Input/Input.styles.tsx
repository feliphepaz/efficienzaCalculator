import styled from "styled-components";

export const StyledInput = styled.div`
  label {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  input {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    margin-top: 10px;
    height: 50px;
    width: 100%;
    background: rgba(56, 182, 255, 0.2);
    border: none;
    border-radius: 5px;
    padding: 12px 10px;
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &:focus {
      outline: 2px solid #38b6ff;
      background: #ffffff;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;
