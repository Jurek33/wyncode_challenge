import React from 'react';
import Repository from './repository.component';
import './repositories.style.css';

const Repositories = ({items}) => {
   return (
      <div className="repositories-container">
         {items.map(item => <Repository key={item.id} item={item}/>)}
      </div>
   )
}

export default Repositories;