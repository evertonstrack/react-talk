import React from 'react';
import { Link } from 'react-router-dom';

import './section.css';

const Section = ({title, prev, next, color = null}) => {
    return (
      <section className="section section-divider" data-color={color}>
        <h1>{title}</h1>
        <Link className="section-prev" to={`${prev}`}></Link>
        <Link className="section-next" to={`${next}`}></Link>
      </section>
    );
}

export default Section;