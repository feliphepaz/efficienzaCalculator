import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0px;
  background: #ffffff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    h1 {
      font-weight: 700;
      line-height: 150%;
    }
  }

  @media (max-width: 470px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
