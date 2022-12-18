import React from 'react'
 
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Img2
    
} from './ServicesElements';
import "./services.scss";
import { animations, motion} from 'framer-motion';
import { animationThree, animationText, BirdEgg } from '../../components/animations/animations';

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }
const InfoSection = ({lightBg, id, imgStart, lightText, topLine,
                      headline, darkText, description, transform,  buttonLabel, 
                      img, alt, primary, dark, dark2, too, bg, shadow, topLineS}) => {

    return (
        
          <InfoContainer lightBg={lightBg} id={id} className='background2'>
          
          <motion.div 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
          <motion.div variants={BirdEgg} >
          
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
       

                      <Column1  >

                      <Heading lightText={lightText}>{headline}</Heading>
                   
                      </Column1>


                      <Column2>
                      
                      </Column2>
                      
                  </InfoRow>
              </InfoWrapper>
</motion.div>
          </motion.div>
              </InfoContainer>  
              
        
    )
}

export default InfoSection




/*   <Button to={too}
                            
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>*/