import styled from "styled-components";

export const PreviewCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    flex-wrap: wrap;

    @media screen and (max-width:800px){
        align-items: center;
    }
`
export const TitleContainer = styled.h2`
    font-size: 28px;  
    margin-bottom: 25px;
    text-align: center;
`
export const PreviewContainer = styled.h2`
    display: flex;

    justify-content: space-between;

    @media screen and (max-width:800px){
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:15px;
    }
}
`
