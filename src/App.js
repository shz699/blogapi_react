import './App.css';

import { useEffect, useState } from 'react';
import PostLoading from './components/PostLoading';

function App() {
 
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
});
useEffect(() => {
  setAppState({loading:true})
  const apiUrl = 'http://127.0.0.1:8000/api/';
  let task = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAppState({
          loading: false,
          posts:data
        });
      });
    };
    setTimeout(task, 2000)
    }, [setAppState]);
  return (
    <div className="App">
     {/* <Posts /> */}
     <PostLoading isLoading={appState.loading} posts={appState.posts}/>
    </div>
  );
}

export default App;
