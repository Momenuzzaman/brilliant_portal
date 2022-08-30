import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Col,
  Input,
  Button,
  Label,
} from "reactstrap";
import post from "../../../helpers/post";
import { useToasts } from "react-toast-notifications";
import get from "../../../helpers/get";

const Conscent = () => {


    const history = useHistory();
    const [activetab, setActivetab] = useState("4");
    const {addToast} = useToasts();
    const [success, setSuccess] = useState(false);
    const [conscentData, setConscentData] = useState({});

    const consultantId = localStorage.getItem('consultantRegisterId');

    useEffect(()=>{

        get(`ConsultantConscent/Get/${consultantId}`)
        .then(res => {
            console.log(res,'conscentData');
            setConscentData(res);
        })

    },[success])


    const backToConsultantList = () => {

        history.push("/consultantList");
      };

      const sendEmail = () => {
        get(`ConsultantConscent/SendEmail/${consultantId}`)
        .then(res => {
            if(res?.status == 200){
                addToast(res,{
                    appearance: 'success',
                    autoDismiss: true
                })
                setSuccess(!success);

            }
        })
      }



      const toggle = (tab) => {
        setActivetab(tab);
        if (tab == "1") {
          history.push("/addConsultantInformation");
        }
    
        if (tab == "2") {
          history.push("/addBankDetails");
        }
    
        if (tab == "3") {
    
        }
    
        if (tab == "4") {
          history.push("/addConscent");
        }
    
      };


    return (
        <div>
             <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light"> Terms and Conditions</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToConsultantList}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Consultant
              List
            </span>
          </div>
        </CardHeader>
      </Card>


      <Card>
        <CardBody>

          {/* nav tabs start */}

          <Nav tabs>
              <NavItem>
                <NavLink
                 
                  active={activetab === "1"}
                  onClick={() => toggle("1")}
                >
                  Information
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                 
                  active={activetab === "2"}
                  onClick={() => toggle("2")}
                >
                  Bank  Details
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                
                  active={activetab === "3"}
                  onClick={() => toggle("3")}
                >
                  Commission
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                
                  active={activetab === "4"}
                  onClick={() => toggle("4")}
                >
                  Conscent
                </NavLink>
              </NavItem>


            </Nav>

          {/* nav tabs end */}

          <div className="container">

            <div>
            <div >
              <h5 className="mb-3">
                {" "}
                <b className="bg-u">Terms and Conditions</b>{" "}
              </h5>

          
            </div>
                <span className="conscentText-style">1. To conduct yourself with integrity, professionally and ethically in a manner that will reflect positively and promote the image of <b>SMS Higher Education Group</b>.</span>

                <br/>

                <span className="conscentText-style">2. Must follow and check the general entry criteria for admission in colleges/universities i.e. valid passport, required qualification, nationality.</span>

                <br/>

                <span className="conscentText-style">3. Must ensure all the paperwork, provided by the students is true and accurate according to the data protection act, the agency will not be responsible for any incorrect or fraudulent documents.</span>

                <br/>

                <span className="conscentText-style">4. Our service for students is 100% free, nobody is allowed to charge for any of the services.</span>

                <br/>

                <span className="conscentText-style">5. We provide guidance and support to our students, no one is allowed to help the students in their coursework.</span>
                
                <br/>

                <span className="conscentText-style">6. Everybody needs to follow the universities’ guidelines and respect their decisions.</span>

                <br/>

                <span className="conscentText-style">7. Our registered student cannot be passed at to any other agency or third party.</span>

                <br/>

                <span className="conscentText-style">8. Follow the university guidelines, only offer our listed courses to the students.</span>

                <br/>

                <span className="conscentText-style">9. Do not make any prior commitment to the student regarding interview, admission, student finance, courses.</span>

                <br/>

                <span className="conscentText-style">10. Do not compare with the policy of other agency or organisation and only follow our guidelines.</span>

                <br/>

                <span className="conscentText-style">11. Do not engage in any activity likely to damage SMS Higher Education Group’s or our partner’s reputations, the activity must be prohibited which likely to damage the academic or professional reputation of any university or other entity associated with the course.</span>

                <br/>

                <span className="conscentText-style">12. Always ensure to advice is given in a professional and accurate manner.</span>

                <br/>

                <span className="conscentText-style">13. Anyone not able to follow any of these conditions, their contract will be immediately terminated and might miss out from any outstanding commissions and bonuses.</span>
                
                <br/>

                <span className="conscentText-style">14. I confirm my email address is accurate and can be considered as my signature.</span>

            </div>


          </div>

          <div className="conscentSign-style ms-md-3 py-1 mt-2">
            <span className="inner-term-style">Terms and Conditions has not Signed yet !!!!</span>
          </div>

          <div className="d-flex justify-content-end mt-1">
            <div>
               {
                (conscentData == null || conscentData?.isSigned == false) ?
                 <div className="mb-1 text-right">
                 <Button color="primary"
                 onClick={sendEmail}
                 >
                     Send Email
                 </Button>
             </div>
             :
             null
               }
               
                <div className="mt-1">
                    <Button color="primary">
                        Accept Terms and Conditions
                    </Button>
                </div>
            </div>

          </div>


        
        </CardBody>
      </Card>
            
        </div>
    );
};

export default Conscent;