import React from 'react';
import me from '../images/me.jpeg'


class Home extends React.Component {

 render() {
 	return (
       <div>
        <h1 className="mt1 mt3-l mt3-m">William Cragg</h1>
        <h2>Full Stack Developer</h2>
        <h2 className="mb4">First Class Physics Masters</h2>
        <img className="w-50-l w-50-m w-90 mb4" src={me} alt="Photograph of William Cragg"/>        
       </div>   
    );
 } 
}

export default Home;