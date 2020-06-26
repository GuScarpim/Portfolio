import styled from 'styled-components';

export const Container = styled.div`
  border-color: orange;

  h2 {
    outline: none;
  }

  hr {
    position: absolute;
    width: 90%;
    margin-left: -25px;
    box-shadow: 0px 0px 0.7px #00D7FD;
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

  

/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}
 
/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}
 
/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #BDC1C8;
}
 
/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}
 
/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}
 
/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}
 
/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}
 
/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}
 
/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}
 
/* Individual item */
.bm-item {
  display: inline-block;
}
 
/* Styling of overlay */
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



