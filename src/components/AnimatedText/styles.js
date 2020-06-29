import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;

  .font_icone {
    margin-top: 30vh;
    font-family: sans-serif;
    font-size: 26px;
    font-weight: bold;
    background-color: #00c9ff;
  }

  @media only screen and (max-width: 620px) {
    .font_icone {
    margin-top: 25vh;
    font-size: 11px;
  }
}
`