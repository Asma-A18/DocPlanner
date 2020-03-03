import React from 'react';


function Stats(props){
return (

 <div className="section-3">  
<div className="text2">
<h1 className="worldsbiggest"> The world's  biggest healthcare platform </h1>
<p className="p2">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
<div className="logo-section3">
    <img className="picture-logo" src="https://www.docplanner.com/img/logo.png"/>
    

</div>
</div>
<div class="stats-container">
{props.s.map ( el => 
<div className={el.class}> 
<img src={el.pic}/>
<h2>{el.h}</h2>  
<p>{el.p}</p>
 </div>

) }
 
</div>

</div>






)


}



export default Stats; 