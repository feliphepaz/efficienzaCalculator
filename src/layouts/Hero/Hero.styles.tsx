import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 100px 0px;
  background: url(/banner.jpg) center center no-repeat;
  background-size: cover;
  color: #ffffff;

  .container {
    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 130%;
      max-width: 387px;
      margin-bottom: 20px;
    }

    p {
      font-weight: 500;
      max-width: 364px;
      line-height: 150%;

      strong {
        font-weight: 700;
      }
    }
  }
`;
