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
import Select from './Select';

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
      <Select />
    <div className="row customerdetails">
      <LineChart />
      <LineChartNew  />
      <DonutChart/>
      </div>
      <div className='row'>
      <BarChart/>
      <VerticalBarGraph/>
      <AreaChart/>
      </div>
      <Request />
    </div>
    </div>
    )
    
  }
}
