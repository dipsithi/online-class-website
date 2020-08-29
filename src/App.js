import React from 'react';
import './App.css';
import Course from './components/Header/Course';
import Header from './components/Header/Header';
import courseOnline from './fakeData/courseOnline'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Course></Course>
      
    </div>
  );
}

export default App;
