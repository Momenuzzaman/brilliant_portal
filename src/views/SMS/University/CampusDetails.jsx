import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {  Card, CardBody, Input, CardHeader,Label, Col,  Row, Table, Form, FormGroup, Button } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";

const CampusDetails = () => {
    const {id} = useParams();
    const [campusInfo, setCampusInfo] = useState({});
    const [subList, setSubList] = useState([]);
    const history = useHistory();
    const [subLabel, setSubLabel] = useState("Select Subject...");
    const [subValue, setSubValue] = useState(0);
    const [radioIsAcceptHome, setRadioIsAcceptHome] = useState('false');
    const [radioIsAcceptUk, setRadioIsAcceptUk] = useState('true');
    const [radioIsAcceptInt, setRadioIsAcceptInt] = useState('false');

    // for feature checkbox
    const [homeAccept, setHomeAccept] = useState(true);
    const [ukAccept, setUkAccept] = useState(true);
    const [intAccept, setIntAccept] = useState(true);

    const [subId, setSubId] = useState([]);
    const [subName, setSubName] = useState("");
    const [subdata,setSubData] =useState([]);
    const [intakeData, setIntakeData] = useState([]);
    const [intakeStatusData, setIntakeStatusData] = useState([]);
    const [intakeLabel, setIntakeLabel] = useState("Intake");
    const [intakeValue, setIntakeValue] = useState(0);
    const [statusLabel, setStatusLabel] = useState("Status");
    const [statusValue, setStatusValue] = useState(0);

    useEffect(()=>{
        // const uCountryId = 0;
        // const uStateId = 0;
        // const uTypeId = 0;
        // const providerId = 0;
       
          get(`UniversityCampus/Get/${id}`)
          .then(res => {
              setCampusInfo(res);
              console.log('unicamp', res);
          })

          // Subject get by university
          get(`UniversityCampusSubject/GetUnassigned/${id}`).then(res=>{
            
            setSubList(res);
            console.log("Sublist",res);
            // setSubList(res);
          })

          // for intake
          get('Intake/Index').then(res=>{
            setIntakeData(res);
          })

          get('IntakeStatus/GetAll').then(res=>{
            setIntakeStatusData(res);
          })
  
      },[id]);

      // for intake dropdown
      const intakeDropDown = intakeData?.map((intake) => ({
        label: intake?.name,
        value: intake?.id,
      }));
  
      const intakeStatusDropDown = intakeStatusData?.map((status) => ({
        label: status?.name,
        value: status?.id,
      }));

      const selectIntakeType = (label, value) => {
        setIntakeLabel(label);
        setIntakeValue(value);
        // handleSearch();
      };
  
      const selectStatusType = (label, value) => {
        setStatusLabel(label);
        setStatusValue(value);
        // handleSearch();
      };

      // for subject dropdown
      const subMenu = subList.map(subOptions =>({label:subOptions.name, value:subOptions.id}) );

      const selectSubject = (label, value) => {
        setSubLabel(label);
        setSubValue(value);
      }

    // on change radio button starts here
    const onValueChangeIsAcceptHome = (event) => {
      setRadioIsAcceptHome(event.target.value);
    }

    const onValueChangeIsAcceptUk = (event) => {
      setRadioIsAcceptUk(event.target.value);
    }

    const onValueChangeIsAcceptInt = (event) => {
      setRadioIsAcceptInt(event.target.value);
    }
    // on change radio button ends here

    // on change Feature starts here
      // const handleFeatureChange = e =>{
      //   const {name, checked} = e.target;
      //   if(name === "isAcceptHome"){
      //     setIsAcceptHome(!isAcceptHome);
      //   }
      //   else if(name === "isAcceptEU_UK"){
      //     setIsAcceptUk(isAcceptUk);
      //   }
      //   else{
      //     setIsAcceptInt(!isAcceptInt);
      //   }
      // }
    // on change Feature ends here

    const backToDashboard = () =>{
        history.push('/campusList');
    }

    const handleSubjectIntake = (e) => {
      e.preventDefault();

      const subdata = subList;
      console.log("postData",subdata);
      
     



      // setSubData(subdata);
      
      

      // const x =[...a,subdata];
      // setA(x);
      // console.log("subList",clonedSubData);

      // for (var value of subId) { 
      //     console.log("values",value);
      //    }

      // for (var value of clonedSubData) { 
      //   console.log("values",value);
      //  }
    }

    const handleSingleSubmit = (e) => {
      e.preventDefault();
      const subdata = new FormData(e.target);

      for (var value of subdata.values()) { 
        console.log("values",value);
       }
    }

    const handleChange = e =>{
      const {name, checked} = e.target;
      if(name === "allSelect"){
        let tmpUsers = subList.map(sub=> {return {...sub, isChecked: checked}});
        setSubList(tmpUsers);
        console.log("selectAll",tmpUsers);
      }
      else if(name === "allDeselect"){
        let tmpUsers = subList.map(sub=> {return {...sub, isChecked: !checked}});
        setSubList(tmpUsers);
        console.log("dselectAll", tmpUsers);
      }
      else{
          let tmpUsers = subList.map(sub=> sub.name === name ? {...sub, isChecked: checked } : sub);
          setSubList(tmpUsers);
          console.log("singleSelect", tmpUsers);  
      }
    }

    // for feature checkboxes
    const handleFeatureHome = e =>{
      const {name, id, checked, disabled} = e.target;
      
      const features = subList.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptHome: checked}: data);
      setSubList(features);
      console.log("featureHome",features);
      // if(data?.isChecked === true){
      //     setSubList({...data, isAcceptHome: homeAccept})
      // }
  }

  const handleFeatureUk = e =>{
      const {name, id, checked} = e.target;
      
      const features = subList.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptUk: checked}: data);
      setSubList(features);
      console.log("featureUk",features);
      // if(data?.isChecked === true){
      //     setSubList({...data, isAcceptHome: homeAccept})
      // }
  }

  const handleFeatureInt = e =>{
      const {name, id, checked} = e.target;
      
      const features = subList.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptInt: checked}: data);
      setSubList(features);
      console.log("featureInt",features);
      // if(data?.isChecked === true){
      //     setSubList({...data, isAcceptHome: homeAccept})
      // }
  }



    
    
    return (
        <div>
            <Card className="uapp-card-bg">
        <CardHeader className="page-header">

          <h3 className="text-light">Campus details</h3>
          <div className="page-header-back-to-home" >
            <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Campus List</span>
          </div>

        </CardHeader>
      </Card>

      <div className="uapp-employee-profile">
        <Row>

        



          <Col md="12"> 
           <Card className="uapp-employee-profile-right">
             <div className="uapp-profile-CardHeader">
                <div className="uapp-circle-image margin-top-minus">
                  <img src={campusInfo?.fileUrl} alt='campus_image' />
                </div>    
                
                <h5> {campusInfo?.name}</h5>
                 {/* <p> {providerInfo?.providerType?.name} </p>   */}
            </div>
              <CardBody>

                 <div>
                 <ul className="uapp-ul text-center">
                     {/* <li> {providerInfo?.email} </li>
                     <li> {providerInfo?.phoneNumber} </li> */}
                   
                   </ul>
                 </div>

            </CardBody>
        </Card>

          
          </Col>
        </Row>
        <Row>

          <Col md='6'>

        <Card>

        <div className="table-responsive container mt-3">
                <Table className="table-sm table-bordered" >
                  <thead className="thead-uapp-bg">
                    <tr style={{ textAlign: "center" }}>
                   
                      <th>Logo</th>                    
                      <th>Name</th>                    
                      <th>Type</th>                    
                    
                   
                    </tr>
                  </thead>
                  <tbody>

                    {/* {
                      universityList?.map((university, i) => <tr key={university.id} style={{ textAlign: "center" }}>
                        
                        <td> <img className="Uapp-c-image" src={`${rootUrl}/${university.universityLogo.fileUrl?.slice(2, university.universityLogo.fileUrl.length)}`} /> </td>
                        <td>{university.name} ({university.shortName })</td>
                        <td>{university.universityType.name}</td>
                       
                       
                      </tr>)

                    } */}


                  </tbody>
                </Table>

                {/* <Pagination dataPerPage={dataPerPage} totalData={entity} paginate={paginate} currentPage={currentPage} /> */}
              </div>   
                  

        </Card>

        {/* Assign single subject */}
         <Card className="uapp-card-bg">
            <CardHeader className="page-header">

              <h3 className="text-light">Assign single subject</h3>

            </CardHeader>
         </Card>

         <Card className="uapp-employee-search">
            <CardBody className="search-card-body">
              <Form onSubmit={handleSingleSubmit}>
                  

                  <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>
                      Subject <span className="text-danger">*</span>{" "}
                    </span>
                  </Col>
                  <Col md="6">
                    <Select
                      options={subMenu}
                      value={{ label: subLabel, value: subValue }}
                      onChange={(opt) => selectSubject(opt.label, opt.value)}
                      name="id"
                      id="id"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row className="pt-3">
                  <p><b>Subject features</b></p>
                  <br />
                  <br />
                    <Col md="3">
                        <span>Is accept home <span className="text-danger">*</span> </span>
                    </Col>

                    <Col md="5">

                      <FormGroup check inline>
                        <Input className="form-check-input" 
                        type="radio" 
                        id="isAcceptHome" 
                        onChange={onValueChangeIsAcceptHome} 
                        name="isAcceptHome" 
                        value='true' 
                        checked={radioIsAcceptHome == 'true'} 
                        />
                        <Label className="form-check-label" check htmlFor="isAcceptHome">Yes</Label>

                       </FormGroup>

                      <FormGroup check inline>
                          <Input className="form-check-input" 
                          type="radio" 
                          id="isAcceptHome" 
                          onChange={onValueChangeIsAcceptHome} 
                          name="isAcceptHome" 
                          value='false' 
                          checked={radioIsAcceptHome == 'false'} 
                          />

                          <Label className="form-check-label" check htmlFor="isAcceptHome">No</Label>

                      </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row className="pt-3">
                    <Col md="3">
                        <span>Is accept EU_UK <span className="text-danger">*</span> </span>
                    </Col>

                    <Col md="5">

                      <FormGroup check inline>
                        <Input className="form-check-input" 
                        type="radio" 
                        id="isAcceptEU_UK" 
                        onChange={onValueChangeIsAcceptUk} 
                        name="isAcceptEU_UK" 
                        value='true' 
                        checked={radioIsAcceptUk == 'true'} 
                        />
                        <Label className="form-check-label" check htmlFor="isAcceptEU_UK">Yes</Label>

                       </FormGroup>

                      <FormGroup check inline>
                          <Input className="form-check-input" 
                          type="radio" 
                          id="isAcceptEU_UK" 
                          onChange={onValueChangeIsAcceptUk} 
                          name="isAcceptEU_UK" 
                          value='false' 
                          checked={radioIsAcceptUk == 'false'} 
                          />

                          <Label className="form-check-label" check htmlFor="isAcceptEU_UK">No</Label>

                      </FormGroup>
                    </Col>
                 </FormGroup>

                 <FormGroup row className="pt-3">
                    <Col md="3">
                        <span>Is accept international <span className="text-danger">*</span> </span>
                    </Col>

                    <Col md="5">

                      <FormGroup check inline>
                        <Input className="form-check-input" 
                        type="radio" 
                        id="isAcceptInternational" 
                        onChange={onValueChangeIsAcceptInt} 
                        name="isAcceptInternational" 
                        value='true' 
                        checked={radioIsAcceptInt == 'true'} 
                        />
                        <Label className="form-check-label" check htmlFor="isAcceptInternational">Yes</Label>

                       </FormGroup>

                      <FormGroup check inline>
                          <Input className="form-check-input" 
                          type="radio" 
                          id="isAcceptInternational" 
                          onChange={onValueChangeIsAcceptInt} 
                          name="isAcceptInternational" 
                          value='false' 
                          checked={radioIsAcceptInt == 'false'} 
                          />

                          <Label className="form-check-label" check htmlFor="isAcceptInternational">No</Label>

                      </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

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

         
        

      {/* Assign multiple subject */}

        <Card className="uapp-card-bg">
            <CardHeader className="page-header">

              <h3 className="text-light">Assign multiple subject</h3>

            </CardHeader>
         </Card>

         <Card className="uapp-employee-search">
            <CardBody className="search-card-body">

              <Form onSubmit={handleSubjectIntake}>


              {/* <Card>
                  <CardHeader className="page-header">
                  <CardHeader>Select Subject</CardHeader>
                  </CardHeader>
              </Card> */}
              
                        {/* <Input
                        type='hidden'
                        name='campusId'
                        id='campusId'
                        value={id}
                        
                        /> */}

                      <FormGroup>
                        <Row>
                          <Col sm="6" className='text-center'>
                          
                          <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={handleChange}
                                  type="checkbox"
                                  checked={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  disabled={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  name="allSelect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Select all subjects</b>
                                </label>
                              </div>

                          </Col>

                          <Col sm="6" className='text-center'>
                           

                              <div className="form-check ms-auto">
                                <input
                                  className="form-check-input"
                                  onChange={handleChange}
                                  type="checkbox"
                                  checked={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  disabled={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  name="allDeselect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Deselect all subjects</b>
                                </label>
                              </div>


                          </Col>
                          <br />
                          <br />


                        </Row>
                      </FormGroup>


                      <Row className='text-center'>
                        <Col xs="6" sm="4" md="3">
                        
                        </Col>

                        <Col xs="6" sm="4" md="3">
                          <span>Is accept home </span>
                        </Col>

                        <Col xs="6" sm="4" md="3">
                          <span>Is accept EU_UK  </span>
                        </Col>

                        <Col xs="6" sm="4" md="3">
                          <span>Is accept international</span>
                        </Col>
                      </Row>

                      {/* Map ongoing  */}


                          {
                            subList?.map((sub,i) => (
                              <>
                            <Row>
                              <Col xs="6" sm="4" md="3" key={i} className="">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={e=>{
                                      handleChange(e); 
                                      setSubId(sub?.id);
                                      setSubName(sub?.name);
                                    }}
                                    // onChange={handleSubjectCheckList}
                                    // onChange={e=>console.log(e.target.checked,sub?.id)}
                                    name={sub.name}
                                    checked={sub?.isChecked || false}
                                    // defaultChecked={user?.checked}
                                    // tmpUsers={user?.checked}
                                    value={sub?.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor=""
                                  >
                                    {sub.name}
                                  </label>
                                </div>
                              </Col>

                              <Col xs="6" sm="4" md="3" className='text-center'>
                                 {/* <span>Is accept home </span><br /> */}
                                 <FormGroup check inline>
                                    <Input className="form-check-input" 
                                    type="checkbox" 
                                    id={`${sub?.id}`}
                                    name='isAcceptHome'
                                    disabled={sub?.isChecked ? false : true}
                                    onChange={e=>{
                                        setHomeAccept(!homeAccept);
                                        handleFeatureHome(e);
                                    }}
                                    // value={isAcceptHome} 
                                    // checked={!sub?.isChecked ? false : true} 
                                    // defaultChecked={false}
                                    // checked={sub?.isAcceptHome ? true : false}
                                    // defaultChecked={sub?.isChecked ? true : false}
                                    />

                                  </FormGroup>


                              </Col>

                              <Col xs="6" sm="4" md="3" className='text-center'>
                                  {/* <span>Is accept EU_UK  </span><br /> */}
                                  <FormGroup check inline>
                                    <Input className="form-check-input" 
                                    type="checkbox" 
                                    id={`${sub?.id}`}
                                    name='isAcceptEU_UK'
                                    disabled={sub?.isChecked ? false : true}
                                    onChange={e=>{
                                        setUkAccept(!ukAccept);
                                        handleFeatureUk(e);
                                    }} 
                                    // value={isAcceptUk} 
                                    // checked={isAcceptUk} 
                                    defaultChecked = {false}
                                    />

                                   </FormGroup>
                              </Col>

                              <Col xs="6" sm="4" md="3" className='text-center'>
                                  {/* <span>Is accept international</span> */}

                                  <FormGroup check inline>
                                    <Input className="form-check-input" 
                                    type="checkbox" 
                                    id={`${sub?.id}`}
                                    name='isAcceptInternational'
                                    disabled={sub?.isChecked ? false : true}
                                    onChange={e=>{
                                        setIntAccept(!intAccept);
                                        handleFeatureInt(e);
                                    }} 
                                    // value={isAcceptInt} 
                                    // defaultChecked = {false}
                                    
                                    

                                    />

                                   </FormGroup>
                              </Col>

                              </Row>
                              </>
                            ))}


                <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

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


     
      
      

      <br /><br /><br /><br /><br />



    </Col>

        {/* side columns */}
          <Col md='6'>
          <Card className="uapp-card-bg">
             <CardHeader className="page-header">
                 <h3 className="text-light">Subject List</h3>
             </CardHeader>
          </Card>

              <Card className="p-3">

      <div className="table-responsive page-header ">
            <Table className="table-sm table-bordered rounded">
            <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                
                  <th>SL/NO</th>
                  <th>Name</th>
                  <th>Features</th>
                  <th>Intakes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
  
                {/* {
                  examTestTypeAttribute?.map((exam, i) => <tr key={exam?.id}>
                  
                    <td>{exam?.name}</td>
                    <td>{exam?.fieldType?.name}</td>

                   
                    <td>
                      <Button className="mx-2" onClick={() => toggleDanger(exam?.name, exam?.id)} color="danger"><i className="fas fa-trash-alt"></i></Button>
                      <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">
    
                      <ModalBody>
                        <p>Are You Sure to Delete this? Once Deleted it can't be Undone!</p>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" onClick={()=> handleDelete(exam)}>YES</Button>
                        <Button onClick={closeDeleteModal}>NO</Button>
                      </ModalFooter>

                    </Modal>
                     
  
                    </td>
                  </tr>)
                } */}
  
              </tbody>
            </Table>
            </div>

              </Card>


            {/* subject intake */}
             {/* intake filter */}
      <Card className="uapp-card-bg">
         <CardHeader className="page-header">
             <h3 className="text-light">Subject intake</h3>
         </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
            <CardBody className="search-card-body">

              <Form onSubmit="">
              <FormGroup>
                <Row>
                  <Col lg="5" md="4" sm="6" xs="6">
                    <Select
                      options={intakeDropDown}
                      value={{ label: intakeLabel, value: intakeValue }}
                      onChange={(opt) => selectIntakeType(opt.label, opt.value)}
                      name="UniversityTypeId"
                      id="UniversityTypeId"
                    />
                  </Col>
          
                  <Col lg="5" md="4" sm="6" xs="6">
                    <Select
                      options={intakeStatusDropDown}
                      value={{ label: statusLabel, value: statusValue }}
                      onChange={(opt) => selectStatusType(opt.label, opt.value)}
                      name="UniversityCountryId"
                      id="UniversityCountryId"
                    />
                  </Col>
          
                  <Col lg="2" md="4" sm="6" xs="6">
                    {/* <div className='d-flex justify-content-center'> */}
                      <Button type="submit" className='btn btn-uapp-add btn btn-secondary'>Apply</Button>
                    {/* </div> */}
                    
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                  <Row className="">
                    <Col lg="12" md="12" sm="12" xs="12">
                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <div
                          className="mt-1 mx-1 d-flex btn-clear"
                          // onClick={handleClearSearch}
                        >
                          {/* <Icon.X  className='text-danger' />*/}
                          <span className="text-danger">
                            <i className="fa fa-times"></i> Clear
                          </span>
                        </div>

                        {/* <div className="mt-2 mx-1">
                        <span className="btn btn-primary">Export</span>
                      </div> */}
                      </div>
                    </Col>
                </Row>
              </FormGroup>

              {/* <Card>
                  <CardHeader className="page-header">
                  <CardHeader>Select Subject</CardHeader>
                  </CardHeader>
              </Card> */}
              
                        <Input
                        type='hidden'
                        name='universityId'
                        id='universityId'
                        value={id}
                        
                        />

                      <FormGroup>
                        <Row>
                          <Col sm="6" className='text-center'>
                            {/* {menus.length > 0 && (
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={(e) => handleSelectAll(e)}
                                  type="checkbox"
                                  name="allSelect"
                                  id="allSelect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  Select All
                                </label>
                              </div>
                            )} */}
                          
                          <div className="form-check">
                                <input
                                  className="form-check-input"
                                  // onChange={handleChange}
                                  type="checkbox"
                                  // checked={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  // disabled={subList.filter(sub=> sub?.isChecked !== true).length < 1}
                                  name="allSelect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Select all</b>
                                </label>
                              </div>

                          </Col>

                          <Col sm="6" className='text-center'>
                            {/* {menus.length > 0 && (
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={(e) => handleDeselectAll(e)}
                                  type="checkbox"
                                  name="allDeselect"
                                  id="allDeselect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  Deselect All
                                </label>
                              </div>
                            )} */}

                              <div className="form-check ms-auto">
                                <input
                                  className="form-check-input"
                                  // onChange={handleChange}
                                  type="checkbox"
                                  // checked={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  // disabled={subList.filter(sub=> sub?.isChecked !== false).length < 1}
                                  name="allDeselect"
                                />
                                <label className="form-check-label" htmlFor="">
                                  <b>Deselect all</b>
                                </label>
                              </div>


                          </Col>
                          <br />
                          <br />
                          {/* {
                            menus?.map((menu) => (
                              <Col xs="6" sm="4" md="3" key={menu.id}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={(e) => handleCheck(e)}
                                    name={menu.id}
                                    id={menu.id}
                                    defaultChecked={menu.checked}
                                    value={menu?.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor=""
                                  >
                                    {menu.name}
                                  </label>
                                </div>
                              </Col>
                            ))} */}

                          {/* {
                            subList?.map((sub,i) => (
                              <Col xs="6" sm="4" md="3" key={i} className="text-center">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={handleChange}
                                    name={sub.name}
                                    checked={sub?.isChecked || false}
                                    // defaultChecked={user?.checked}
                                    // tmpUsers={user?.checked}
                                    value={sub?.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor=""
                                  >
                                    {sub.name}
                                  </label>
                                </div>
                              </Col>
                            ))} */}


                        </Row>
                      </FormGroup>

                      {/* <FormGroup
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Row>
                          <Col>
                            <Button.Ripple
                              type="submit"
                              className="mr-1 mt-3 badge-primary"
                            >
                              Submit
                            </Button.Ripple>
                          </Col>
                        </Row>
                      </FormGroup> */}




              </Form>


            </CardBody>
      </Card>


          </Col>
      </Row>
    </div>


            
  </div>
  );
};


export default CampusDetails;