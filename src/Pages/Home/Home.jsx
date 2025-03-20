import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Feature/Feature';
import Testimonials from './Testimonials/Testimonials';
import {Helmet} from "react-helmet";


const Home = () => {

    return (



        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro-Boss | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>

    );
};

export default Home;