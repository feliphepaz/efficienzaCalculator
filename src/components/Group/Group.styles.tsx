import styled from "styled-components";

export const StyledGroup = styled.section`
  .label-wrapper {
    display: flex;
    align-items: center;

    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
    }

    .tooltip {
      display: flex;
      position: relative;

      img {
        margin-left: 8px;
      }

      p {
        display: none;
        position: relative;
        font-size: 14px;
        width: 250px;
        background: #ff6242;
        color: #ffffff;
        font-weight: 500;
        line-height: 150%;
        padding: 10px 12px;
        border-radius: 20px;

        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 105px;
          width: 0;
          border-top: 5px solid #ff6242;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }

        &.active {
          display: block;
          position: absolute;
          bottom: 28px;
          left: -94px;
          animation: showModal 0.2s forwards;
        }
      }
    }
  }

  .group-fields {
    margin-top: 5px;
    display: flex;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
      }

      input {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        margin-top: 5px;
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
    }
  }
`;
