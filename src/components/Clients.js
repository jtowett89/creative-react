import { React } from "react";
import Google from "../images/google.png";
import Vistaprint from "../images/vistaprint.png";
import Tokopedia from "../images/tokopedia.png";
import Huawei from "../images/huawei.png";
import Adobe from "../images/adobe.png";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container mt-md-5 pt-md-5">
        <div className="client-img-container">
          <img src={Adobe} className="img-fluid client-img" />
        </div>
        <div className="client-img-container">
          <img src={Vistaprint} className="img-fluid client-img" />
        </div>
        <div className="client-img-container">
          <img src={Tokopedia} className="img-fluid client-img" />
        </div>
        <div className="client-img-container left-margin">
          <img src={Huawei} className="img-fluid client-img" />
        </div>
        <div className="client-img-container">
          <img src={Google} className="img-fluid client-img" />
        </div>
      </div>
    </section>
  );
};
export default Clients;
