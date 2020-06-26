import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
`

export const TypeIcons = styled.div`
display: flex;
justify-content: space-between;
background-color: #03272D;
padding-left: 30px;
padding-right: 30px;

.inative {
  opacity: 0.5;
}

button {
  border: none;
  background: none;
  outline: none;
}

img {
  width: 50px;
  height: 50px;
  margin: 10px;
  cursor: pointer;
}
`
export const Seta = styled.div`
  position: absolute;
  border-top: 20px solid #03272D;
  border-left: 25px solid transparent;  
  border-right: 25px solid transparent; 
  color: #03272D;
  margin: 0 10px; 
  float: left;
  outline: none;
`

export const SetaNone = styled.div`
  display: none;
`

export const SetaContainer = styled.div`

.progressBar {
  position: absolute;
  margin-top: 400px;
  background-color: #F2F;
  z-index: 999px;
}
`

export const ContaintCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`

export const Front_card = styled.div`
    border-radius: 20px;
    border: 2px solid #000;
    width: 400px;
    height: 500px;
    display:flex;
    align-items: center;
    box-shadow: 4px 10px 10px #F3F3F3;
`

export const Back_card = styled.div`
    border-radius: 30px;
    border: 2px solid #000;
    width: 400px;
    height: 500px;
    display:flex;
    align-items: center;
`