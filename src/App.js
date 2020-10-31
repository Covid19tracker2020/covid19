import React from 'react';
import { fetchData } from './api';
//import Cards from './components/Cards/Cards';
//import Cards from './components/Chart/Chart';
//import Cards from './components/CountryPicker/CountryPicker';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards,CountryPicker} from './components';
import styles from './App.module.css';
import coronaImage from './images/image.png';
class App extends React.Component{

state={
    data:{},
    country: '',
}

  async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }
    handleCountryChange=async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country});
    }
   

	render()
	{
        const{data}=this.state;
		return(
			<div className={styles.container}> 
            <img className= {styles.image}src={coronaImage} alt="COVID-19"/>
			<Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            
			</div>
        );
	}
}
export default App;
			