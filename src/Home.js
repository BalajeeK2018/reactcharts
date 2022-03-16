import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import LineChart from './Chart';
import LineChartNew from './LineChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import VerticalBarGraph from './verticalBarGraph';
import Request from './Request';
import Header from './Header';

//This Component is a child Component of Customers Component
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {

    return (
      <div >
      <Header />
      
      
    <div className='container-fluid'>
      
    <div className="row customerdetails">
      <div className='col-md-4'>
      <LineChart />
      </div>
      <div className='col-md-4'>
      <LineChartNew  />
      </div>
      <div className='col-md-4'>
      <DonutChart/>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-4'>
      <BarChart/>
      </div>
      <div className='col-md-4'>
      <VerticalBarGraph/>
      </div>
      <div className='col-md-4'>
      <AreaChart/>
      </div>
      </div>
      <Request />
    </div>
    </div>
    )
    
  }
}
