import diagnose from '../images/diagnose.png';
import consult from '../images/consult.png';
import treat from '../images/treat.png';
import confidential from '../images/confidential.png';
const Services = () => {
    return ( 
        <div className="service">
            <div className="diagnose">
            <img src={diagnose} alt="" />
            <h3>Do Your Diagnostics By Yourself</h3>
            </div>
            <div className="treatment">
            <img src={consult} alt="" className="consult" />
            <h3>Book Sessions or Consult Online</h3>
            </div>
            <div className="results">
            <img src={treat} alt="" className="treat" />
            <h3>Get Effective solutions to your skin problems</h3>
            </div>
            <div className="secure">
            <img src={confidential} alt="" className="confidential" />
            <h3>100% Confidential and Secure</h3>
            </div>

            <h3 className="our">Our Services</h3>
            <h4 className="small">WE PROVIDE DIFFERENT TYPE OF SERVICES</h4>
        </div>
     );
}
 
export default Services;