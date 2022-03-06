import styled from "styled-components";

export const DIV = styled.div`
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding-top:10px;
    z-index: 1;

    /* ANIMATION TO NAV-CHANGE */
    transition-timing-function: ease-in;
    transition: all 0.5s;
  }

  .navbar_change {
    background-color: #1a2228;
  }
  .logo {
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
  }

  .avatar {
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
  }
`;
