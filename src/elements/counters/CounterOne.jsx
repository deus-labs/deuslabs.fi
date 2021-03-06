import React, { Component , Fragment } from "react";
// import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : '$2M',
                countTitle: 'Total amount of assets staked',
            },
            {
                countNum : 575,
                countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            }
        ];

        return(
            <Fragment>
                <div className="row justify-content-center">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    {/* <CountUp end={this.state.didViewCountUp ? value.countNum : 0} /> */}
                                    <div>{value.countNum}</div>
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;