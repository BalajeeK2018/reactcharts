
import React, { useState} from 'react';

import './App.css';
import BasicMenu from './BasicMenu';









const Header = () => {
  

  return (
    
    <div className='container-fluid header'>
      <div className='d-flex'>
        <a >Dashboards</a>
        <BasicMenu />
        <p>CRM(Clinical Rule Maintenance) Backend Service Dashboard</p>
       
      </div>
      
    </div>
    
  
  );
}

export default Header;
