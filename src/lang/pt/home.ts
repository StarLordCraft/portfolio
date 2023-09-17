import React from 'react';
function Title(): React.JSX.Element {
  return React.createElement(
    React.Fragment,
    null,
    'Transformando Idéias',
    React.createElement('br'),
    'em'
  );
}

export default {
  title: Title(),
  highlightTitle: `Realidade Digital`,
  subtitle: `Como estudante dedicado na área de Sistemas de Informação, tenho o orgulho de ser
   um medalhista olímpico e de ter recebido diversas premiações em minha trajetória. Atualmente,
   atuo no mercado como freelancer, onde ofereço soluções abrangentes para uma variedade de necessidades tecnológicas.`,
};
