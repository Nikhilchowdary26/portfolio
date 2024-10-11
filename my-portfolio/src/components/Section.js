import React from 'react';

const Section = ({ id, title, content }) => {
    return (
        <section id={id} className="mb-8 pt-16">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{content}</p>
        </section>
    );
};

export default Section;
