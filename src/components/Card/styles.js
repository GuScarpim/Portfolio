import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  @-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; } 
  }
  @-moz-keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

-webkit-animation: fadeIn 2s ease-in-out;
-moz-animation: fadeIn 2s ease-in-out;
-o-animation: fadeIn 2s ease-in-out;
animation: fadeIn 2s ease-in-out;

.card {
  width: 45ch;
  height: 50ch;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
}

@media only screen and (max-width: 620px) {
  margin-top: 20px;
  
  .card {
  width: 33ch;
  height: 40ch;
  }

  h2 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
 }

.card:hover {
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
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
  background-color: ${props =>
    (props.icon === 1 ? '#03272d' :
      props.icon === 2 ? '#03272d' :
        props.icon === 3 ? '#072d04' :
          props.icon === 4 ? '#F7DF1E' :
            props.icon === 5 ? '#060000' :
              props.icon === 6 ? '#d6800a' :
                props.icon === 7 ? '#160529' :
                  props.icon === 8 ? '#000' :
                    props.icon === 9 ? '#0b3501' :
                      props.icon === 10 ? '#001d33' : '')};

@media only screen and (max-width: 620px) {
  width: 40px;
  height: 40px;
 }
`

export const Titulo = styled.div`
  h2 {
    margin-top: 10px;
    text-align: center;
  }
`

export const ProgressBarContent = styled.div`
  font-family: 'Courier New', Courier, monospace;
  
  p {
    text-align: center;
    box-shadow: 1px 0px 0px #000;
  }
`
export const CardObj = styled.div`
  width: 50ch;
  height: 55ch;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  background-color: #FFF;

@media only screen and (max-width: 620px) {
  width: 33ch;
  height: 45ch;
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  .gifanimated {
    width: 28ch !important;
    height: 15ch !important;
  }
 }

  h5 {
    text-align: center;
  }

  p {
    text-align: center;
    box-shadow: 1px 0px 0px #000;
  }
  .font_p {
    font-family: 'Courier New', Courier, monospace;
  }
  .gifanimated {
    width: 45ch;
    height: 20ch;
  }
`

export const FooterCard = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: right;
  margin-top: 15px;

  .frontReact {
    width: 38px;
    height: 38px;
    padding-left: 10px;  
  }
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 50px;
`

