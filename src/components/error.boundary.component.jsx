import React from 'react';
import './error.boundary.style.css';

const ErrorBoundary = () => {
   return(
      <div className='error-boundary'>
         <h3 className='header'>Error fetching data :(</h3>
         <div className='header'>This may happen because of poor internet connection. Try one of the following:</div>
         <ol className='error-list'>
            <li>Refresh the page</li>
            <li>Connect to other network</li>
            <li>Check firewall</li>
         </ol>
      </div>
   )
}

export default ErrorBoundary;