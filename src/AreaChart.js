import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import EmpData from './employees.json';
const LineChartNew = () => {

  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [Employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   const age = [];
  //   const salary = [];
  //   const apiUrl = `https://dummy.restapiexample.com/api/v1/employees`;
  //   axios
  //     .get("https://dummy.restapiexample.com/api/v1/employees")
  //     .then(response => {
  //       console.log(response);
  //       response.data.data.map(item => {
  //         console.log(item);
  //         age.push(item.employee_age);
  //         salary.push(item.employee_salary);

  //       });
  //       setCategory(salary);
  //       setData(age);
  //     }).catch(e => {
  //       alert(e);
  //     })
  // }, []);

  /* useEffect(() => {
    const age = [];
    const  salary = [];
   const fetchData = async() => {
     try{
      const response = await fetch('./employees.json');
      const json = await response.json();
      console.log(json)
     } catch(error){
      console.log("error", error);
     }
   };
   
   fetchData();
  }, []); */


  /* const series = [{
     name: "Desktops",
     data: data
   
 }]
 
 const options = {
     chart: {
       height: 350,
       type: 'line',
       zoom: {
         enabled: false
       }
     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       curve: 'straight'
     },
     title: {
       text: 'Product Trends by Month',
       align: 'left'
     },
     grid: {
       row: {
         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
         opacity: 0.5
       },
     },
     xaxis: {
       categories: category ,
     }
   }
 */
  // console.log(Employees)
  const employeedata = EmpData.map(emp => emp.employee_age)
  const employeesalary = EmpData.map(emp => emp.employee_salary)
const colrs = ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', 
]
  return (

    <div id="chart">
      {/* <Chart options={options} series={series} type="line" height={350} /> */}
      <p>Chart has to render</p>
      <Chart options={{
        chart: {
          id: 'apex-chart'
        },
        xaxis: {
          categories: employeesalary,
        },
        colors:colrs,
    
         plotOptions: {
            bar: {
              borderRadius: 3,
              horizontal: true,
            }
          },
      }}
        series={[{
          name: "Employees",
          data: employeedata

        }]} type="area" height={350} />
    </div>

  )
}

export default LineChartNew;