import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -ms-flex-line-pack: distribute;
    align-content: space-around;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-bottom: 20px;
    background-color: #00c9ff;
    overflow: scroll;

`
//conteudos card
export const Content = styled.div`  

  hr {
    width: 100%;
    margin-top: 30px;
  }

  .font_titulo {
    background-color: #B9F0FF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const TypistContent = styled.div`  
  overflow: scroll;



  h1 {
    text-align: center;
    padding-top: 20px;
    font-family: sans-serif;
  }

  p {
    font-family: sans-serif;
    padding-left: 20%;
    padding-right: 20%;
    font-size: 26px;
  }

  @media only screen and (max-width: 1100px) {
    p {
    font-size: 20px;
  }
  }
  @media only screen and (max-width: 700px) {
    p {
    font-size: 16px;
  }
  }
  @media only screen and (max-width: 300px) and (max-height: 500px) {
    p {
    font-size: 12px;
  }
  }

`
export const Contato = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;

  a {
    text-decoration: none;
    color: #000;
  
  &:hover {
    color: #2196F3; 
  }

  h4 {
    margin-bottom: 40px;
  }

  }
    
  @media only screen and (max-width: 700px) {
    h4 {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
`


