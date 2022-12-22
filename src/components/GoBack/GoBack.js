import React, {useState, useEffect} from 'react';

import { GoBackContainer,GoBackText, GoBackIcon} from './GoBackElements';

import gb from '../../images/GoBack.svg'
const GoBack = ({ toggle}) => {
  


    return (
        <>
        
                      
            
        <GoBackContainer>
  
        <GoBackIcon to='/' style={{ backgroundImage:`url(${gb})` }}/>

        </GoBackContainer>
     
        </>
    );
};

export default GoBack;