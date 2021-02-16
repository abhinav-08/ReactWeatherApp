import React, { useState,useEffect,Component } from 'react';
import WeatherCard from "./WeatherCard"


//API Key: 8bab7abe7e1c4a6980c183741200711

export default class WeatherInfo extends Component { 
    constructor(props){
        super(props);
        this.state={
            city:'',
            consolidatedData:{},
            limit:0,
        }
        this.data=null;
        this.minTemp=null;
        this.maxTemp=null;
        this.weatherType=null;
        this.temp=[];
        // this.totalCards=null;
    }   

    handleCityName=(e)=>{
        this.setState({
            city:e.target.value
        })            
    }

    handleLimit=(e)=>{
        this.setState({
            limit:e.target.value
        })        
    }
    
    getResults=async(e)=> {
        e.preventDefault();
        //console.log("http://api.weatherapi.com/v1/forecast.json?key=8bab7abe7e1c4a6980c183741200711&q="+this.state.city+"&days="+this.state.limit);
        const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=8bab7abe7e1c4a6980c183741200711&q="+this.state.city+"&days="+this.state.limit);
        this.data = await response.json();
        console.log(this.data.forecast.forecastday);
        console.log(this.state.consolidatedData);
        this.setState({
            consolidatedData:this.data.forecast.forecastday
        });

        console.log("data"+this.state.consolidatedData);
        console.log("API Data"+this.data.forecast.forecastday);
        for(var i=0;i<this.state.limit;i++)
        {
            this.temp.push(i);
            //console.log(this.temp[i]);
        }

        // console.log(this.data.forecast.forecastday);
        //console.log(this.state.consolidatedData);

        //    this.totalCards=this.state.consolidatedData.map(
        //    (value)=>{
        //    <WeatherCard  weatherType="{val}" minTemp={this.state.consolidatedData[1].day.mintemp_c} maxTemp={this.state.consolidatedData[1].day.maxtemp_c} date={this.state.consolidatedData[1].date}/>
        //    })
        
    }

    render() {
        
        return (
            <div>
                <section className="contact bg-success">
                <br/><br/>
                    <div className="container">
                        <h2 className="text-white">
                            Please refer below to know the Weather Details 
                        </h2>
                        <br/>
                        <form className="form-inline" onSubmit={(e)=>{this.getResults(e)}}>
                            <div className="form-group">
                            <input type="text"  className="form-control bg-light mx-3 my-5" name="City" onChange={this.handleCityName} placeholder="City" />
                            <input type="text"  className="form-control bg-light mx-3 my-5" name="Limit" placeholder="No. of days" onChange={this.handleLimit} />
                            <input type="submit" className="btn bg-primary" value="Get Info" />                         
                            </div>
                        </form>
                        
                        <div className="card-group">
                            {/* <div>{this.totalCards}</div> */}
                            
                            {
                                this.temp.map((value)=>{
                                   console.log(this.state.consolidatedData[value].day.condition.icon);
                                    return( <WeatherCard  image={this.state.consolidatedData[value].day.condition.icon} weatherType={this.state.consolidatedData[value].day.condition.text} minTemp={this.state.consolidatedData[value].day.mintemp_c} maxTemp={this.state.consolidatedData[value].day.maxtemp_c} date={this.state.consolidatedData[value].date}/>
                                )})
                            }

                           {/* <WeatherCard day="Monday" weatherType="fds" minTemp="dd" maxTemp="ssdas"/>
                            <WeatherCard day="Monday" weatherType="fds" minTemp="dacd" maxTemp="ssdas"/>
                            <WeatherCard day="Monday" weatherType="fds" minTemp="dac" maxTemp="ssdas"/>
                           */}
                        </div>
                    </div>
                    <br/><br/>
                </section>
            </div>
        )
    }
}
