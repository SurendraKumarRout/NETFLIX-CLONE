import styled from "styled-components";

export const HEADER = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;

  .banner_contents {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;

    .banner_title {
      font-size: 3rem;
      font-weight: 800;
      padding-bottom: 0.3rem;
    }

    .banner_description {
      width: 45rem;
      line-height: 1.3;
      padding-top: 1rem;
      font-size: 1rem;
      max-width: 540px;
      height: 80px;
    }

    .banner_button {
      cursor: pointer;
      color: white;
      outline: none;
      border: none;
      font-weight: 700;
      padding-top: 0.5rem;
      border-radius: 0.2vw;
      padding-left: 2rem;
      padding-right: 2rem;
      margin-right: 1rem;
      margin-top: 0.5rem;
      background-color: rgba(51, 51, 51, 0.5);
      padding-bottom: 0.5rem;

      &:hover {
        color: black;
        background-color: white;
        transition: all 0.2s;
      }
    }
  }
  .banner_gradient {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #1a2228
    );
  }
`;
