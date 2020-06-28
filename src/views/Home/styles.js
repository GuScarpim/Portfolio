import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;

`
//posicao dos icones
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

button {
  border: none;
  background: none;
  outline: none;
}
`
// icone dentro dos cards
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
//card
export const ContaintCard = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`

