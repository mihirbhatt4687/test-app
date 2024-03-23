//import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';


function App() {

  const url = 'http://api-test.us-east-1.elasticbeanstalk.com/users';

  const [users, setUsers] = useState([]);

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
    return axios.get(url) 
             .then(
              (response) => {
                console.log('This is test...');
                setUsers(response.data);
              }
          );
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    
    <div className="App">
      <header className="App-header">
      
      <div class="container text-center">
        <h1 class="my-4">User List</h1>
        <div class="row">
        {users.map((data) => {
        rowHTML = '';
        if (row%3===0) {
          rowHTML = function() {
            return (
              '</div><div class="row">'
            );
          }
        }
        return (
          <>
          <div class="col-4" key={data.id}>
          <div class="card mx-1 my-3 mb-3 fs-5">
            <div class="card-body">
              <h5 class="card-title">{data.name}, {data.gender}</h5>
              <p>{data.email}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Age : {data.age}</li>
              <li class="list-group-item">Occupation : {data.occupation}</li>
              <li class="list-group-item">Country : {data.country}</li>
            </ul>
            <div class="card-body">
              <Link to={`/user/${data.id}`} >Detail</Link>
             
            </div>
          </div>
          </div>
          
          {rowHTML}

          </>

        );
      })}
        </div>
      </div>


        
        
      </header>
    </div>
    
  );
}

export default App;
