import React from 'react'
import { PopupMessage, PopupMTop, PName, PPhone,
     PEmail, PMessage, PButton, PExit
} from './PopUpElements';
import main from '../../images/exit.svg'

function PopUp(props) {
    return (props.trigger) ? (
                 <PopupMessage>
                          <PopupMTop>Schedule your Free Inspection</PopupMTop>
                          <PExit className='close-btn' onClick={() => props.setTrigger(false)}  style={{ backgroundImage:`url(${main})` }}></PExit>
                          <PName type="text" placeholder="*Name"/>
                          <PPhone type="text" placeholder="*Phone"/>
                          <PEmail type="text" placeholder="*Email"/>
                          <PMessage type="text" placeholder="*Message"/>
                          <PButton>REQUEST FREE QUOTE →</PButton>


                      </PopupMessage>
        
    ) : "";
}

export default PopUp;