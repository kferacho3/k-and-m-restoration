import "./Connect.scss";
import bg from '../../images/ContactImg.svg'



import React, { useRef, useEffect, useState} from 'react';

import {
  ContactContainer, ContactContainerImg, CMessageCont, CHeader, CName,
   CAddress, CCity, CZip, CPhone, CEmail, CButton
} from './ContactElements';




function Contact({isOpen, toggle}) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }

  return (
<>
<ContactContainer id= 'contact'>
    <ContactContainerImg  style = {{ backgroundImage: `url(${bg})`}}/>
        <CMessageCont>
            <CHeader>Schedule Your Inspection </CHeader>
            <CName type="text" placeholder="*Name"/>
            <CAddress type="text" placeholder="*Address"/>
            <CCity type="text" placeholder="*City"/>
            <CZip type="text" placeholder="*Zip"/>
            <CPhone type="text" placeholder="*Phone"/>
            <CEmail type="text" placeholder="*Email"/>
            <CButton>SEND</CButton>
        </CMessageCont>
        
</ContactContainer>
</>
  );
}
export default Contact;