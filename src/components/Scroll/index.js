import React, { useState } from 'react';
import './styles.css';

import { FaArrowCircleUp } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Scrolll = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className='scroll_position'>
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
        Voltar ao topo!</Tooltip>}>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
      </OverlayTrigger>
    </div>
  );
}

export default Scrolll;