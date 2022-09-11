import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Header, List,ListItem} from 'semantic-ui-react'

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5026/api/Activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
      <Header as='h2' icon='user' content='Reactivities'/>
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;


   /* <Header as='h2' icon='user' content='reactivities'/>
      <header className="App-header">
        <List>
          {activities.map((activity: any) => (
            <ListItem key={activity.id}>
              {activity.title}
            </ListItem>
          ))}
        </List>
      </header> */