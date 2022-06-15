import Axios from 'axios';
import React, { useState, createRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Select from 'react-select';
import { Card, CardBody, CardHeader, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import { useToasts } from "react-toast-notifications";
import get from '../../../helpers/get';
import { rootUrl } from '../../../constants/constants';
import put from '../../../helpers/put';
import remove from '../../../helpers/remove';
const AddUniversityCampus = (props) => {
  const [universityCampusList, setuniversityCampusList] = useState([]);
  const [universityCampusObject, setuniversityCampusObject] = useState({});
  const univerSityCountries = props.univerSityCountryList[0];
  const universityTypes = props.univerSityTypeList[0];
  const universityStates = props.univerSityStateList[0];

  const [loading, setLoading] = useState(false);
  const myForm = createRef();
  const [uniStateLabel, setUniStateLabel] = useState('Select University State...');
  const [unistateValue, setUniStateValue] = useState(0);
  const [uniCountryLabel, setUniCountryLabel] = useState('Select University Country...');
  const [uniCountryValue, setUniCountryValue] = useState(0);
  const [radioHomeVal, setRadioHomeVal] = useState(false);
  const [radioEuUkVal, setRadioEuUkVal] = useState(false);
  const [radioInternationalVal, setRadioInternationalVal] = useState(false);

  const [activetab, setActivetab] = useState('2');
  const [submitData, setSubmitData] = useState(false);
  const history = useHistory();
  const [universityId, setuniversityId] = useState(0);
  const location = useLocation();
  const [success, setSuccess] = useState(false);
  const { addToast } = useToasts();
  const [selectedId, setSelectedId] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showForm,setShowForm]=useState(false);
  const [universityCampus, setUniversityCampus] = useState([]);


  let uniId;
  // let uniId = "10019";
  if (location.id) {
   uniId = location.id;

  } else {
   uniId = '';
  }


  // useEffect(()=>{
  //   get(`UniversityCampus/Index`)
  //   .then(res => {
  //     console.log('all Campuses',res)
  //   setUniversityCampus(res);
  //   })
  // },[])






  useEffect(() => {
     setuniversityId(uniId);
    // const universityId = "10019";
     get(`UniversityCampus/GetByUniversity/${universityId}`).then((action) => {
      setuniversityCampusList(action);
      if(action.length>0){
        setShowForm(true);
      }else{
        setShowForm(false);
        setSelectedId(0)
      }
    });
  }, [success,uniId,universityId]);


  // tab toggle
  const toggle = (tab) => {
    setActivetab(tab)
    if (tab === '1') {
      history.push('/addUniversity')
    }
    if (tab === '2') {
      history.push('/addUniversityCampus')
    }
    if (tab === '3') {
      history.push('/addUniversityFinancial')
    }
    if (tab === '4') {
      history.push('/addUniversityFeatures')
    }
    if (tab === '5') {
      history.push('/addUniversityGallery')
    }
  }

  // select University Country
  const selectUniCountry = (label, value) => {
    setUniCountryLabel(label);
    setUniCountryValue(value);
    Axios.get(`${rootUrl}UniversityState/GetByCountry/${value}`)
      .then(res => {
        setUniStateLabel(res.data.result[0].name)
        setUniStateValue(res.data.result[0].id)
      })
  }

  // select University State
  const selectUniState = (label, value) => {
    setUniStateLabel(label);
    setUniStateValue(value);
  }

  //   on submit form
  const handleSubmit = (event) => {

   
    event.preventDefault();
  

    const subdata = new FormData(event.target);
    //  for (var value of subdata.values()) { 
    //   console.log(value);
    //  }

  if(selectedId===0){
    Axios.post(`${rootUrl}UniversityCampus/Create`, subdata)
    .then(res => {
      console.log(res);
      setuniversityId(res.data.result.universityId)
      if (res.status === 200 && res.data.isSuccess === true) {
        setSubmitData(false);
        addToast(res.data.message, {
          appearance: 'success',
          autoDismiss: true,
        })
        
        setSuccess(!success)
      }
    
    })
  }
  else{
     put(`UniversityCampus/Update`, subdata)
    .then(res => {
      // setuniversityId(res.data.result.universityId)
      if (res.status === 200 && res.data.isSuccess === true) {
        setSubmitData(false);
        addToast(res.data.message, {
          appearance: res.data.message === 'University Campus update successfully.' ? 'success' : 'error',
          autoDismiss: true,
        })
       setShowForm(true);
        setSelectedId(0)
        setSuccess(!success)
      }
    
    })
  }



  }


  // onValueChangeHome
  const onValueChangeHome = (event) => {
    setRadioHomeVal(event.target.value)
   
   

  }
  // onValueChangeEuUk
  const onValueChangeEuUk = (event) => {
    setRadioEuUkVal(event.target.value)
  }
  // onValueChangeInternational
  const onValueChangeInternational = (event) => {
    setRadioInternationalVal(event.target.value)
  }

  const universityCountryName = univerSityCountries?.map(uniCountry => ({ label: uniCountry.name, value: uniCountry.id }));
  const universityStateName = universityStates?.map(uniState => ({ label: uniState.name, value: uniState.id }));

  const styleLabelBold = {
    // fontWeight: "bold"
  };
  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  }

  // redirect to Next Page
  const onNextPage = () => {
    const uniID = universityId;
    history.push({
      pathname: '/addUniversityFinancial',
      id: uniID
    })
  };

  const toggleDanger = (p) => {
    localStorage.setItem('UniversityCampusId', p.id)
    localStorage.setItem('UniversityCampusName', p.name)
    setDeleteModal(true)
  }

  const handleDeletePermission = (id) => {

    const returnValue = remove(`UniversityCampus/Delete/${id}`).then((action) => {

      setDeleteModal(false);
      setSuccess(!success);
      addToast(action?.data?.message, {
        appearance:  'error',
        autoDismiss: true,
      })
      localStorage.removeItem('UniversityCampusId')
      localStorage.removeItem('UniversityCampusName')
    })
  }

  const handleUpdate = (id) => {
   
  
    setShowForm(false);
      get(`UniversityCampus/Get/${id}`).then((action) => {
        console.log('asjskdjskdskdjskdjskdjskdjskdjskdjskdjskdjskdjskdjskdjs',action);
        setuniversityCampusObject(action);
        setUniCountryLabel(action.universityCountry.name);
        setUniCountryValue(action.campusCountryId);
        setUniStateLabel(action.universityState.name);
        setUniStateValue(action.campusStateId);
        setSelectedId(action.id);
        console.log(id);
       
        
      })
     
  }


// const handleChange=(event) => {
//   event.preventDefault();
//   universityCampusObject[event.target.name] = event.target.value;
//   setuniversityCampusObject({universityCampusObject})
 
// }


const onShow=()=>{
  setShowForm(false);

}

const cancel=()=>{
  setShowForm(true);
  setSelectedId(0)
}
  return (
    <div>

           <Card className='uapp-card-bg'>
              <CardHeader className="page-header">              
                <h3 className="text-light">Add University Campus Information</h3>
                  <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
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
              <NavLink
                active={activetab === '1'}
                onClick={() => toggle('1')}
              >
                University Information
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled
                                active={activetab === '2'}
                                onClick={() =>toggle('2')}
                                > */}
              <NavLink
                active={activetab === '2'}
                onClick={() => toggle('2')}
              >

                Campus Information
              </NavLink>
            </NavItem>

            <NavItem>
              {
                submitData ?

                  <NavLink
                    active={activetab === '3'}
                    onClick={() => toggle('3')}
                  >

                    Financial Information
                  </NavLink>


                  :


                  <NavLink disabled
                    active={activetab === '3'}
                  >

                    Financial Information
                  </NavLink>

              }



            </NavItem>

            <NavItem>
              <NavLink disabled
                active={activetab === '4'}
              >

                Features
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled
                active={activetab === '5'}
              >

                University Gallery
              </NavLink>
            </NavItem>


          </Nav>

          <TabContent activeTab={activetab}>

            {
              universityCampusList?.map((uniCampus, i) => <div key={uniCampus.id} style={{ textAlign: "left" }}>
                <Card className="CampusCard">
                  <CardBody className="shadow">

                    <div className="CampusCardAction">
                     <div className=""> 
                        <button type="button" className="btn btn-outline-info" onClick={() => handleUpdate(uniCampus.id)}> <i className="fas fa-edit"></i> </button>
                     </div>

                     <div className=""> 
                        <button type="button" className="btn btn-outline-danger" onClick={() => toggleDanger(uniCampus)} ><i className="fas fa-trash-alt"></i></button>
                     </div>
                    </div>

                  <Row>
                    <Col md="6">
                        <h5> {uniCampus.name} </h5>
                        <h6> {uniCampus.university.name} ({uniCampus.university.shortName}) </h6>
                        <p> {uniCampus.campusCity},  {uniCampus.universityState.name}, {uniCampus.universityCountry.name }  </p>
                        <p> {uniCampus.addressLine}</p>
                        <p> {uniCampus.addressLine}</p>
                    </Col>

                      <Col md="6">
                        <p>Total Student : {uniCampus.totalStudent}</p>
                        <p>International Student : {uniCampus.internationalStudent}</p>
                        <p>Avarage Tution Fee : {uniCampus.avarageTutionFee}</p>
                        <p>Avarage Living Cost : {uniCampus.avarageLivingCost}</p>
                        <p>Avarage Application Fee : {uniCampus.avarageApplicationFee}</p>
                        <p>Estimated TotalCost : {uniCampus.estimatedTotalCost}</p>
                    </Col>


                  </Row>           
              
                  </CardBody>

                  <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className="uapp-modal">
                    <ModalBody>
                      <p>Are You Sure to Delete this {localStorage.getItem('UniversityCampusName')} ? Once Deleted it can't be Undone!</p>
                    </ModalBody>

                    <ModalFooter>
                      <Button onClick={() => handleDeletePermission(localStorage.getItem('UniversityCampusId'))} color="danger">YES</Button>
                      <Button onClick={() => setDeleteModal(false)}>NO</Button>
                    </ModalFooter>
                 </Modal>

                </Card>
              </div>)

            }



            <TabPane tabId="2">

{
  showForm === false?
  <Form  onSubmit={handleSubmit} className="mt-5">

                <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="universityId" name="universityId" value={localStorage.getItem("id")} />
                  <Input type="hidden" id="Id" name="Id" value={selectedId} />
                </FormGroup>

                {/* <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>University Id </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="universityId"
                      id="universityId"
                      defaultValue={localStorage.getItem("id")}
                      // placeholder="Enter Total Student"
                      required
                    />
                  </Col>
                </FormGroup> */}


                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Campus Name <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="Name"
                      id="Name"  
                      
                     defaultValue={universityCampusObject?.name}
                      placeholder="Enter University Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                                <User size={15} />
                                            </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Campus Country <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={universityCountryName}
                      value={{ label: uniCountryLabel, value: uniCountryValue }}
                      
                      onChange={opt => selectUniCountry(opt.label, opt.value)}
                      name="CampusCountryId"
                      id="CampusCountryId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Campus State <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">

                    <Select
                      options={universityStateName}
                      value={{ label: uniStateLabel, value: unistateValue }}
                      onChange={opt => selectUniState(opt.label, opt.value)}
                      name="CampusStateId"
                      id="CampusStateId"
                    />

                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Campus City <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="CampusCity"
                      id="CampusCity"
                      defaultValue={universityCampusObject?.campusCity}
                      placeholder="Enter Campus City Name"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Address Line<span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="AddressLine"
                      id="AddressLine"
                      defaultValue={universityCampusObject?.addressLine}
                      placeholder="Enter Address Line"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Total Student </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="TotalStudent"
                      id="TotalStudent"
                      defaultValue={universityCampusObject?.totalStudent}
                      placeholder="Enter Total Student"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>International Student </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="InternationalStudent"
                      id="InternationalStudent"
                       defaultValue={universityCampusObject?.internationalStudent}
                      placeholder="Enter International Student"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Average Tution Fee </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="AvarageTutionFee"
                      id="AvarageTutionFee"
                      defaultValue={universityCampusObject?.avarageTutionFee}
                      placeholder="Avarage Tution Fee"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Average Living Cost </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="AvarageLivingCost"
                      id="AvarageLivingCost"
                      defaultValue={universityCampusObject?.avarageLivingCost}
                      placeholder="Avarage Living Cost"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Average Application Fee </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="AvarageApplicationFee"
                      id="AvarageApplicationFee"
                      defaultValue={universityCampusObject?.avarageApplicationFee}
                      placeholder="Avarage Application Fee"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Estimated Total Cost </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="number"
                      name="EstimatedTotalCost"
                      id="EstimatedTotalCost"
                      defaultValue={universityCampusObject?.estimatedTotalCost}
                      placeholder="Estimated Total Cost"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                {/* <FormGroup row className="pt-3">
                  <Col md="2">
                    <span>Is Accept Home </span>
                  </Col>
                  <Col md="6">

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptHome" onChange={onValueChangeHome} name="IsAcceptHome" value='true' checked={radioHomeVal == 'true'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptHome" style={styleLabelBold}>Yes</Label>

                    </FormGroup>

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptHome" onChange={onValueChangeHome} name="IsAcceptHome" value='false' checked={radioHomeVal == 'false'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptHome" style={styleLabelBold}>No</Label>

                    </FormGroup>
                  </Col>
                </FormGroup> */}

                {/* <FormGroup row className="pt-3">
                  <Col md="2">
                    <span>Is Accept Eu-Uk </span>
                  </Col>
                  <Col md="6">

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptEU_UK" onChange={onValueChangeEuUk} name="IsAcceptEU_UK" value='true' checked={radioEuUkVal == 'true'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptEU_UK" style={styleLabelBold}>Yes</Label>

                    </FormGroup>

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptEU_UK" onChange={onValueChangeEuUk} name="IsAcceptEU_UK" value='false' checked={radioEuUkVal == 'false'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptEU_UK" style={styleLabelBold}>No</Label>

                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className="pt-3">
                  <Col md="2">
                    <span>Is Accept International </span>
                  </Col>
                  <Col md="6">

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptInternational" onChange={onValueChangeInternational} name="IsAcceptInternational" value='true' checked={radioInternationalVal == 'true'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptInternational" style={styleLabelBold}>Yes</Label>

                    </FormGroup>

                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="IsAcceptInternational" onChange={onValueChangeInternational} name="IsAcceptInternational" value='false' checked={radioInternationalVal == 'false'} />
                      <Label className="form-check-label" check htmlFor="IsAcceptInternational" style={styleLabelBold}>No</Label>

                    </FormGroup>
                  </Col>
                </FormGroup> */}

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Embeded Map </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="EmbededMap"
                      id="EmbededMap"
                       defaultValue={universityCampusObject?.embededMap}
                      placeholder="Embeded Map"

                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup className="has-icon-left position-relative">

                {
                     selectedId !== 0?
                     <>
                      <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}> 
                      <Button color="warning" type="submit" className="mr-1 mt-3">Update</Button>   
                      <div>
                      <Button onClick={cancel}  color="danger uapp-form-button float-right">Cancel</Button> 
                        </div>  
      
                     </FormGroup>
                     
                     </>
                     :
                     <>
                       <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}> 
                      <Button.Ripple
                        color="primary"
                        type="submit"
                        className="mr-1 mt-3"

                      >
                        Submit
                      </Button.Ripple>
                      <div>
                        {
                            selectedId !== 0 || universityCampusList.length>0?
                            <Button onClick={cancel} color="danger uapp-form-button float-right">Cancel</Button> 
                            :
                            <></>
                        }
                     
                        </div>  
                      </FormGroup>
                      </>
                  }

                </FormGroup>
              </Form>:

            <FormGroup className="has-icon-left position-relative" style={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>

         
            <Button onClick={onShow} color="primary uapp-form-button">Add another</Button>
            <Button onClick={onNextPage} color="warning uapp-form-button float-right">Next Page</Button>
            </FormGroup>
}
            

            
            </TabPane>

          </TabContent>
        </CardBody>

      </Card>

    </div>
  )
}
const mapStateToProps = state => ({
  univerSityTypeList: state.universityTypeDataReducer.universityTypes,
  univerSityCountryList: state.universityCountryDataReducer.universityCountries,
  univerSityStateList: state.universityStateDataReducer.universityStates,
})
export default connect(mapStateToProps)(AddUniversityCampus);
