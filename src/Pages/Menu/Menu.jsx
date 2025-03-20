import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import Offer from './Offer/Offer';
import Desserts from './Desserts/Desserts';
import Pizza from './Pizza/Pizza';
import Salads from './Salads/Salads';
import Soups from './Soups/Soups';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro-Boss | Menu</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cover img={menuImg} title={'our menu'} subTitle={'Would you like to try a dish?'}></Cover>
            <Offer></Offer>
            <Desserts></Desserts>
            <Pizza></Pizza>
            <Salads></Salads>
            <Soups></Soups>
        </div>
    );
};

export default Menu;