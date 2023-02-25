import React from 'react';
import { NavLink } from 'react-bootstrap';
import reactecommerce1 from "../assets/img/portfolioimgs/reactecommerce1.png"
import reactecommerce2 from '../assets/img/portfolioimgs/reactecommerce2.png'
import reactpokedex1 from '../assets/img/portfolioimgs/reactpokedex1.png'
import reactpokedex2 from '../assets/img/portfolioimgs/reactpokedex2.png'
import reactusersapp1 from '../assets/img/portfolioimgs/reactusersapp1.png'
import reactrickymortyapp1 from '../assets/img/portfolioimgs/reactrickymortyapp1.png'
import reactweatherapp from '../assets/img/portfolioimgs/reactweatherapp.png'
import reactcitasapp1 from '../assets/img/portfolioimgs/reactcitasapp1.png'
import jsecommerce1 from '../assets/img/portfolioimgs/jsecommerce1.png'
import jsecommerce2 from '../assets/img/portfolioimgs/jsecommerce2.png'
import jsportfoliosimple1 from '../assets/img/portfolioimgs/jsportfoliosimple1.png'
import apiecommercenode from '../assets/img/portfolioimgs/apiecommercenode.png'
import apiecommercenode2 from '../assets/img/portfolioimgs/apiecommercenode2.png'
import apiecommercenode3 from '../assets/img/portfolioimgs/apiecommercenode3.png'



const Portfolio = () => {
    return (
        <div className='portfolio'>
<NavLink className='link' href="https://final-ecommerce-with-react.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">E-commerce with React.js</h3>
  
  <img className='img-portfolio' src={reactecommerce1} alt="" />
  <br />
  <img className='img-portfolio2' src={reactecommerce2} alt="" />

  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and elegant design in which you can buy different types of products. was developed with React.js, Redux, Bootstrap</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://pokedex-dinamic.netlify.app/">
<div className="card mb-3">
  <h3 className="card-header">Pokedex with React.js</h3>
  
  <img className='img-portfolio' src={reactpokedex1} alt="" />
  <br />
  <img className='img-portfolio2' src={reactpokedex2} alt="" />

  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and and funny design in which you can check all the pokemons with their list of abilities. was developed with React.js, Redux, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://users-app-edd.netlify.app/">
<div className="card mb-3">
  <h3 className="card-header">Users App with React.js</h3>
  
  <img className='img-portfolio' src={reactusersapp1} alt="" />
  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and a thematic design in which a user's information can be created, deleted and edited. was developed with React.js, Redux, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://ricky-and-morty-wiki.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">Rick and Morty Wiki</h3>
  
  <img className='img-portfolio' src={reactrickymortyapp1} alt="" />
  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and a thematic design in which it is possible to consult the identifier of a universe, the residents. was developed with React.js, Redux, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://weatherappedisson.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">Weather App</h3>
  
  <img className='img-portfolio' src={reactweatherapp} alt="" />
  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and a simple design in which you can check weather information depending on the user's location. was developed with React.js, Redux, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://edissonentregable-1.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">Quotes App</h3>
  
  <img className='img-portfolio' src={reactcitasapp1} alt="" />
  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and a simple design in which you can check a random quote from an api. was developed with React.js, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://edisson-ecommerce.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">Ecommerce with JS</h3>
  
  <img className='img-portfolio' src={jsecommerce1} alt="" />
  <br />
  <img className='img-portfolio2' src={jsecommerce2} alt="" />

  <div className="card-body">
    <p className="card-text">It is a web application with a simple interface and a css design in which you can buy different products from an api. was developed with Javascript, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
<NavLink className='link' href="https://marvelous-wisp-91e51a.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">Simple Portfolio With Html5 </h3>
  
  <img className='img-portfolio' src={jsportfoliosimple1} alt="" />
  <div className="card-body">
    <p className="card-text">It is a simple web format with a light interface and css layout which can be used as a base for building with Html5 and Css. was developed with Javascript, Css</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>

<NavLink className='link' href="https://github.com/edissonav/ecommerce_node">
<div className="card mb-3">
  <h3 className="card-header">Ecommerce with Node.js</h3>
  
  <img className='img-portfolio' src={apiecommercenode} alt="" />
  <br />
  <img className='img-portfolio2' src={apiecommercenode2} alt="" />
  <br />
  <img className='img-portfolio2' src={apiecommercenode3} alt="" />
  <br />

  <div className="card-body">
    <p className="card-text">It is a backend application with a simple interface  in which you can find a server complete with documentation to provide all neccesary for a ecommerce. was developed with Node.js</p>
  </div>
  <div className="card-footer text-muted">
    Click Here and Go There
  </div>
</div>

</NavLink>
        </div>
    );
};

export default Portfolio;