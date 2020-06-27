import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    outline: none;
  }

  hr {
    position: absolute;
    width: 90%;
    margin-left: -25px;
  }

  a {
    color: #00D7FD;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    border: none;
    background: none;
    outline: none;
    
    &:hover {
      color: #96EEFE;
    }
  }

  svg {
    font-size: 30px;
    margin-right: 5px;
    margin-bottom: 4px;
  }

  .span_titulo {
    display: flex;
    margin-bottom: 50px;
    color: #000;
  }


.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 50px;
}
 
.bm-burger-bars {
  background: #373a47;
}
 
.bm-burger-bars-hover {
  background: #BDC1C8;
}
 
.bm-cross-button {
  height: 24px;
  width: 24px;
}
 
.bm-cross {
  background: #bdc3c7;
}
 
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}
 
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}
 
.bm-morph-shape {
  fill: #373a47;
}
 
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}
 
.bm-item {
  display: inline-block;
}
 
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`

export const Image = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-self: flex-end;
    padding: 10px 20px 10px;
    

    img { 
      width: 230px;
      height: 80px;
    }
`

