import React from 'react';
import './repository.style.css';

const Repository = ({item}) => {
   const { name, html_url } = item;
   return (
      <div className='repository'>
         <div className='name'>
            <span className='detail'>{name}</span>
         </div>
         <div className='url'>
            <a 
               className ='link' 
               href={html_url}
               target="_blank"
               rel='noopener noreferrer'
               ><span className='detail'>{html_url}</span></a>
         </div>
      </div>
   )
}

export default Repository;

// display: grid;
//     grid-template-columns: repeat(2,auto);
//     grid-template-rows: repeat(5,auto);
//     grid-gap: 5%;