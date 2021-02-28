import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import { TabView,TabPanel } from 'primereact/tabview';
import Input from './Input'

function App() {
  const [url, setUrl] = useState('http://api.icndb.com/jokes/random')
  const [joke, setJoke] = useState('')
  const [urls, setUrls] = useState('http://api.icndb.com/jokes/random/1')
  const [jokes, setJokes] = useState([])
  const [userName, setUserName] = useState('You')

  useEffect(() => {
    axios.get(url)
        .then(response => {
            console.log(response.data);
            setJoke(response.data)
        })
    axios.get(urls)
    .then(response => {
        console.log(response.data);
        setJokes(response.data.value)
    })
  }, [url, urls])

  function changeResultNumber (number) {
    setUrls(`http://api.icndb.com/jokes/random/${number}`)
  }

  function changeUserName (username) {
    setUserName(username)
  }

  if (joke) {
    return (
      <div className="App"> 
        <div className="card">
          <div className="card-header"><h1>Chuck Norris send joke to {userName}</h1></div>
          <div className="card-body">
            <TabView>
              <TabPanel header="Single joke">
                <p key={joke.value.id}>- {joke.value.joke}</p>
              </TabPanel>
              <TabPanel header="How many joke do you want?">                
                I want <Input changeResultNumber={changeResultNumber} /> jokes.
                {jokes.map(item => <p key={item.id}>- {item.joke}</p>)}                
              </TabPanel>
              <TabPanel header="Change your name?">
                New username <Input changeUserName={changeUserName} />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    );
  } 

  return (
    <div className="loading">
        Loading...
    </div>
  )
}

export default App;
