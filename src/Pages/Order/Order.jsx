import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import OrderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderItem from './OrderItem/OrderItem';
import OrderTab from './OrderItem/OrderTab/OrderTab';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const filterSalad = menu.filter(item => item.category === 'salad')
    const filterPizza = menu.filter(item => item.category === 'pizza')
    const filterSoup = menu.filter(item => item.category === 'soup')
    const filterDessert = menu.filter(item => item.category === 'dessert')
    const filterDrinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={OrderImg} title={'order food'} subTitle={'Would you like to try a dish?'}>

            </Cover>
            <div className='text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salads</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab item={filterSalad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={filterPizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={filterSoup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={filterDessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={filterDrinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;