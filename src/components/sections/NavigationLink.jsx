import React, { useState } from "react";
import { linkStyle } from "../../assets/styles";

function NavigationLink ({link, name}) {
    const [isHover, setIsHover] = useState(false);
    const style = {
        ...linkStyle,
        fontSize: isHover ? '20px' : '16px',
    };
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <a href={link} style={style}>-{name}</a>
        </div>
    )
}

export default NavigationLink;