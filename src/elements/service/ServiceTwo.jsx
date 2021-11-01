import React, { Component } from "react";
import { FiLayers , FiUsers , FiMonitor, FiShare2, FiCpu, FiBox } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiUsers />,
        title: 'Consultancy',
        description: 'We provide consultancy for all things blockchain and fintech, technical and non-technical.'
    },
    {
        icon: <FiLayers />,
        title: 'Developer Relations',
        description: 'We are currently providing DevRel services for the CosmWasm ecosystem.'
    },
    {
        icon: <FiShare2 />,
        title: 'DAO',
        description: 'Designing and building distributed decision-making systems is one area of our expertise, as well as our passion.'
    },
    {
        icon: <FiMonitor />,
        title: 'Know-How',
        description: 'We pride ourselves on procedural, conceptual and technical knowledge we acquired by working on and with cutting-edge distributed ledger technology, with some of them since their inception.'
    },
    {
        icon: <FiCpu />,
        title: 'Validator',
        description: 'We validate in Cosmos SDK networks to show our stake in the system.'
    },
    {
        icon: <FiBox />,
        title: 'NFT',
        description: 'We participate in NFT value creation space with our technical expertise. '
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'Explore services we provide';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <div style={{ cursor: 'default' }}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
