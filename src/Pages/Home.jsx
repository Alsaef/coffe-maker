import React from 'react';
import Banner from '../components/Banner';
import CoffeeDashboard from '../components/CoffeeDashboard';
import ShowCase from '../components/ShowCase';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoffeeDashboard></CoffeeDashboard>
            <ShowCase></ShowCase>
        </div>
    );
};

export default Home;