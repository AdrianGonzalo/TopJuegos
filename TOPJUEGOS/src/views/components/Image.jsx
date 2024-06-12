import React from 'react';
import './Image.css'
import AddColorGrade from './Color';

function Game ({ name, imageSrc, grade })  {
    const colorGrade = AddColorGrade(grade)

  return (
    <section className='Game'>
      <img src={imageSrc} className='Image' alt={name} />

      <div className='AllDescription'>
        <p>{name}</p>
        <p className={colorGrade}>{grade}</p>
      </div>
    </section>
  );
};

export default Game;