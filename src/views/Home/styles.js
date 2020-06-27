import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
flex-direction: column;
align-items: center;
`

export const TypeIcons = styled.div`
display: flex;
justify-content: space-between;
background-color: #03272D;
padding-left: 30px;
padding-right: 30px;
height: 70px;
width: 80%;
margin-left: 10%;
border-radius: 40px;

.inative {
  opacity: 0.5;
}

  svg:hover {
    width: 50px;
    height: 50px;
  }

button {
  border: none;
  background: none;
  outline: none;
}
`

export const IconPerfil = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #000;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const ContaintCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Content = styled.div`  
  hr {
    margin-left: 30px;
    width: calc(100% - 60px);
    margin-top: -30px;
  }

  .font_titulo {
    margin-top: 300%;
  }
`

