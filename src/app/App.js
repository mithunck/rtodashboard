import React, { Component } from 'react';
import Header from '../common/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div class="container mainContent">
       <div class="content-container">4025 - Sterling Heights Assembly Plant</div>
       <table class="table is-hoverable is-fullwidth is-bordered">
  <thead>
    <tr class="table-header">
      <th>
      <font class="has-text-white">Plant Summary</font>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Required
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        287
      </div>
      </div>
      </nav>
    </td>
    </tr>
    <tr>
    <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Authorized
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        350
      </div>
      </div>
      </nav>
    </td>
    </tr>
    <tr>    
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       In Plant
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        (89%) 314
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Planned Absence
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        12
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Call-in Absence
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        22
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Call-in Tardy
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        4
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       Late to Line
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        6
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       % Line Ready (PFS)
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        70%
      </div>
      </div>
      </nav>
      </td>
    </tr>
    <tr>
      <td>
      <nav class="level is-mobile">
      <div class="level-left">
       <div class="level-item">
       % Trained
      </div>
      </div>
      <div class="level-right">
       <div class="level-item">
        50%
      </div>
      </div>
      </nav>
      </td>
    </tr>
  </tbody>
</table>
<table class="table is-hoverable is-fullwidth is-bordered">
  <thead>
    <tr class="table-header">
      <th>
      <font class="has-text-white">Plant Summary</font>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="columns plantSummary is-gapless">
    <div class="column ">
      <p class="heading">Divison</p>
      <p>FINAL</p>
    </div>
    <div  class="column ">
      <p class="heading">Req</p>
      <p>8</p>
    </div>
    <div  class="column ">
      <p class="heading">Authorized</p>
      <p>8</p>
    </div>
    <div  class="column ">
      <p class="heading">In Plant</p>
      <p>5(63%)</p>
    </div>
    <div  class="column ">
      <p class="heading">Planned Apsence</p>
      <p>0</p>
    </div>
    <div  class="column ">
      <p class="heading">Call-in Apsence</p>
      <p>3</p>
    </div>
    <div  class="column">
      <p class="heading">Call-in Tardy</p>
      <p>0</p>
    </div>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
       </div>
    </div>
    );
  }
}

export default App;
