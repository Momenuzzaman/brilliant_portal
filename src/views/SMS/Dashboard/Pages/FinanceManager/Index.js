import React, { useEffect, useState } from 'react';
import {
   Card,
  CardBody,
  Table
} from 'reactstrap';
import user1 from '../../../../../assets/img/user1.svg';
import user2 from '../../../../../assets/img/user2.svg';
import capture from '../../../../../assets/img/capture.PNG';
import images1 from '../../../../../assets/img/images1.svg';
import "../../../../../assets/scss/pages/dashboard-analytics.scss"
import { Drawer } from 'antd';
import plusicon from '../../../../../assets/img/plusicon.svg';
import Vectorbeat from '../../../../../assets/img/Vectorbeat.svg';
import gift from '../../../../../assets/img/gift.PNG';
import cuser1 from '../../../../../assets/img/cuser1.svg';
import down from '../../../../../assets/img/down.svg';
import camera2 from '../../../../../assets/img/camera2.svg';
import Chart from 'react-apexcharts'
import get from '../../../../../helpers/get';
import { rootUrl } from '../../../../../constants/constants';
import { Link, useHistory } from 'react-router-dom';


const FinanceManager = () => {

  const [open, setOpen] = useState(false);
  const [totalApp,setTotalApp] = useState(0);
  const [appInProcess,setAppInProcess] = useState(0);
  const [unconditional,setUnconditional] = useState(0);
  const [registered,setRegistered] = useState(0);
  const [rejected,setRejected] = useState(0);
  const [withdrawn,setWithdrawn] = useState(0);
  const [count,setCount] = useState({});
  const [consultants, setConsultants] = useState([]);
  const history = useHistory();
  
  const currentUser = JSON?.parse(localStorage.getItem('current_user'));

  useEffect(()=>{

    get(`FinanceManagerDashboard/Counting`)
    .then(res => setCount(res))

    get(`FinanceManagerDashboard/GetTransactions`)
    .then(res => setConsultants(res))

  },[])

  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

    return (
        <React.Fragment>

          <div className='d-flex justify-content-between flex-wrap'>
            <div>
              <span className='std-dashboard-style1'>Hello, {currentUser?.displayName}!</span>
              <br/>
              <span className='std-dashboard-style2'>Here's what's happening with your store today.</span>
            </div>

            <div  className='d-flex flex-wrap'>

          


             <div style={{cursor: 'pointer'}}>

              <div className='std-dashboard-style4'>


              </div>

               <div className='std-dashboard-style5'>
               <img src={plusicon} className='img-fluid dashbard-img-style1' />
               <span className='std-dashboard-style3'>Add New Student</span>
               </div>
             </div>

             <div style={{cursor: 'pointer'}}>

              <div className='std-dashboard-style6' onClick={showDrawer}>

              </div>

              <div  onClick={function noRefCheck(){}}>
                <img src={Vectorbeat} className='img-fluid dashbard-img-style2' onClick={showDrawer} />

                <Drawer placement="right" onClose={onClose} open={open}>
                <div className=''>
             
             <Card>
              <CardBody>
              <span className='consultant-news-feed-style'>NEWS FEED</span>
              </CardBody>
             </Card>

             <Card>
              <CardBody>
              <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user1}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you to our new "Become an Education Consultant...
                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>read more</span></span>

                   <br/>
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
              </CardBody>
             </Card>
             
           
           <Card>
            <CardBody>
            <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user2}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you
                    </span>
                    <br/>
                    <img src={capture} className='img-fluid' />
                   <br/>
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
            </CardBody>
           </Card>

            <Card>
              <CardBody>
              <div>
               <div className='d-flex'>
                 <div className='notice-image-style'> 
                 <img src={user2}  />
                 </div>
                 <div className='ml-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>We're delighted to introduce you
                    </span>
                    <br/>
                    <div className='d-flex justify-content-around my-2'>
                    <img src={images1} className='img-fluid' />
                    <img src={images1} className='img-fluid' />
                    <img src={images1} className='img-fluid' />
                    </div>
                   
                   <span className='notice-time-style'>02:14 PM Today</span>
                 </div>


               </div>

             </div>
              </CardBody>
            </Card>


             <div>

             <Card>
              <CardBody>
              <span className='consultant-news-feed-style'>NOTICE</span>
              </CardBody>
             </Card>

             <Card>
              <CardBody>
              <div className=''>
                 <div className='notice-image-stylemb-2'> 
                 <span className='notice-user-name'>Super Admin</span>
                 </div>
                 <div className='mt-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>University of Suffolk admissions open for September 2022 intake.

                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>View</span></span>

              
               
               

                 </div>


                 <div className='mt-2'> 
                 <span className='notice-time-style'>02:14 PM 19/07/22</span>
                 </div>


               </div>
              </CardBody>
             </Card>

           <Card>
            <CardBody>
     
               

               <div>
                 <div className='notice-image-stylemb-2'> 
                 <span className='notice-user-name'>Super Admin</span>
                 </div>
                 <div className='mt-2'>
                   <span className='notice-user-name'>MD Shamim (Admin)</span>
                   <br/>
                   <span className='notice-user-desc'>University of Suffolk admissions open for September 2022 intake.

                   <br/>
                   <span style={{textDecoration:'underline', textDecorationColor: '#878A99', cursor: 'pointer'}}>View</span></span>

              
               
               

                 </div>


                 <div className='mt-2'> 
                 <span className='notice-time-style'>02:14 PM 19/07/22</span>
                 </div>


               </div>

            </CardBody>
           </Card>



             </div>

              <Card>
                <CardBody>
                <div>
                <img src={gift} className='img-fluid' />
              </div>
                </CardBody>
              </Card>
              
              </div>
                      </Drawer>

                      

                    </div>

                  </div>

                  </div>

                </div>

                        {/* Status reports start */}

                        <div className='row'>

                      <div className='col-md-2 mb-3'>
              <div style={{border: '0.5px solid #24A1CD'}} className='count-card counter-h-112'>
              <span className='pvdadmin-span-style1'>Total Application</span>
                       
                       <span className='pvdadmin-span-style2' onClick={()=>{
                        history.push(`/applications`)
                       }} style={{color: '#24A1CD', cursor: 'pointer'}}>{count?.totalApplication}</span>
              </div>

                           
              
                 
                    

                      </div>

                      <div className='col-md-2 mb-3'>
                      <div style={{border: '0.5px solid #F87675'}} className='count-card counter-h-112'>
                      <span className='pvdadmin-span-style1'>Applications in Process</span>
                     
                     <span className='pvdadmin-span-style2' onClick={()=>{
                        history.push(`/applicationsByStatus/${2}/${1}`)
                       }}  style={{color: '#F87675', cursor: 'pointer'}}>{count?.totalApplicationInProgress}</span>

                      </div>

                          
                    
                            
                      

                      </div>

                      <div className='col-md-2 mb-3'>
                     <div style={{border: '0.5px solid #23CCB5'}} className='count-card counter-h-112'> 
                     <span className='pvdadmin-span-style1'>Unconditional Offer</span>
                    
                    <span className='pvdadmin-span-style2' onClick={()=>{
                        history.push(`/applicationsByStatus/${2}/${2}`)
                       }}  style={{color: '#23CCB5', cursor: 'pointer'}}>{count?.totalUnconditionalOffer}</span>
                     </div>

                           
                 
                            
                   

                      </div>

                      <div className='col-md-2 mb-3'>
                       
                        <div style={{border: '0.5px solid #AE75F8'}} className='count-card counter-h-112'>
                        <span className='pvdadmin-span-style1'>Total Registered</span>
                          
                          <span className='pvdadmin-span-style2' onClick={()=>{
                        history.push(`/applicationsByStatus/${2}/${3}`)
                       }}  style={{color: '#AE75F8', cursor: 'pointer'}}>{count?.totalRegistered}</span>

                        </div>
                          
                 
                          
                  

                      </div>

                      <div className='col-md-2 mb-3'>
                       <div style={{border: '0.5px solid #F7BD12'}} className='count-card counter-h-112'>
                       <span className='pvdadmin-span-style1'>Rejected / Cancelled</span>
                      
                            
                      <span className='pvdadmin-span-style2' style={{color: '#F7BD12'}}>{count?.totalRejected}</span>
                       </div>

                          
                   
                          
                    

                      </div>

                      <div className='col-md-2 mb-3'>
                        <div style={{border: '0.5px solid #707070'}} className='count-card counter-h-112'>
                        <span className='pvdadmin-span-style1'>Withdrawn Application</span>

                        <span className='pvdadmin-span-style2' style={{color: '#707070'}}>{count?.totalWithdrawn}</span>
                        </div>

                           
          
                            
                       

                      </div>

                      </div>

                  {/* status reports end */}


                        {/* consultant transaction list table start */}
     
                          <div>

                            

                    <Card>
                      <CardBody>

                        <span className='app-style-const'>Consultant Transaction List</span>

                     <div style={{height: '300px', overflowY : 'scroll'}}>

                     <Table borderless responsive className='mt-3'>
                    <thead style={{backgroundColor: '#EEF3F4'}}>
                    <tr>
                    <th>Consultant ID</th>
                    <th>Consultant Name
                    </th>
                    <th>Total In Flow</th>
                    <th>Total Out Flow</th>
                    <th>Total Balance</th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      consultants?.map((con,i)=>(
                        <tr key={i}>
                    <td>{con?.consultantViewId}</td>
                    <td>{con?.consultantName}</td>
                    <td>{con?.credit}</td>
                    <td>{con?.debit}</td>
                    <td>{con?.balance}</td>
                    <td><Link style={{textDecoration: 'underline', color:'#1e98b0', textDecorationColor: '#1e98b0'}} to={`accountTransactionByConsultant/${con?.consultantId}`}>Details</Link></td>
                    </tr>
                      ))
                    }
                    </tbody>
                    </Table>


                     </div>



                      </CardBody>
                    </Card>

                    </div>


                    {/* consultant transaction list table end */}



         
  
      </React.Fragment>
    );
};

export default FinanceManager;