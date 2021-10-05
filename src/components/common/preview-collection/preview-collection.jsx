import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import {PreviewCollectionContainer, TitleContainer, PreviewContainer} from './previewcollection.styles'

const PreviewCollection = ({title,items}) => {
    return ( 
        <PreviewCollectionContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {items
                .filter((item, idx) => idx < 4)
                .map((item)=> (
                   <CollectionItem key={item.id} item={item} />

                ))}
            </PreviewContainer>
        </PreviewCollectionContainer>
     );
}
 
export default PreviewCollection;