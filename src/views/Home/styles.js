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

@media only screen and (max-width: 620px) {
  justify-content: space-between;
  background-color: #03272D;
  padding-left: 5px;
  padding-right: 5px;
  height: 50px;
  width: 80%;
  margin-left: 10%;
  border-radius: 40px;
}

@media only screen and (max-width: 400px) {
  justify-content: space-between;
  background-color: #03272D;
  padding-left: 5px;
  padding-right: 5px;
  height: 40px;
  width: 80%;
  margin-left: 10%;
  border-radius: 40px;
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

  @media only screen and (max-width: 620px) {
  width: 30px;
  height: 30px;
  }
`
//card
export const ContaintCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  padding-top: -50px;
`

