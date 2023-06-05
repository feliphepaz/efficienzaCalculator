import styled from "styled-components";

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  .check {
    display: inline-block;
    height: 32px;
    width: 60px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  .check-check {
    z-index: 2;
    opacity: 0;
    cursor: pointer;
  }

  .check-check:checked ~ .check-indicator {
    background: linear-gradient(90deg, #38b6ff 0%, #02598c 53.93%);
  }

  .check-check:checked ~ .check-indicator:after {
    transform: translate(28px, 0);
  }

  .check-check,
  .check-indicator {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
  }

  .check-indicator {
    background: rgba(0, 0, 0, 0.1);
    transition: background 0.25s ease;
  }

  .check-indicator:after {
    height: 28px;
    width: 28px;
    top: 2px;
    left: 2px;
    background: #38b6ff;
    content: "";
    position: absolute;
    border-radius: 100%;
    transition: transform 0.25s ease;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    margin-top: 15px;
  }
`;
