import styled from "styled-components";

export const StyledResult = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  .payment {
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
    }
    .payments-flow {
      margin: 40px 0px;
      li {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
      }
      hr {
        border: 0px;
        height: 1px;
        width: 100%;
        background: #38b6ff;
        margin: 15px 0px;
      }
    }
    .total {
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      .positive {
        color: green;
      }
      .negative {
        color: red;
      }
    }
  }
`;
