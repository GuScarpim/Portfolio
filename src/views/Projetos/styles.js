import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  flex-wrap: wrap;
`

export const Titulo = styled.div`
  font-family: sans-serif;
  margin-top: 40px;
  margin-bottom: -10px;

  span {
    font-size: 34px;
  }

  @media only screen and (max-width: 600px) {
    span {
    font-size: 18px;
    font-weight: bold;
  }
}

`
