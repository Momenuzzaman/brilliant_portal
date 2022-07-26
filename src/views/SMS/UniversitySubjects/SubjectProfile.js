import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, Table, Form, FormGroup } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";
import { rootUrl } from '../../../constants/constants';
import profileImage from '../../../assets/img/profile/user-uploads/user-07.jpg'

const SubjectProfile = () => {

    const [subjectData, setSubjectData] = useState({});
    const [campList, setCampList] = useState([]);
    const [serialNum, setSerialNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [campData, setCampData] = useState(null);

    const location = useLocation();
    const history = useHistory();
    const {subjId} = useParams();

    // handle back to subject list and campus subject list from subject profile
    const backToSubjectList = () =>{
      if(localStorage.getItem("campIdSubProfile")){
        history.push(`/campusSubjectList/${localStorage.getItem("campIdSubProfile")}`);
      }
      else{
        history.push('/subjectList');
      } 
    }

    useEffect(()=>{
      get(`Subject/Profile/${subjId}`)
      .then(res=>{
        console.log("subjectPro", res);
        setSubjectData(res);
        setCampList(res?.campusSubjects);
        setLoading(false);
      });

      if(localStorage.getItem("campIdSubProfile")){
            get(`UniversityCampus/Get/${localStorage.getItem("campIdSubProfile")}`)
            .then(res=>{
                console.log("oneCampObj", res);
                setCampData(res);
            })
        }
        else{
            return;
        }
        // localStorage.removeItem("campIdSubProfile");
    },[])

    console.log("campdata", campData);


    return (
        <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">

          <h3 className="text-light">Subject Details</h3>
          <div className="page-header-back-to-home" >
            <span onClick={backToSubjectList} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Subject List</span>
          </div>

          </CardHeader>
        </Card>

      <div className="uapp-employee-profile">

        {/* <Row>
          <Col md="12"> 
           <Card className="uapp-employee-profile-right" >
             <div className="uapp-profile-CardHeader">
                  
                
                <h5> {subjectData?.name}</h5>
                 <p> {subjectData?.providerType?.name} </p>  
            </div>
              <CardBody>

                 <div>
                 <ul className="uapp-ul text-center">
                     <li> {subjectData?.email} </li>
                     <li> {subjectData?.phoneNumber} </li>
                   
                   </ul>
                 </div>

            </CardBody>
          </Card>

          
          </Col>
        </Row> */}



        <Row>

          <Col md='8'>

          <Card>
                <CardBody>
                    



                  <div className="uapp-employee-profile-image-edit">
                    <Row>
                      <Col> 
                        <div>
                        <div className="text-left">
                            <h4 className='ms-2'>{subjectData?.name}</h4>
                        </div>
                        </div>  
                      </Col>

                    <Col> 
                    <div className="uapp-employee-profile-Edit">
                    <div className="text-right">
                      <span> <i className="fas fa-pencil-alt"></i> </span>
                    </div>
                    </div>  

                        </Col> 
                    </Row>            
                   </div>     


                      <div className="uapp-employee-profile-generalInfo"> 
                       <Row>
                         <Col md="6"> 

                          <ul className="uapp-ul text-left">
                            <li> 
                                <span> Program : {subjectData?.programLevel?.name} </span>
                            </li>

                             <li> 
                                <span> Duration : {subjectData?.duration}</span>
                            </li>


                          </ul>

                      </Col> 

                      <Col md="6"> 
                     <ul className="uapp-ul text-right1">
                            <li> 
                              {/* <span> Programm : {subjectData?.programLevel?.name} </span> */}
                            </li>

                            <li> 
                              {/* <span> Duration : {subjectData?.duration}</span> */}
                            </li>

                          </ul>
                      </Col> 
                    </Row> 
                    </div> 
                  </CardBody>
                </Card>

                <div className=" info-item mt-4">
                  <Card>  
                   <CardBody>
                    <div className="hedding-titel d-flex justify-content-between">
                    <div>
                    <h5> <b>Description</b> </h5>
                     
                    <div className="bg-h"></div>
                    </div>
                    {/* <div className="text-right edit-style  p-3" >
                    <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
                  </div> */}

                    </div>
                    <div>
                      <p className='pt-2'>{subjectData?.description}</p>
                    </div>
                   </CardBody>
                  </Card>
                </div>

                

                {/* subject information starts here */}
                <div className=" info-item mt-4">
              <Card>  
                 <CardBody>
                 <div className="hedding-titel d-flex justify-content-between">
                 <div>
                 <h5> <b>General Information</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div>

                 </div>
                      <Table className="table-bordered mt-4" >
                      <tbody>
                        
                        <tr>
                          <td width="40%">
                            <b>Name:</b>
                          </td>

                          <td width="60%">
                            {subjectData?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Program:</b>
                          </td>

                          <td width="60%">
                            {subjectData?.programLevel?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Duration:</b>
                          </td>

                          <td width="60%">
                            {subjectData?.duration}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Department:</b>
                          </td>

                          <td width="60%">
                            {subjectData?.department?.name}
                          </td>
                        </tr>

                        <tr>
                          <td width="40%">
                            <b>Sub-Department:</b>
                          </td>

                          <td width="60%">
                            {subjectData?.subDepartment?.name}
                          </td>
                        </tr>
                        
                        </tbody>
                      </Table>
                 </CardBody>
              </Card>
          </div>
                {/* university information ends here */}
            
            {/* camp list start */}
            {
                    !campData  ?
                    <>
                    <div className=" info-item mt-4">
               <Card>  
                 <CardBody>
                 <div className="hedding-titel d-flex justify-content-between">
                 <div>
                 <h5> <b>Campus List</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>
                    
                  <>
                 {
                  campList.length<1 ? <p className='mt-4'>This subject is not added to any campus.</p>
                  :
                  <>
                  {loading ? (
                      <h2 className="text-center">Loading...</h2>
                    ) :
                    <div className="table-responsive pt-3">
                    <Table className="table-sm striped">
                      <thead className="">
                        <tr style={{ textAlign: "center" }}>
                          <th scope='row'>#</th>
                          <th>Name</th> 
                          <th>Address</th>
                          <th>Student</th>
                          
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                        </tr>
                      </thead>
                      <tbody>
                        {campList?.map((campus, i) => (
                          <tr key={i} style={{ textAlign: "center" }}>
                            <td><b>{serialNum + i}</b></td>
                            
                            <td>
                              {campus?.universityCampus?.name}
                            </td>
                            <td>
                              {campus?.universityCampus?.addressLine}{","} {campus?.universityCampus?.campusCity}
                            </td>
                            <td>
                              Total Student = {campus?.universityCampus?.totalStudent} {<br />}
                              International Student = {campus?.universityCampus?.internationalStudent}
                            </td>
                    
                            
                            <td style={{ width: "8%" }} className="text-center">
                              <ButtonGroup variant="text">
                              <Link to= {`/campusDetails/${campus?.id}`}>
                                <Button color="primary" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-eye"></i>{" "}
                                </Button>
                                </Link>
                                {/* <Button color="dark" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-edit"></i>{" "}
                                </Button>
                                <Button color="danger" className="mx-1 btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </Button> */}
                              </ButtonGroup>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
              

                    </div>
                    }
                  </>
                 }
                </>
                
                 </CardBody>
              </Card>
          </div>
                    </>
                    :
                    null
            }
            {/* camp list end */}

      
            <div className=" info-item mt-4">
              <Card>
                <CardBody>

                <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Documents</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>

                </CardBody>
              </Card>
            </div>

      <br /><br /><br />
      <br /><br /><br />

      </Col>

      


          <Col md='4'>

            {/* for showing university information starts here */}
            <Card className="uapp-employee-profile-right">
             <div className="uapp-profile-CardHeader">
                <div className="uapp-circle-image margin-top-minus">
                     
                      {
                        subjectData?.university?.universityLogo?.fileUrl == null ?
                        <img src={profileImage} alt='university_img'/>
                        :
                        <img src={rootUrl+subjectData?.university?.universityLogo?.fileUrl} alt='university_img'/>
                        
                      }
                     
                </div>    
                
                <h5>{subjectData?.university?.name} ({subjectData?.university?.shortName})</h5>
                 <p> {subjectData?.university?.universityType?.name} </p>  
            </div>
              <CardBody>

                 <div className="uapp-ul text-center">
                 
                     {/* <span> Address : {subjectData?.university?.universityCity}{","} {subjectData?.university?.universityState?.name}{","} {subjectData?.university?.universityCountry?.name}</span>
                     <br/> */}
                     {
                        subjectData?.university?.universityCity && subjectData?.university?.universityState?.name && subjectData?.university?.universityCountry?.name ? 
                        <span> {subjectData?.university?.universityCity}{","} {subjectData?.university?.universityState?.name}{","} {subjectData?.university?.universityCountry?.name}</span>
                        :
                        <p>No data available</p>
                     }
                     
                 </div>

            </CardBody>
        </Card>
            {/* for showing university information ends here */}

        {/* for showing campus information starts here */}
           {
             campData ? 
             <Card>
              <CardBody>

              <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Campus</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>

                 <div className="uapp-ul text-center">
                    <h5>{campData?.name}</h5>
                    <p>{campData?.addressLine}{","} {campData?.campusCity}</p>                 
                 </div>

                 </CardBody>
             </Card>
             :
             null
           }
        {/* for showing campus information ends here */}

          {/* For showing tution fee */}
          
              <Card>
                <CardBody>

                <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Tution Fee</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 {/* <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div> */}

                 </div>
                  
                 {
                    subjectData?.subjectFee ?
                    <>
                     <div className='d-flex justify-content-between'>
                       <span>EU Tution Fee</span>
                       <p>{subjectData?.subjectFee?.eU_TutionFee}</p>
                     </div>
                     
                     <div className='d-flex justify-content-between'>
                        <span>International Tution Fee</span>
                        <p>{subjectData?.subjectFee?.internationalTutionFee}</p>
                     </div>
                     
                     <div className='d-flex justify-content-between'>
                        <span>Local Tution Fee</span>
                        <p>{subjectData?.subjectFee?.localTutionFee}</p>
                     </div>
                    </>
                    :
                    <p>No data available</p>
                 }


                </CardBody>
              </Card>
              {/* tution fee ends here */}

              {/* features */}
              
              {/* <Card>
                <CardBody>

                <div className="hedding-titel d-flex justify-content-between mb-4">
                 <div>
                 <h5> <b>Features</b> </h5>
                  
                 <div className="bg-h"></div>
                 </div>
                 <div className="text-right edit-style  p-3">
                 <span> <i className="fas fa-pencil-alt pencil-style"></i> </span>
               </div>

                 </div>


              
                </CardBody>
              </Card> */}


          </Col>

        </Row>
      </div>


            
        </div>
    );
};

export default SubjectProfile;