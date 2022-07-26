import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { Image } from 'antd';
import "antd/dist/antd.css";
import 
{ 
    Card, 
    CardBody, 
    CardHeader, 
    ButtonGroup, 
    CardTitle, 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, Input, 
    FormText, Col, Row, Table, 
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { useHistory, useLocation } from 'react-router';
// import coverImage from '../../../../assets/img/profile/user-uploads/cover.jpg'
// import profileImage from '../../../../assets/img/profile/user-uploads/user-07.jpg'
import coverImage from '../../../assets/img/profile/user-uploads/cover.jpg';
import profileImage from '../../../assets/img/profile/user-uploads/user-07.jpg'
import get from '../../../helpers/get';
import { rootUrl } from '../../../constants/constants';


const ConsultantProfile = () => {
    const location = useLocation();
    const history = useHistory();
    const {id} = useParams();

    const [consultantData, setConsultantData] = useState({});
    const [registrationDate, setRegistrationDate] = useState('');

    const [serialNum, setSerialNum] = useState(1);

    useEffect(()=>{

      get(`Consultant/Profile/${id}`)
      .then(res => {
        console.log('Consultant Profile Data Check', res);
        setConsultantData(res);

        var datee =res?.createdOn;
      var utcDate = new Date(datee);
      var localeDte = utcDate.toLocaleString("en-CA");
      var localeDte2 = localeDte.split(",")[0];
      var localeDte3 = localeDte2.replace('/', '-');
      
      console.log(localeDte);
      setRegistrationDate(localeDte3.replace('/', '-'));


      })

    },[])

    // redirect to dashboard
        const backToDashboard = () => {
          history.push("/")
        }


        const handleUpdateBankDetailsFromProfile = () =>{

          localStorage.setItem('consultantRegisterId',id);

          history.push('/addBankDetails');
        }

        const tableStyle = {
          overflowX: 'scroll',
        };

    return (
        <div>
          <Card className="uapp-card-bg">
            <CardHeader className="page-header">

              <h3 className="text-light">Consultant profile</h3>
              <div className="page-header-back-to-home" >
                <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
              </div>

            </CardHeader>
          </Card>

        <div className="uapp-employee-profile">
        <Row>

          <Col md="8">
            <div className="uapp-employee-profile-left">
            <Card>
              <CardBody>
                  <div className="uapp-employee-cover-image">
                    <div className="bg-image" >  
                    <img src = {rootUrl+consultantData?.consultantCoverImageMedia?.fileUrl} alt='cover_img'/> 
                    <div className="uplode-cover-image">
                      <span> <i className="fas fa-camera" > </i ></span>
                      </div>               
                  </div>
                </div>



                <div className="uapp-employee-profile-image-edit">
                  <Row>
                    <Col> 
                  <div className="uapp-employee-profile-image">
                  <div className="text-left">
                    
                     <img className="empProfileImg"  src={rootUrl+consultantData?.consultantProfileImageMedia?.fileUrl} alt='img-desc'/>
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
                          
                            <h4>{consultantData?.nameTitle?.name} {consultantData?.firstName} {consultantData?.lastName} ({consultantData?.viewId})</h4>
                          </li>

                           <li> 
                        
                          </li>

                          
                        </ul>

                    </Col> 

                    <Col md="6"> 
                   <ul className="uapp-ul text-right">
                          <li> 
                            <span> Email : {consultantData?.email}</span>
                          </li>
                          
                          <li> 
                            <span> Phone Number : {consultantData?.phoneNumber}</span>
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
                  <div className="hedding-titel">
                    <h5> General Information  </h5>
                    <div className="bg-h"></div>
                  </div>
                    <Table className="table-bordered mt-4" >
                    <tbody>
                      <tr>
                        <td width="40%">
                         <b> Name:</b>
                        </td>

                        <td width="60%">
                         {consultantData?.firstName} {consultantData?.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                         <b> Consultant Type:</b>
                        </td>

                        <td width="60%">
                         {consultantData?.consultantType?.name}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          <b>Branch:</b>
                        </td>

                        <td width="60%">
                          {consultantData?.branch?.name}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                         <b> Account Status:</b>
                        </td>

                        <td width="60%">
                         {consultantData?.accountStatus?.statusName}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                         <b> Residency Status: </b>
                        </td>

                        <td width="60%">
                          {consultantData?.residencyStatus?.name}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          <b>Visa Status: </b>
                        </td>

                        <td width="60%">
                          {consultantData?.visaStatus?.name}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          <b>Registration Date:</b>
                        </td>

                        <td width="60%">
                         {registrationDate}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          <b>Have Right To Work:</b>
                        </td>

                        <td width="60%">
                         {consultantData?.haveRightToWork == null ? 'No' : 'Yes'}
                        </td>
                      </tr>
                      

                      </tbody>
                    </Table>
               </CardBody>
            </Card>
        </div>




        <div className=" info-item mt-4">
          <Card>  
               <CardBody>
                  <div className="hedding-titel">
                    <h5> Contact Information </h5>
                    <div className="bg-h"></div>
                  </div>



                        <Table className="table-bordered mt-4" >
                    <tbody>
                      <tr>
                        <td width="40%">
                        <span className='fw-bold'> Phone Number:</span>
                        </td>

                        <td width="60%">
                          {consultantData?.phoneNumber}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                        <b>Email:</b>
                        </td>

                        <td width="60%">
                        {consultantData?.email}
                        </td>
                      </tr>

                      </tbody>
                    </Table>
               </CardBody>
            </Card>
        </div>


             {/* Bank Details */}
             <div className=" info-item mt-4">
             <Card>  
              <CardBody>
               <div className="hedding-titel d-flex justify-content-between">
               <div>
               <h5> <b>Bank Details</b> </h5>
                
               <div className="bg-h"></div>
               </div>
               <div className="text-right edit-style  p-3" >
               <span> <i className="fas fa-pencil-alt pencil-style" onClick={handleUpdateBankDetailsFromProfile}></i> </span>
             </div>

               </div>

               <div className="table-responsive pt-3">
                    <Table className="table-sm striped" style={tableStyle}>
                      <thead className="">
                        <tr style={{ textAlign: "center" }}>
                          <th>#</th>
                          <th>Account Name</th>
                          <th>Account Number</th>
                          <th>Bank Address</th>
                          <th>Bank Name</th>
                          <th>BIC</th>
                          <th>Sort Code</th>
                          <th>Swift</th>
                        </tr>
                      </thead>
                      <tbody>
                        {consultantData?.bankDetails?.map((details, i) => (
                          <tr key={i} style={{ textAlign: "center" }}>
                            <th scope='row'>{serialNum + i}</th>
                            <td>
                              {details?.accountName}
                            </td>

                            <td>
                              {details?.accountNumber}
                            </td>
                        
                            <td>
                              {details?.bankAddress}
                            </td>
                        
                            <td>
                              {details?.bankName}
                            </td>
                        
                            <td>
                              {details?.bic}
                            </td>
                            <td>
                              {details?.sortCode}
                            </td>
                            <td>
                             {details?.swift}
                              
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
              

                    </div>
               
              </CardBody>
             </Card>
           </div>

        <div className=" info-item mt-4">
        <Card >
        <div className="hedding-titel">
        <h5> Document </h5>
        <div className="bg-h"></div>
      </div>
         
            <div className='row text-center'>

            <div className ='col-md-4 col-sm-12'>

            <Card className='shadow-lg'>  
            <CardBody>

            <Image
            width={180} height={104}
            src={rootUrl+consultantData?.idOrPassportMedia?.fileUrl}
          />
          
          <br/>
          <br/>

            <span className='fw-bold'>Id or Passport</span>
          
            </CardBody>
         </Card>
            
            </div>

            <div className ='col-md-4 col-sm-12'>

            <Card className='shadow-lg'>  
            <CardBody>

            <Image
            width={180} height={104}
            src={rootUrl+consultantData?.proofOfAddressMedia?.fileUrl}
          />
          
          <br/>
          <br/>

            <span className='fw-bold'>Proof of Address</span>
          
            </CardBody>
         </Card>
            
            </div>

            <div className ='col-md-4 col-sm-12'>

            <Card className='shadow-lg'>  
            <CardBody>

            <Image
                    width={180} height={104}
                    src={rootUrl+consultantData?.proofOfRightToWorkMedia?.fileUrl}
                  />
          
          <br/>
          <br/>

            <span className='fw-bold'>Proof of Right to Work</span>
          
            </CardBody>
         </Card>
            
            </div>


            </div>
            </Card>
        </div>
              
              </div>
          </Col>



          <Col md="4"> 
           <Card className="uapp-employee-profile-right">
             <div className="uapp-profile-CardHeader">
                <div className="uapp-circle-image margin-top-minus">
                     
                      {
                        consultantData?.parentConsultant?.consultantProfileImageMedia == null ?
                        <img src={profileImage} alt='profile_img'/>
                        :
                        <img src={rootUrl+consultantData?.parentConsultant?.consultantProfileImageMedia?.fileUrl} alt='profile_img'/>
                        
                      }
                     
                </div>    
                
                <h5>{consultantData?.parentConsultant?.nameTitle?.name} {consultantData?.parentConsultant?.firstName} {consultantData?.parentConsultant?.lastName} </h5>
                 <p> {consultantData?.parentConsultant?.consultantType?.name} </p>  
            </div>
              <CardBody>

                 <div>
                   <ul className="uapp-ul text-center">
                      <li> {consultantData?.parentConsultant?.accountStatus?.statusName} </li>
                      <li> {consultantData?.parentConsultant?.branch?.name} </li>
                      <li> {consultantData?.parentConsultant?.email} </li>
                      <li> {consultantData?.parentConsultant?.phoneNumber} </li>
                    </ul>                                     
                 </div>

            </CardBody>
        </Card>

            <Card className="p-3">

                <h6> Notice</h6>
                <span className="bg-wg bg-width"></span>
           
            
                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>


                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>



                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                          
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                           <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                      </div>
                  </div>


                  <div className="notice-item card-widget mt-3 ">
                    <div className="notice-titel">
                      <h6> Super Admin</h6>
                      <span> 10/12/2021</span>
                      </div>
                       <div className="notice-description"> 
                           <span> No Qualifications required !! University of Suffolk London & Manchester Campus, Oct 2021 Intake. </span>
                          <div className="uapp-read-more-btn">
                            <a className="" href="javascript:void(0)"> Read More <span> <i className="fas fa-long-arrow-alt-right"></i> </span> </a>
                          </div>
                         
                      </div>
                  </div>
      
            </Card>

          </Col>
        </Row>
        </div>

        </div>
    );
};

export default ConsultantProfile;