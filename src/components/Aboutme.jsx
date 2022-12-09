import React from 'react';
import { Card, Nav } from 'react-bootstrap';

const Aboutme = () => {
    return (
        <div>
            <video autoPlay muted loop>
                <source
                    src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
                    type="video/mp4"
                />
            </video>


 <Card.Text className='text-about-me'><strong>My name is = Edisson Avila Lopez </strong>
 I was born in Bogota- Colombia,  i started my proffesional
                    life like manager of some enterprices,  i felt than i wanted to
                    develop myself in art, so i studied perfoming arts, and realize mi carrer
                    with some movies, videos, and teather spectacules. the next step for me was to be SOFTWARE DEVELOPER,<br />
                    because i wanted to merge all my knowledge about enterprises with all my creativity about arts,<br /> so,
                    at the moment i had created a lot of projects with my favorites technologys, React.js, Redux, Javascript and Node.js.<br />
                    All resources above, gave me abilities like, patience, creativity, solve problems, learn fast.
                    So <br />
                    <strong>What are you waiting to hire me?</strong>
                    <Nav.Link href='https://wa.me/5930998965599'> Whatsapp-me<box-icon name='phone-call'></box-icon>
                        </Nav.Link>
                </Card.Text>      
 
           

        </div>
    );
};

export default Aboutme;