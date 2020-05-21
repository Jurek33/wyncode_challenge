import React, { useState, useEffect } from 'react';
import './greeting.style.css';

const Greeting = () => {
   const [prevState, setState] = useState({
      success: false, 
      isPending: false, 
      info: ''
   })
   const giturl = 'https://api.github.com/users/Jurek33';
   const getData = async (url) => {
      setState({isPending: true});
      try {
         const response = await fetch(url);
         const data = await response.json();
         if(data) setState({
            success: true, 
            isPending: false, 
            info:data
         })
      } catch(error) {
         console.log(error);
         setState({isPending: false})
      }
   }
   useEffect(() => {
      getData(giturl);
   },[])

   return (
      <div>
         <h2 className='header'>Welcome to Wyncode coding challange page</h2>
         {
            prevState.isPending ?
            <span className='loading'>loading... please wait</span> 
            :  prevState.success ?       
               <div className='container'>
                     <p>Here are some facts about me:</p>
                     <ul className='list'>
                        <li className='item'>My name is Yury but I choosed {prevState.info.login} nickname</li>
                        <li className='item'>I currently have {prevState.info.public_repos} repositories on GitHub</li>
                        <li className='item'>To see my best ones (I hope they are not that bad) click on a button below and wait for the response</li>
                        <li className='item'>
                           To see all of them go straight to  
                           <a href={prevState.info.html_url}
                              target="_blank"
                              rel='noopener noreferrer'
                              className='link'
                              > {prevState.info.html_url}
                           </a>
                        </li>
                        <li className='item'>I appreciate you visiting this page :)</li>
                     </ul>
               </div>
               : null
         }
      </div>

   )
}

export default Greeting;