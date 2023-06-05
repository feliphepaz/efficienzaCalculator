import styled from "styled-components";

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  margin-bottom: 20px;

  .handle-button {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 6px 8px;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    background: rgba(56, 182, 255, 0.2);
    border: none;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;

    img {
      margin-left: 5px;
    }

    span {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.1em;
      background: #ff6242;
      padding: 2px 7px;
      border-radius: 5px;
      margin-left: 10px;
      color: #ffffff;
    }
  }

  .settings-list {
    display: none;
    position: absolute;
    top: 50px;
    z-index: 99;
    background: #d7f0ff;
    box-shadow: 0px 8px 20px rgba(34, 28, 53, 0.3);
    border-radius: 30px;
    padding: 30px;

    &.active {
      display: block;
      animation: showModal 0.2s forwards;
    }

    > div {
      display: flex;
      flex-direction: column;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 150%;
          max-width: 200px;
          margin-right: 20px;
        }
      }

      .field-input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
        max-width: 280px;
      }
    }

    hr {
      border: none;
      margin: 0px;
      height: 1px;
      width: 100%;
      background: rgba(56, 182, 255, 0.2);
      margin: 15px 0px;
    }

    button {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
