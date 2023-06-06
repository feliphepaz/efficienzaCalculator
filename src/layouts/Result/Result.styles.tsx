import styled from "styled-components";

export const StyledResult = styled.section`
  margin-top: 30px;

  .head {
    text-align: center;
    margin-bottom: 20px;
    line-height: 150%;

    span {
      font-size: 16px;
      font-weight: 700;
      color: #38b6ff;
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(90deg, #38b6ff 0%, #02598c 53.93%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 5px 0px;
    }

    p {
      font-size: 14px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.1);
    }
  }

  > h2 {
    font-weight: 700;
    margin: 20px 0px;
  }

  .costs {
    h2 {
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 150%;
    }

    .costs-list {
      display: flex;
      gap: 30px;
      overflow-x: auto;
      padding-bottom: 40px;

      .payment {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 320px;
        width: 320px;
        height: 360px;
        border: 4px solid #000000;
        border-radius: 40px;
        padding: 30px;

        &.negative {
          border: 4px solid #ff6242;

          .total {
            background: #ff6242;
          }
        }

        &.positive {
          border: 4px solid #16a100;

          .total {
            background: #16a100;
          }
        }

        h3 {
          font-weight: 700;
          font-size: 24px;
          line-height: 150%;
          text-align: center;
        }

        .payments-flow {
          margin: 20px 0px 24px 0px;
          overflow-y: auto;
          padding-right: 10px;

          li {
            display: flex;
            flex-direction: column;
            gap: 5px;

            + li {
              margin-top: 20px;
            }

            &:last-child {
              .payment-value {
                color: #ff6242;
              }
            }

            .payment-label {
              font-weight: 700;
              line-height: 150%;
            }

            .payment-value {
              font-weight: 500;
              color: #16a100;
              line-height: 150%;
            }
          }
        }

        .total {
          display: flex;
          position: absolute;
          flex-direction: column;
          width: max-content;
          bottom: -30px;
          line-height: 150%;
          background: #000000;
          padding: 6px 8px;
          border-radius: 5px;
          color: #ffffff;

          .total-label {
            font-weight: 700;
          }

          .total-value {
            font-weight: 500;
          }
        }
      }
    }
  }

  .resume {
    display: flex;
    justify-content: center;
    margin-top: 60px;

    p {
      line-height: 150%;
      text-align: center;
      max-width: 564px;
      font-weight: 500;

      strong {
        font-weight: 700;
      }

      .invoicing {
        color: #16a100;
      }
    }
  }
`;
