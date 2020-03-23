import React, { useContext } from 'react';
import styled from 'styled-components';

import { productsContext } from '../../../context/products';
import { ThemeContext } from '../../../context/theme';

import { SingleProductListItem } from './SingleProductListItem';

export const ProductsList = () => {
    const products = useContext(productsContext);
    const { view } = useContext(ThemeContext);

    return (
        <List>
            {products.map(item => (
                <SingleProductListItem
                    view={view}
                    key={item.id}
                    {...item}
                />
            ))}

        </List>
    )
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px -10px;
`