import React, { Component } from "react";
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }


    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    aboutOnClick = (e) => {
        e.preventDefault()
        document.getElementById("about-section").scrollIntoView();
    }

    servicesOnClick = (e) => {
        e.preventDefault()
        document.getElementById("services-section").scrollIntoView();
    }

    contactOnClick = (e) => {
        e.preventDefault()
        document.getElementById("contact-section").scrollIntoView();
    }

    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { color='default-color' } = this.props;

        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <img src="/assets/images/logo/logo.png" alt="deuslabs" />
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><div onClick={this.aboutOnClick}>About</div></li>

                                <li><div onClick={this.servicesOnClick}>Services</div></li>

                                <li><div onClick={this.contactOnClick}>Contact</div></li>
                            </ul>
                        </nav>
                        {/* <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div> */}
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;