import React, { useState } from 'react';
import { Para } from '../Navbar/Navbar.style';
import {
  Popup,
  PopupWrapper,
  FlexWrapper,
} from './index.style';

export default function CompliancePopup({ children }) {
  const [active, setActive] = useState(false);

  let timeout;
  const showPopup = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hidePopup = () => {
    clearInterval(timeout);
    setActive(false);
  };
console.log('popo')
  return (
    <PopupWrapper onMouseEnter={showPopup} onMouseLeave={hidePopup}>
      {children}
      <Popup display={active ? 'flex' : 'none'}>
          User Details
      <FlexWrapper>
          <div><Para>Name</Para></div>
          <div><Para>Jethro</Para></div>
      </FlexWrapper>
      <FlexWrapper>
          <div><Para>Email</Para></div>
          <div><Para>avc@gmail.com</Para></div>
      </FlexWrapper>
      </Popup>
    </PopupWrapper>
  );
}

