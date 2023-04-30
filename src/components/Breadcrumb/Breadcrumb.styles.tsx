import styled from "styled-components";

export const StyledBreadcrumb = styled.section`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  hr {
    height: 4px;
    width: calc(100% - 60px);
    background: #38b6ff;
    border: none;
    margin-bottom: -25px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 500;
        background: #38b6ff;
        height: 45px;
        border: 5px solid #38b6ff;
        width: 45px;
        color: #ffffff;
        border-radius: 100%;
      }
      h2 {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        line-height: 120%;
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

  @media (max-width: 460px) {
    hr {
      display: none;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }
`;
