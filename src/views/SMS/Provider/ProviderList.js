import React, { useEffect, useState } from 'react'

import { Card, CardBody, CardHeader, ButtonGroup, Button,  Input, Col, Row, Table, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';

import { useHistory } from 'react-router';
import * as Icon from 'react-feather';
import { useToasts } from 'react-toast-notifications';

import get from '../../../helpers/get.js';

import { Link } from 'react-router-dom';
import remove from '../../../helpers/remove.js';
import { useDispatch } from 'react-redux';

import { StoreUniversityProviderData } from '../../../redux/actions/SMS/Provider/UniversityProvider.js';


const ProviderList = () => {


  

    const history = useHistory();
    const [providerList, setProviderList] = useState([]);
    const [searchStr, setSearchStr] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [providerLabel, setProviderLabel] = useState('Select provider type ');
    const [providerValue, setProviderValue] = useState(0);
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(0);
    const [entity, setEntity] = useState(0);
    const [loading, setLoading] = useState(false);


    const {addToast} = useToasts();
    const [providerType, setProviderType] = useState([]);


 

    const [deleteModal, setDeleteModal] = useState(false);
    const dispatch = useDispatch();
   
   
  
    useEffect(() => {
    
      const providerTypeId = 0;
      const pageSize = 15;
       get(`Provider/Index?page=${currentPage}&pagesize=${pageSize}&providerTypeId=${providerTypeId? providerTypeId : providerValue}&searchstring=${searchStr}`).then((action) => {
        setProviderList(action?.models);
        // console.log('aaaaaa',action);
      
       
        
        // console.log(searchStr);
        // console.log(providerValue);
        setLoading(false)
        setEntity(action?.totalEntity);
        setSerialNum(action?.firstSerialNumber)
      })



      get(`ProviderType/GetAll`)
      .then(res =>{
        // console.log('provider',res);
        setProviderType(res);
        
      })
    }, [providerValue,searchStr,currentPage]);

    // console.log(providerValue);
    // console.log(searchStr);
    
    const toggleDeleteProvider = () => {
      
      setDeleteModal(true);
    
    };

    const closeDeleteModal = () => {
      setDeleteModal(false);
    };
    
  
    
  
    useEffect(()=>{
      get(`Provider/Index`)
      .then(res =>{
        dispatch(StoreUniversityProviderData(res));
        // console.log('provider',res);
      //  setProviderList(res?.models)
       
      } )
  
    },[])

    const deleteProvider  = (id) =>{
      remove(`Provider/Delete/${id}`)
      .then(res => {
      
        
        addToast(res, {
          appearance:  'error',
          autoDismiss: true,
        })
        setDeleteModal(false);
        const newData = providerList.filter(data => data.id != id );
        setProviderList(newData);
      })

    }
  
  
    // search handler
    const handleSearch = () => {
      setCurrentPage(1);
      setCallApi((prev) => !prev);
    }
  
 
  
  
  
  
  
  
 
    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/")
    }
  

  
   
    // console.log(providerlist);
    const providertype = providerType.map(list => ({label: list.name, value: list.id}));
    // console.log(providertype);
  
    // select University Country
  
  
    // select University State
  
  
    const selectProviderTypeState = (label,value) => {
      setProviderLabel(label);
      setProviderValue(value);
    
      handleSearch();
    }
  
    const searchValue = (e) => {
      setSearchStr(e.target.value);
      handleSearch();
      
    }
  
    // on clear
    const handleClearSearch = () => {
      
      
      setSearchStr('');
      setProviderLabel('Select Provider');
      setProviderValue(0);
      setCallApi(prev => !prev);
    }
  
    // on enter press
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      }
    }
 
   


    return (
        <div>
        <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Provider List</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToDashboard}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
        <CardBody>

          <Row>

          


           



           
            <Col lg="6" md="6" sm="12" xs="12">
              <Select
                options={providertype}
                value={{ label: providerLabel, value: providerValue }}
                onChange={opt => selectProviderTypeState(opt.label, opt.value)}
                name="providerTypeId"
                id="providerTypeId"
              />
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
            <Input
              style={{ height: "2.7rem" }}
              type="text"
              name="searchstring"
              value={searchStr}
              id="searchstring"
              placeholder="Name, Short Name"
              onChange={searchValue}
              onKeyDown={handleKeyDown}
            />
            </Col>
          

           

            {/* <Col lg="3" md="3" sm="6" xs="6">
              <div className="uapp-Search-div">
                <span>Reset</span>
            
              </div>
            </Col> */}
          </Row>

          <Row className='mt-4'>
         
          <Col lg="12" md="12" sm="12" xs="12">
              <div style={{display: 'flex', justifyContent: "end"}}>

            

              <div className="mt-2 mx-1 d-flex hovv  " style={{cursor: 'pointer'}} onClick={handleClearSearch}>
                <Icon.X  className='text-danger' /><h5  className="text-danger">Clear</h5>
              </div>

              {/* <div className="mt-2 mx-1">
                <span className="btn btn-primary">Export</span>
              </div> */}


              </div>
              
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className='uapp-employee-search'>
             <CardBody>

          <Row className="mb-3">

            <Col lg="6" md="5" sm="6" xs="4">
            <Link to ='/providerForm'>
            <Button  className="btn btn-uapp-add "> <i className="fas fa-plus"></i>  Add New </Button>
            </Link>
            </Col>



         
          </Row>



          {
            loading ?
              <h2 className="text-center">Loading...</h2>
              :
              <div className="table-responsive">
                <Table className="table-sm table-bordered" >
                  <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                      <th>SL/NO</th>
                                       
                      <th>Email</th>                    
                      <th>Name</th>                    
                      <th>Phone Number</th>
                      <th>University Count</th>

                      <th style={{width: '8%'}} className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      providerList?.map((prov, i) => <tr key={prov.id} style={{ textAlign: "center" }}>
                        <td>{serialNum + i}</td>
                      
                        <td>{prov?.email}</td>
                        <td>{prov?.name}</td>
                        <td>{prov?.phoneNumber}</td>
                      <Link to={{
                        pathname: '/universityList',
                        providerName: prov?.name,
                        providervalue: prov?.id
                      }} style={{textDecoration: 'none' }} >
                      <td className='hovv  badge-primary'>{prov?.universityCount}</td>
                      </Link>
                       
                        <td style={{width: '8%'}} className="text-center">
                          <ButtonGroup variant="text">
   
                           <Link to= {`/providerDetails/${prov?.id}`}>
                           <Button color="primary" className="mx-1 btn-sm"> <i className="fas fa-eye"></i> </Button>
                           </Link>
                            <Link to={`/updateProvider/${prov?.id}`}>
                            <Button color="dark" className="mx-1 btn-sm"> <i className="fas fa-edit"></i> </Button>
                            </Link>

                            <Button color="danger" onClick={toggleDeleteProvider} className="mx-1 btn-sm"><i class="fas fa-trash-alt"></i></Button>
                          </ButtonGroup>
                          <Modal
                              isOpen={deleteModal}
                              toggle={closeDeleteModal}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this ? Once Deleted it
                                  can't be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  color="danger"
                                  onClick={() => deleteProvider(prov?.id)}
                                >
                                  YES
                                </Button>
                                <Button onClick={closeDeleteModal}>NO</Button>
                              </ModalFooter>
                            </Modal>
                        </td>
                      </tr>)

                    }


                  </tbody>
                </Table>
              </div>
          }


         

        </CardBody>
      </Card>

    
            
        </div>
    );
};

export default ProviderList;