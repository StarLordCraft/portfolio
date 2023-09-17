import React from "react"

//by some reason i cant use react notation here so i do this way to solve the problem!
function Title(): React.JSX.Element 
{
    return React.createElement(React.Fragment, null, "Transforming Ideas", React.createElement("br"), "Into");
}

export default {
    title: Title(),
    highlightTitle: `Digital Reality`,
    subtitle: `As a dedicated student in the field of Information Systems,
     I take pride in being an Olympic medalist and receiving numerous awards throughout
     my journey. Currently, I work in the market as a freelancer, where I provide comprehensive
     solutions for a variety of technological needs.`
}
