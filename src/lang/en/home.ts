import React from "react"

//by some reason i cant use react notation here so i do this way to solve the problem!
function Title(): React.JSX.Element 
{
    return React.createElement(React.Fragment, null, "Transforming Ideas", React.createElement("br"), "Into");
}

export default {
    title: Title(),
    highlightTitle: `Digital Reality`,
    subtitle: ``
}
