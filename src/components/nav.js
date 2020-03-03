import React from 'react';

function Nav(props) { 
return (

    <div>

<img className="logodocplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Logo" />
    <ul className="listtt">
    {props.property.map(Element => <li className={Element.sty}> {Element.menu}
<ul className="dropdown">
    {!Element.drop ? null : Element.drop.map (Element => <li>{Element}</li>)}
</ul>

    </li>
    
    )}
</ul>
</div>
);


}

export default Nav;