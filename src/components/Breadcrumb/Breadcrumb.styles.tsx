import styled from "styled-components";

export const StyledBreadcrumb = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 60px 20px 60px;
  border: 2px solid rgba(56, 182, 255, 0.2);
  border-radius: 40px;

  hr {
    height: 4px;
    width: calc(100% - 60px);
    background: #38b6ff;
    border: none;
    margin-bottom: -22px;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
        background: #38b6ff;
        width: 40px;
        height: 40px;
        border: 4px solid #38b6ff;
        color: #ffffff;
        border-radius: 100%;
      }

      h2 {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        line-height: 150%;
      }

      &.active {
        span {
          background: #ffffff;
          color: #38b6ff;
        }

        h2 {
          color: #38b6ff;
        }
      }
    }
  }

  @media (max-width: 840px) {
    padding: 20px;

    hr {
      display: none;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      li {
        border: 4px solid #38b6ff;
        border-radius: 40px;
        padding: 20px;
      }
    }
  }

  @media (max-width: 540px) {
    padding: 10px;

    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      li {
        border-radius: 30px;
        padding: 10px;
      }
    }
  }

  @media (max-width: 360px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
