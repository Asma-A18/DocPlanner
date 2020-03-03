import React from 'react';

function Section(props) {
return( 
<div className="section-4">
{props.improve.map(el => 
    <div>
<h1>{el.title}</h1>
<p>{el.paragraph}</p>

    </div>)}

</div>
)
}
export default Section; 



