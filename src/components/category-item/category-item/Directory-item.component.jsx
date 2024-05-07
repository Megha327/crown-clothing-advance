// import './directory-item.style.scss';

import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from "./directory-item.style";


const DirectoryItem = ({ category }) => {
    const { imageUrl,  title} = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl = {imageUrl}></BackgroundImage>
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Show Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;