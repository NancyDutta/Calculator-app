// import React from 'react';
// import ReactDOM from 'react-dom' ;
// import './index.css';
// // ReactDOM.render(<>
// // <h1>hello nancy </h1>

// // </>,document.getElementById('root'));
// let currDate= new Date(2023,12,22,19);
// currDate=currDate.getHours();
// let greeting='';
// const cssStyle={};
// if(currDate> 1 && currDate<12){
//     greeting="Good Morning";
//     cssStyle.color="yellow";
// }else if(currDate>=12 && currDate<16){
//     greeting="Good Afternoon";
//     cssStyle.color='red';
// }else if(currDate>=16 && currDate<=24){
//     greeting="Good Night";
//     cssStyle.color="blue";
// }
// ReactDOM.render(<>
// <div className='greeting'>Hello sir, <span style={cssStyle}>{greeting}</span></div>
// </>,document.getElementById('root'));

// 1.
/*
import React from 'react';
import ReactDOM from 'react-dom';
import youtuber , {name,program} from './App';
ReactDOM.render(<>
<ol>
    <li>{youtuber}</li>
    <li> Nancy</li>
    <li>Khushi</li>
    <li> Rashi</li>
    <li>Sumit</li>
    <li>Akash</li>
    <li>yash</li>
    <li>chukku</li>
    <li>{name}</li>
    <li>{program()}</li>
</ol>
</>,document.getElementById('root'));*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
  
ReactDOM.render( <>
<nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
</>,document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<><App/></>,document.getElementById('root'));


























