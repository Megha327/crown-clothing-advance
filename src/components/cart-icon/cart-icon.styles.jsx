import { styled } from "styled-components";
import { ReactComponent as ShopingSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemCount  = styled.span`
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    bottom: 6px;
`

export const ShoppingIcon = styled(ShopingSvg)`
    width: 24px;
    height: 24px;
`