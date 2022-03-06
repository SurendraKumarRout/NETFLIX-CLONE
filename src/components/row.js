import styled from "styled-components";

export const DIV = styled.div`
  font-family: Francois One;
  .row_posters {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;

      .poster {
        max-height: 100px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: transform 450ms;
        border-radius: 5px;
      }
      & .poster:hover {
        transform: scale(1.09);
      }
      .poster_large {
        max-height: 250px;
      }
      & .poster_large:hover {
        transform: scale(1.11);
      }
    }

  .row_posters::-webkit-scrollbar {
    display: none;
  }

  h2 {
    text-align: left;
    color: white;
    margin-left: 20px;
    margin-bottom: -6px;
  }
`;