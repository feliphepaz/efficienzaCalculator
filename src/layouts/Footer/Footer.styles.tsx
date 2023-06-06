import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 30px 0px;
  background: #ffffff;

  .container {
    display: flex;
    align-items: center;
    gap: 20px;

    small {
      font-size: 12px;
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
