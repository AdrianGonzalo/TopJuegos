import React from 'react';
import AddColorGrade from './Color';


function Game({ name, imageSrc, grade, hours, platform }) {
  const colorGrade = AddColorGrade(grade)

  return (
    <div className='AllSingleMulty'> 
      <section className='Game'>
        <img src={imageSrc} className='Image' alt={name} />

        <div className='AllDescription'>
          <p className='Name'>{name}</p>

          <div className='PlataformAndColor'>
            <p className='Plataform'>{platform}</p>
            <p className='Hours'>{hours}</p>
            <p className={colorGrade}>{grade}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Game;