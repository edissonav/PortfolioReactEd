import React from 'react';
import { NavLink } from 'react-bootstrap';

const Home = () => {
   


    return (
        <div className='home' >
            <h1 className='h1'>Hi, I'm Edisson.  Full stack Developer</h1>
            <div className='home-picture'>

                 <div className='icons-profile'>
                    <h4>See my work</h4>
                    <NavLink  href='https://wa.me/5930998965599'><box-icon name='whatsapp' type='logo' ></box-icon></NavLink>
                    <NavLink href='https://www.linkedin.com/in/edisson-yandery-avila-lopez-887242238/'><box-icon type='logo' name='linkedin'></box-icon></NavLink>
                    <NavLink href='https://github.com/edissonav'><box-icon type='logo' name='github'></box-icon></NavLink>
                    <NavLink href='https://app.netlify.com/teams/edissonav/overview'><box-icon type='logo' name='netlify'></box-icon></NavLink>
                    <NavLink href='/#/portfolio'><box-icon name='folder'></box-icon></NavLink>
                </div>
                <div className='icons-profile'>
                    <h5>Technologys:</h5>
                    <div className='technologys'>
                        <NavLink href='/#/portfolio'>React.js<box-icon type='logo' name='react'></box-icon></NavLink>

                        <NavLink href='/#/portfolio'>Javascript<box-icon name='file-js' type='solid' ></box-icon></NavLink>
                        <NavLink href='/#/portfolio'>Html<box-icon type='logo' name='html5'></box-icon></NavLink>
                        <NavLink href='/#/portfolio'>Css<box-icon type='logo' name='css3'></box-icon></NavLink>
                        <NavLink href='/#/portfolio'>Node.js<box-icon type='logo' name='nodejs'></box-icon></NavLink>



                    </div>
                </div>
            </div>

            <div className='footer'> <footer>Developed with <box-icon name='home-heart'></box-icon> By : Edisson</footer></div>

        </div>
    );
};

export default Home;