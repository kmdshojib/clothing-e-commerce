import styled from 'styled-components'
import Button from '../custom-button/button'

export const CollectionItemContainer =styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    position:relative;
    height: 350px;
    align-items: center;
    margin-top: 25px;

    &:hover{
      .image{
        opacity: 0.8;
      
      }
    button {
        opacity: 0.85;
        display: flex;
    }
    }
`
export const AddButton = styled(Button)`
    width: 60%;
    opacity: 0.7;
    position:absolute;
    top: 65%;
    display:none;
`
export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`
export const PriceContainer = styled.span`
    width: 10%;
`
