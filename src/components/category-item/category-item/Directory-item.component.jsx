// import './directory-item.style.scss';

import { useNavigate } from "react-router-dom";
import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from "./directory-item.style";


const DirectoryItem = ({ category }) => {
    const { imageUrl,  title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    }
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl = {imageUrl}></BackgroundImage>
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Show Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;