import styled from 'styled-components';
import {FaWpexplorer} from 'react-icons/fa'
import {VscSmiley} from 'react-icons/vsc'
import {Link as LinkR} from 'react-router-dom';



export const GalWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(100px, 1fr));
    grid-template-rows: 150px, 1fr;
    grid-column-gap: 0.3em;
`;

export const GalleryContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: rgba(255, 255, 255, 0.9);
    background-color: #e4e7d8;
    background: linear-gradient(to bottom, #e4e7d8, #ffffff);
`;

export const GalleryHContainer = styled.div`

    background-color: #e4e7d8;
    background: linear-gradient(to bottom, #e4e7d8, #ffffff);
    width: 100vw;
    height: 522px;
    left: 0%;
    right: 0%;
    top: 0px;
    background-repeat: no-repeat;
    background-size: cover;
z-index: -9999;

`
export const GalleryHBG = styled.div`
    position: absolute;
    width: 1000px;
    height: 374px;
    left: 275px;
    top: 115px;

    filter: drop-shadow(5px 10px 10px #000000);

`

export const GalleryH1 = styled.div`
    position: absolute;
    height: 130px;
    left: 12%;
    right: 50%;
    top: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 70px;
    /* or 145% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    border: 1px #000000;
    text-shadow: 0px 8px 10px rgba(0, 0, 0, 1);


`

export const GalleryH2 = styled.div`
    position: absolute;
    height: 130px;
    left: 50%;
    right: 20%;
    top: 175px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 88px;
    line-height: 70px;
    /* or 79% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    border: 1px #000000;
    text-shadow: 0px 8px 10px rgba(0, 0, 0, 1);


`

export const GalleryLogo = styled.div`
position: absolute;
  height: 180px;
  width: 270px;
    left: 15.75%;
    right: 61.38%;
    top: 35.66%;
    bottom: 20.88%;

    filter: drop-shadow(-15px -5px 4px #000000) drop-shadow(20px 15px 10px #000000);

`
export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const GalleryCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const GalleryImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px, -8px -8px #000;
`;

export const GalleryHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const GalleryTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const GalleryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const GalleryDesc = styled.p`
  margin-bottom: 1rem;
`;

export const GalleryPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const GalleryButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;