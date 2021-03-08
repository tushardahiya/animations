import React from "react";
import CSSTransition from 'react-transition-group/CSSTransition';

import "./Modal.css";

const animationTiming = {
  enter:400,
  exit:1000
};

const modal = props => {
  return(
    <CSSTransition 
      in={props.show} 
      timeout={animationTiming} 
      mountOnEnter 
      unmountOnExit
      classNames={{
        enter:'',
        enterActive:'ModalOpen',
        exit:'',
        exitActive:'ModalClosed',
        //the ones below are used when initially rendering to dom and which is
        //not conditional ..its gonna sstay there
        appear:'',
        appearActive:''
      }}>
        <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
    </CSSTransition>
  );
};

export default modal;
