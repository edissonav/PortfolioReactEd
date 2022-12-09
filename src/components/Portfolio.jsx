import React from 'react';
import { NavLink } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div className='portfolio'>
<NavLink className='link' href="https://final-ecommerce-with-react.netlify.app">
<div className="card mb-3">
  <h3 className="card-header">E-commerce with React.js</h3>
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactecommerce1.png" alt="" />
  <br />
  <img className='img-portfolio2' src="/src/assets/img/portfolioimgs/reactecommerce2.png" alt="" />

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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactpokedex1.png" alt="" />
  <br />
  <img className='img-portfolio2' src="/src/assets/img/portfolioimgs/reactpokedex2.png" alt="" />

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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactusersapp1.png" alt="" />
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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactrickymortyapp1.png" alt="" />
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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactweatherapp.png" alt="" />
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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/reactcitasapp1.png" alt="" />
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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/jsecommerce1.png" alt="" />
  <br />
  <img className='img-portfolio2' src="/src/assets/img/portfolioimgs/jsecommerce2.png" alt="" />

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
  
  <img className='img-portfolio' src="/src/assets/img/portfolioimgs/jsportfoliosimple1.png" alt="" />
  <div className="card-body">
    <p className="card-text">It is a simple web format with a light interface and css layout which can be used as a base for building with Html5 and Css. was developed with Javascript, Css</p>
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