import React, { Component } from "react";
import {
  FiUsers,
  FiAperture,
  FiShare2,
  FiCpu,
  FiLayers,
  FiCodesandbox
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiShare2 />,
    title: "Developer Relations",
    description:
      "Our team has been a prominent contributor to the CosmWasm ecosystem, commited to the improvement of the developer experience. As part of InterWasm DAO we provide support systems, documentation, workshops, and events; continuing our work and ensuring healthy growth for the broader ecosystem.",
  },
  {
    icon: <FiCpu />,
    title: "Validator",
    description:
      "We provide validator services, mainly focused on networks built using Cosmos SDK. We have skilled engineers monitoring our nodes 7/24, completing scheduled upgrades, recovering from emergencies or providing hands-on support should the network need it.",
  },
  {
    icon: <FiUsers />,
    title: "Consultancy",
    description:
      "We provide consultancy for all things blockchain, fintech and NFTs: Technical, non-technical and creative.",
  },
  {
    icon: <FiLayers />,
    title: "Know-How",
    description:
      "We pride ourselves on procedural, conceptual and technical knowledge we acquired by working on and with cutting-edge distributed ledger technology, with some of them since their inception.",
  },
  {
    icon: <FiAperture />,
    title: "DAO",
    description:
      "Designing, building and participating in distributed decision-making systems is one area of our expertise, as well as our passion.",
  },
  {
    icon: <FiCodesandbox />,
    title: "NFT",
    description:
      "We develop and implement innovative NFT concepts that allow provably fair ownership and safe transfer of value; enabling a unique and memorable experience to creators and collectors as pioneers of value generation.",
  },
];

class ServiceTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row justify-content-center mb--40">
            <div className="col-lg-10 col-12">
              <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                <h2 className="title">What we do</h2>
                <p>
                  We are thinkers, builders, engineers, and artists. Some of the
                  services we provide are below, but this list is not exhaustive
                  and ever-expanding.
                </p>
                <p>
                  Feel free to get in touch with us if you're not sure, we love
                  to chat.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11 col-12 mt_md--50">
              <div className="row service-one-wrapper">
                {ServiceList.map((val, i) => (
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                    <div style={{ cursor: "default" }}>
                      <div className="service service__style--2">
                        <div className="d-flex align-items-center">
                          <div className="icon mr--15">{val.icon}</div>
                          <h3 className="title">{val.title}</h3>
                        </div>
                        <div className="content">
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
