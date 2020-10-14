import React from 'react';

const Button = ({ text, active, onClick }) => {
  return(
 <a className={active ?  "f6 link ph3 pv2 mb2 dib black bg-white ba bw1 mr1 " :"f6 link ph3 pv2 mb2 dib white bg-black mr1 ba bw1 b--black bg-animate hover-bg-white hover-black"} onClick={onClick} href="#0">{text}</a>
  )
}

export default Button;