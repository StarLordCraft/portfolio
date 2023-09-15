import React from "react"
function Title(): React.JSX.Element 
{
    return React.createElement(React.Fragment, null, "Transformando Idéias", React.createElement("br"), "em");
}

export default {
    title: Title(),
    highlightTitle: `Realidade Digital`,
    subtitle: ``
}
