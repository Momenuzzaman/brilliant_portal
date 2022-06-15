import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane,Form, FormGroup, Col, Input, Button } from 'reactstrap';
import get from '../../../helpers/get';

const PersonalStatement = () => {

    const history = useHistory();

    const [activetab, setActivetab] = useState("7");

    const studentIdVal = localStorage.getItem('applictionStudentId');


    const backToDashboard = () =>{
       
        history.push('/');
    }

    const toggle = (tab) => {
        setActivetab(tab);
        if (tab == "2") {
          history.push("/addUniversityCampus");
        }
        // if (tab == "3") {
        //   history.push("/addUniversityFinancial");
        // }
        // if (tab == "4") {
        //   history.push("/addUniversityFeatures");
        // }
        // if (tab == "5") {
        //   history.push("/addUniversityGallery");
        // }
      };

      const handleRegisterStudent = (event) => {
        event.preventDefault();
      }




    return (
        <div>

        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Add Personal Statement</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>


      <Card>
      <CardBody>
      <Nav tabs>

          <NavItem>
          <NavLink  active={activetab === "1"} onClick={() => toggle("1")}>
            Application
          </NavLink>
        </NavItem>

            <NavItem>
              <NavLink active={activetab === "2"} onClick={() => toggle("2")}>
                Personal
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  active={activetab === "3"} onClick={() => toggle("3")}>
                Contact
              </NavLink>
            </NavItem>

         

            <NavItem>
              <NavLink  active={activetab === "4"} onClick={() => toggle("4")}>
                Educational
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink  active={activetab === "5"} onClick={() => toggle("5")}>
                Experience
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink  active={activetab === "6"} onClick={() => toggle("6")}>
                Reference
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink  active={activetab === "7"} onClick={() => toggle("7")}>
                Personal Statement
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink disabled active={activetab === "8"} onClick={() => toggle("8")}>
                Others
              </NavLink>
            </NavItem>
           

          </Nav>

          <Form onSubmit={handleRegisterStudent} className="mt-5">

            
                
          <input 
          type='hidden'
          name='studentId'
          id='studentId'
          value={studentIdVal}
          />

          <FormGroup row className="has-icon-left position-relative">
          <Col md="2">
          <span>
             Personal Statement <span className="text-danger">*</span>{" "}
          </span>
        </Col>
        <Col md="6">
    

        <Input type="textarea" name="statement" id="statement" rows={15}/>

      </Col>


        </FormGroup>

      
        <FormGroup
          className="has-icon-left position-relative"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button.Ripple
            type="submit"
            className="mr-1 mt-3 badge-primary"
          >
            Submit
          </Button.Ripple>
        </FormGroup>
      </Form>
      

   
           
       
      </CardBody>
    </Card>
        
            
        </div>
    );
};

export default PersonalStatement;