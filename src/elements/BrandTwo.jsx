import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row justify-content-center brand-style-3">
                    Part of 
                </div>
                <ul className="brand-style-2">
                    <li>
                        <a href="https://cosmwasm.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/cosmwasm-logo-color.png" alt="cosmwasm"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://confio.gmbh/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/confio-logo-color.svg" alt="confio"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://junochain.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/juno-logo-white.png" alt="juno"/>
                        </a>
                    </li>
                </ul>
                <ul className="brand-style-2">
                    <li>
                        <a href="https://tgrade.finance/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/tgrade-logo-white.svg" alt="tgrade"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://cosmos.network/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/cosmos-logo-complex.png" alt="cosmos"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://stargaze.zone/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/stargaze-logo-color.png" alt="stargaze"/>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;