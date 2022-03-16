import React , { Component}  from 'react';
// import './App.css';


const Request =() => {
  return (
    <div className="container-fluid">
        <div className='row number mt-5'>
        <div className='col-md-4'>
          <div className='card'>
          <h1>51.8 K</h1>
          <p>Total Requsts Served</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
          <h1>51.7 K</h1>
          <p>Total Success Responses</p>
        </div>
          </div>
        
        <div className='col-md-4'>
          <div className='card'>
          <h1>49</h1>
          <p>HTTP Response Code 400</p>
        </div>
          </div>
       
      </div>
      <div className='row number1'>
        <div className='col-md-4'>
          <div className='card'>
              <div className='card-header'>
                  <h4>HTTP Response Code 500's <br /><span>Since 1 week ago</span> </h4>
              </div>
              <div className='card-body'>
              <h1>47 <br /> <span>HTTP Response Code 500</span></h1>
             
              </div>
        </div>
          </div>
          
        <div className='col-md-4'>
          <div className='card'>
          <div className='card-header'>
                  <h4>Total Requests by Endpoint <br /><span>Since 1 week ago</span> </h4>
              </div>
          <img src={require('./images/piechart1.png')} width='90%' height='180'/>
        </div>
          </div>
        
        <div className='col-md-4'>
          <div className='card'>
          <div className='card-header'>
                  <h4> Response Times By Endpoint  <br /><span>Since 1 week ago</span> </h4>
              </div>
          <img src={require('./images/piechart1.png')} width='90%' height='180'/>
        </div>
          </div>
        
      </div>
    </div>
  );
}

export default Request;
