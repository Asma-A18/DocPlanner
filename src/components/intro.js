import React from 'react';

function Intro({intro}) { 
return (
    <div>
<img className="logo-1" src="https://www.docplanner.com/img/sygnet.png"/>
       <h1 className="titre-1">{intro.title}</h1>
       <div className="text">
              {intro.map(el=>(
                     <p className={el.parsty}>{el.p}</p>
              ))}
       </div>

</div>
);


}

export default Intro;