//import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';


function App() {

  const url = 'http://api-test.us-east-1.elasticbeanstalk.com/user/';

  const [user, setUser] = useState([]);
  const [uid, setUid] = useState(' ');
  const [image, setImage] = useState(' ');


  

  var row = 1;
  var rowHTML = '';
  
  // var names = [
  //   {name: 'Michael'}, {name:'Brian'}, {name:'John'}
  // ];
  // var sayHello = names.map(function (name) {
  //     return (
  //       <li>{name.name}</li>
  //     );
  // });

  var fetchInfo = () => { 
    const urlSearchString = window.location.pathname.split('/');

    const params = urlSearchString[2];
    console.log(url+''+params)
    setUid(params);
    return axios.get(url+''+params) 
             .then(
              (response) => {
                console.log(response.data.age);
                setUser(response.data);

                if (response.data.gender === 'Male') {
                  setImage('/male.svg')
                } else {
                  setImage('/female.svg')
                }
              }
          );
  }

  useEffect(() => {
    fetchInfo();
    
  }, []);

  

  return (
    
    <div className="App">
      <header className="App-header">
      
      <div className="container">
        
        <div className="row">
          
          <div class="col-12" key={user.id}>
          <div class="card mx-1 my-3">
          <div class="row g-0">
            <div class="col-md-4">

              <img src={image} className="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 className="my-4">{user.name}</h1>
                <h5 class="card-title">{user.gender}</h5>
                

                <p class="fs-4">About Me</p>
                <p class="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <ul class="list-group list-group-flush">
              <li class="fs-4 list-group-item">Email : {user.email}</li>
                <li class="fs-4 list-group-item">Age : {user.age}</li>
                <li class="fs-4 list-group-item">Occupation : {user.occupation}</li>
                <li class="fs-4 list-group-item">Country : {user.country}</li>
              </ul>
              <div class="card-body">
              <Link to="/" className='fs-3' >&lt;&lt; Back</Link>
              </div>
            </div>
          </div>
          </div>
          </div>
          
          

          
        </div>
      </div>


        
        
      </header>
    </div>
    
  );
}

export default App;
