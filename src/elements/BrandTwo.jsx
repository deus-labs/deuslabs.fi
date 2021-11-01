import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2">
                <li>
                        <a href="https://cosmwasm.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/cosmwasm-logo-white.png" alt="cosmwasm"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://confio.gmbh/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/confio-logo-white.png" alt="confio"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://junochain.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/juno-logo-white.png" alt="juno"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://cosmos.network/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/brand/cosmos-logo-white.png" alt="cosmos"/>
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;