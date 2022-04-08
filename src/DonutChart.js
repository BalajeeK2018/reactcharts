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
  const employeedata = EmpData.slice(0, 5).map(emp => emp.employee_age)
  const employeesalary = EmpData.map(emp => emp.employee_salary)
  console.log(employeedata)

  const options = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  }




return (

  <div className='col-md-4'>
    <div className='card'>
      <div className='card-body'>
  <div id="chart">
    <Chart options={options} series={employeedata} type="donut" height={350} />
    <p>Chart has to render</p>
    {/* <Chart options={{
      chart: {
        type: "donut"
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
      // xaxis: {
      //   categories: employeesalary,
      // }
    }}
      series={[{
        name: "Employees",
        data: [12, 14, 13, 50]

      }]} /> */}
  </div>
  </div>
  </div>
  </div>

)
}

export default LineChartNew;