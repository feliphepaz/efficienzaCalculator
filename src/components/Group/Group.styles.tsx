import styled from "styled-components";

export const StyledGroup = styled.section`
  h3 {
    font-weight: 500;
    font-size: 24px;
  }
  .group-fields {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    div {
      display: flex;
      flex-direction: column;
      label {
        font-weight: 500;
        font-size: 18px;
      }
      input {
        margin-top: 10px;
        height: 50px;
        width: 100%;
        background: rgba(56, 182, 255, 0.2);
        border: none;
        border-radius: 5px;
        padding: 12px 10px;
        font-size: 20px;
        font-weight: 500;
        outline: none;
      }
    }
  }
`;
