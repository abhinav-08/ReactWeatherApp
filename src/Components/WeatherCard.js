import React, { Component } from 'react'

export default class WeatherCard extends Component {
        constructor(props) {
            super(props)
            this.state={
                min:0,
                max:0,
                toggle:0
            }
           
        }
        
    displayData=()=>{
            
        
            this.setState(
                {
                    min:this.props.minTemp,
                    max:this.props.maxTemp,
                    toggle:!this.state.toggle
                }
            )
        
            console.log(this.state.min+" "+this.state.max);      
    }
    render() {
        return (
            <div>
                <div className="card mx-3 my-3">
                    <div className="card-body" >
                        <h5 className="card-title mx-4"><span style={{fontWeight:'bold',position:'center'}}>{this.props.date}</span></h5>
                        <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                       
                        {/* <p className="card-text" style={{fontWeight:'bold'}}>Max Temp : {this.props.maxTemp} C</p>
                        <p className="card-text" style={{fontWeight:'bold'}}>Min Temp : {this.props.minTemp} C</p>  */}
                        <p className="card-text"><span style={{fontWeight:'bold',margin:"auto"}}>{this.props.weatherType}</span></p>
                        <button className="btn btn-primary" onClick={this.displayData}>More Details</button>
                        
                        {
                            this.state.min!==0&&this.state.max!==0&&this.state.toggle ?(
                                <div>
                                    <br/>
                                    <p className="card-text" style={{fontWeight:'bold'}}>Max Temp : {this.props.maxTemp} C</p>
                                    <p className="card-text" style={{fontWeight:'bold'}}>Max Temp : {this.props.maxTemp} C</p>
                                </div>
                            ):(
                                <div>
                                    <br/>
                                    <p className="card-text" style={{fontWeight:'bold'}}></p>
                                    <p className="card-text" style={{fontWeight:'bold'}}></p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
        )
    }
}
WeatherCard.defaultProps={
    date:"NoDayProvided",
    weatherType :"NoWeatherconditionProvided",
    minTemp:"Can't Tell",
    maxTemp:"Can't Tell",
};