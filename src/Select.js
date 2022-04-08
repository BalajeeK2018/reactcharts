import React , { Component}  from 'react';
import './select.css';
import './App.css';



function Select() {
  return (
    
    <div className='row'>
        <div className='col-md-12 select-date'>
   <form className='form-inline'>
       <input type='date'/>
       <select className='form-select'>
           <option>type1</option>
           <option>type2</option>
           <option>type3</option>
       </select>
       <select className='form-select'>
           <option>type1</option>
           <option>type2</option>
           <option>type3</option>
       </select>
   </form>
   </div>
   </div>
   
  
  );
}

export default Select;
