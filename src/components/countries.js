import React from 'react';


function Countries (props) {
    return (



        <div className="hello">
        <div className="warsaw-barcelona-istanbul">
    
           {props.countries.map(el=>
           <div className='varsovie'>
            <div> 
            <img src= {el.img} alt="img"/> <p> {el.par} </p>  </div>
            <button> See openings </button>
            </div>)}
</div>
<hr></hr>
</div>
    )
}




export default Countries ;