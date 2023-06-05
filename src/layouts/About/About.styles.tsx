import styled from "styled-components";

export const StyledAbout = styled.section`
  padding: 140px 0px 120px 0px;
  background: url(/about.jpg) center center no-repeat;
  background-size: cover;
  color: #ffffff;
  margin-top: -40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .content {
      h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 130%;
        max-width: 487px;
        margin-bottom: 20px;
      }

      p {
        font-weight: 500;
        max-width: 487px;
        line-height: 150%;
        margin-bottom: 20px;

        strong {
          font-weight: 700;
          font-size: 20px;
        }

        &:nth-child(3) {
          strong {
            font-size: 16px;
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        width: max-content;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: #ffffff;

        img {
          margin-left: 15px;
        }
      }
    }
  }
`;
