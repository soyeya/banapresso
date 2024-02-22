import React from 'react';

const Card = ({ header , children, data = [], footer }) => {
  return(
    <div className="card">
        <header>{header}</header>
        <main>
        {children}
        {data.map(({ term, description }) => (
        <dl key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </dl>
      ))}
    </main>
    {footer && <footer>{footer}</footer>}
    </div>
  )

}

export default Card;