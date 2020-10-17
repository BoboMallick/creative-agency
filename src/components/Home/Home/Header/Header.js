import React from 'react';
import Intro from '../Intro/Intro';
import './Header.css';

import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='color-bg'>
            <Navbar></Navbar>
            <Intro></Intro>
        </div>
    );
};

export default Header;