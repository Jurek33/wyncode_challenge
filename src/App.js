import React, { useState } from 'react';
import './App.css';
import Button from './components/button.component';
import Repositories from './components/repositories.component';
import ErrorBoundary from './components/error.boundary.component';
import Greeting from './components/greeting.component';

const App = () => {

  const [prevState, setState] = useState({
    repositories: [],
    isFetchSuccess: false,
    isPending: false,
    isFetchFailed: false
  });

  const handleSubmit = async () => {
    setState({isPending: true})
    try {
      const giturl = 'https://api.github.com/users/Jurek33/repos?';
      const response = await fetch(giturl);
      const data = await response.json();
      const repos = data.filter(item => 
        item.name==='clothing_shop' ||
        item.name==='Face_Recognition' || 
        item.name==='Robo_Friends' || 
        item.name==='Hackerrank_Solutions' || 
        item.name==='health_assistant'
      );
      if(repos) setState({
        isFetchSuccess: true, 
        isPending: false, 
        repositories: repos
      });
    } 
    catch(error) {
      console.log(error.message); 
      setState({
        isFetchFailed: true, 
        isPending: false
      })
    }
    
  }
  return (
    <div className="App">
      <Greeting />
      <Button message={'See repositories preview'} onClick={() => handleSubmit()} />
      <div className='repositories-info'>
        {
          prevState.isPending? <div className='loading'>loading... Just a few moments</div> : 
          prevState.isFetchSuccess ? <Repositories items={prevState.repositories} /> :
          prevState.isFetchFailed ? <ErrorBoundary />:
          null
        }
      </div>
    </div>
  );
}

export default App;
