import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, Table, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup } from 'reactstrap';
import get from '../../../helpers/get';
import Select from "react-select";
import { connect } from 'react-redux';
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import Axios from 'axios';
import { rootUrl } from '../../../constants/constants';

import * as XLSX from 'xlsx/xlsx.mjs';
import ReactToPrint from 'react-to-print';
import post from '../../../helpers/post';
import { useToasts } from "react-toast-notifications";
import put from '../../../helpers/put';
import ButtonForFunction from '../Components/ButtonForFunction';
import CustomButtonRipple from '../Components/CustomButtonRipple';
import LinkButton from '../Components/LinkButton';
import LinkSpanButton from '../Components/LinkSpanButton';
import remove from '../../../helpers/remove';

const CampusList = (props) => {

    const [campusList, setCampusList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [searchStr, setSearchStr] = useState("");
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(1);
    const [entity, setEntity] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [uniStateLabel, setUniStateLabel] = useState('Select Country State...');
    const [unistateValue, setUniStateValue] = useState(0);
    const [uniCountryLabel, setUniCountryLabel] = useState('Select Campus Country...');
    const [uniCountryValue, setUniCountryValue] = useState(0);
    const [success, setSuccess] = useState(false);
    const [universityId, setuniversityId] = useState(0);
    const [submitData, setSubmitData] = useState(false);
    const [campObj, setCampObj] = useState({});
    const [selectedId, setSelectedId] = useState(0);
    const [deleteModal, setDeleteModal] = useState(false);
    const [uniNameFromObj, setUniNameFromObj] = useState('');

    

    // const universityStates = props.univerSityStateList[0];
    const [universityStates, setUniversityStates] = useState([]);

    const { addToast } = useToasts();

    const history = useHistory();
    const location = useLocation();
    localStorage.setItem('uIdForCamp',location?.id);


    useEffect(() => {

        // const page = 0;
        // const pageSize = 0;  
        
        const search = "";

        get(
          `UniversityCampus/index?universityId=${localStorage.getItem('universityId')}&search=${searchStr}`
        ).then((res) => {
          
          console.log("pagination",res);
          setCampusList(res);
          
          setLoading(false);
        });

        get("UniversityCountryDD/Index").then(res =>{
          setCountryList(res);
        });

        get(`University/Get/${localStorage.getItem('universityId')}`)
        .then(res => {
          console.log('single uni', res);
          setUniNameFromObj(res?.name);
        })
    
      }, [callApi, currentPage, dataPerPage, searchStr, entity, loading, serialNum, success]);

      const countryDD = countryList.map(countryOptions =>({label:countryOptions?.name, value:countryOptions?.id}) );
      

      const handleSearch = () => {
        setCurrentPage(1);
        setCallApi((prev) => !prev);
      };

      // on enter press
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          setCurrentPage(1);
          setCallApi((prev) => !prev);
        }
      };

      const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
      };    


    const backToDashboard = () => {
        history.push("/universityList");
      };

    const handleClearSearch = () =>{
      setSearchStr("");
      setCallApi((prev) => !prev);
    }

    const selectDataSize = (value) => {
      setLoading(true);
      setDataPerPage(value);
      setCallApi((prev) => !prev);
    };

    //  change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCallApi((prev) => !prev);
  };

    // user select data per page
    const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
    const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

    // toggle dropdown
    const toggle = () => {
      setDropdownOpen((prev) => !prev);
    };

    // on Close Modal
    const closeModal = () => {
      setModalOpen(false);
      // setSelectedId(0);
    }

  const universityStateName = universityStates?.map(uniState => ({ label: uniState.name, value: uniState.id }));


  const handleUpdate = (id) =>{
    setModalOpen(true);

    get(`UniversityCampus/Get/${id}`)
    .then(res => {
      setCampObj(res);
      setUniCountryLabel(res?.universityCountry?.name);
      setUniCountryValue(res?.campusCountryId);
      setUniStateLabel(res?.universityState?.name);
      setUniStateValue(res?.campusStateId);
      setSelectedId(res?.id);
    })
    setCampObj('');
  }

    const handleSubmit = event =>{
      event.preventDefault();
      const subdata = new FormData(event.target);

      if(selectedId === 0){
        post(`UniversityCampus/Create`, subdata)
      .then(res => {
        setSuccess(!success);
        setModalOpen(false);
        console.log("ressss", res);
        setuniversityId(res?.data?.result?.universityId)
        if (res.status === 200 && res.data.isSuccess === true) {
          setSubmitData(false);
          addToast(res.data.message, {
            appearance: 'success',
            autoDismiss: true,
          })
        }
      })
      }
      else{
        put(`UniversityCampus/Update`, subdata)
          .then(res => {
            
            if (res.status === 200 && res.data.isSuccess === true) {
              setSubmitData(false);
              addToast(res.data.message, {
                appearance: 'success',
                autoDismiss: true,
              })
              setSelectedId(0);
              setSuccess(!success);
              setModalOpen(false);
            }
          
          })
      }

    }

    // select University Country
    const selectUniCountry = (label, value) => {
      setUniCountryLabel(label);
      setUniCountryValue(value);
      get(`UniversityStateDD/Index/${value}`)
        .then(res => {
          console.log("res", res);
          // setUniStateLabel(res.name)
          // setUniStateValue(res.id)
          setUniversityStates(res);
        })
    }

    // select University State
    const selectUniState = (label, value) => {
      setUniStateLabel(label);
      setUniStateValue(value);
    }

    // const handleAddUniversityCampus = () =>{
    //   history.push("/addUniversityCampus");
    // }

    const handleExportXLSX = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(campusList);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
  
      XLSX.writeFile(wb, "MyExcel.xlsx");
    };
  
    const componentRef = useRef();

    const toggleDanger = (p) => {
      console.log("dele", p);
      localStorage.setItem("camppId", p?.id);
      localStorage.setItem("camppName", p?.name);
      setDeleteModal(true);
    };

    const handleDeletePermission = (id) => {
      const returnValue = remove(`UniversityCampus/Delete/${id}`).then(
        (action) => {
          setDeleteModal(false);
          setSuccess(!success);
          addToast(action, {
            appearance: "error",
            autoDismiss: true,
          });
          localStorage.removeItem("camppId");
          localStorage.removeItem("cammpName");
        }
      );
    };

    return (
        <div>

        <Card className="uapp-card-bg">
            <CardHeader className="page-header">
                <h3 className="text-light">Campus List</h3>
                <div className="page-header-back-to-home">
                  <span onClick={backToDashboard} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to University List
                  </span>
                </div>
            </CardHeader>
      </Card>

      <Card className="uapp-employee-search">
          <CardBody className="search-card-body">

             <div style={{ display: "flex", justifyContent: "end"}}>
             <Input
                style={{ height: "2.7rem" }}
                type="text"
                name="search"
                value={searchStr}
                id="search"
                placeholder="Name ,Short Name"
                onChange={searchValue}
                onKeyDown={handleKeyDown}
              />
             </div>

            <Row className="">
            <Col lg="12" md="12" sm="12" xs="12">
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div
                  className="mt-1 mx-1 d-flex btn-clear"
                  onClick={handleClearSearch}
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
          </CardBody>
      </Card>

      <Card className="uapp-employee-search">
          <CardBody>

          {
            uniNameFromObj ? 
            <div className="container test-score-div-1-style mt-1 mb-4">
            <span className="test-score-span-1-style">
              <b>{uniNameFromObj}{"'"}s</b> campus list is shown here.
            </span>
          </div>
          :
          null
          }

          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              
              <ButtonForFunction
                func={() => setModalOpen(true)}
                className={"btn btn-uapp-add "}
                icon={<i className="fas fa-plus"></i>}
                name={" Add New"}
                permission={6}
              />

            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  {/* Showing */}
                </Col>
                <Col md="3" sm="7" xs="7">
                  {/* <Select
                    options={dataSizeName}
                    value={{ label: dataPerPage, value: dataPerPage }}
                    onChange={(opt) => selectDataSize(opt.value)}
                  /> */}
                </Col>
                <Col lg="2">
                  <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen}
                    toggle={toggle}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-bars"></i>
                    </DropdownToggle>
                    <DropdownMenu className='bg-dd'>
                    {/* <DropdownItem> */}
                        
                      <div className='d-flex justify-content-around align-items-center mt-2'>
                        <div className='text-light cursor-pointer'>
                           <p onClick={handleExportXLSX}><i className="fas fa-file-excel"></i></p>
                        </div>
                        <div className='text-light cursor-pointer'>
                          <ReactToPrint
                             trigger={() => <p><i className="fas fa-file-pdf"></i></p>}
                             content={() => componentRef.current}
                           />
                        </div>
                      </div>

                        {/* <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button"
                          table="table-to-xls"
                          filename="tablexls"
                          sheet="tablexls"
                          buttonText="Download as XLS"/> */}

                        
                           {/* <Button onClick={onDownload}> Export excel </Button> */}

                      {/* </DropdownItem> */}

                      {/* <DropdownItem> */}
                      
                      {/* </DropdownItem> */}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>

          <div>

            <Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal2" size='lg'>
              <ModalHeader style={{backgroundColor: '#1d94ab'}}><span className='text-white'>Add University Campus</span></ModalHeader>
              <ModalBody>
                <Form onSubmit={handleSubmit} >

                <FormGroup row className="has-icon-left position-relative">
                  <Input type="hidden" id="universityId" name="universityId" value={localStorage.getItem('universityId')} />
                  <Input type="hidden" id="Id" name="Id" value={selectedId} />
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Campus Name <span className="text-danger">*</span> </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="Name"
                      id="Name"  
                      
                     defaultValue={campObj?.name}
                      placeholder="Enter Campus Name"
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
                      options={countryDD}
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
                      defaultValue={campObj?.campusCity}
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
                      defaultValue={campObj?.addressLine}
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
                      defaultValue={campObj?.totalStudent}
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
                       defaultValue={campObj?.internationalStudent}
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
                      defaultValue={campObj?.avarageTutionFee}
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
                      defaultValue={campObj?.avarageLivingCost}
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
                      defaultValue={campObj?.avarageApplicationFee}
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
                      defaultValue={campObj?.estimatedTotalCost}
                      placeholder="Estimated Total Cost"
                      required
                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span>Embeded Map </span>
                  </Col>
                  <Col md="6">
                    <Input
                      type="text"
                      name="EmbededMap"
                      id="EmbededMap"
                       defaultValue={campObj?.embededMap}
                      placeholder="Embeded Map"

                    />
                    {/* <div className="form-control-position">
                                        <User size={15} />
                                    </div> */}
                  </Col>
                </FormGroup>

                  <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

                    
                    {/* localStorage.getItem("updateUni") ? */}
                      {/* <Button color="warning" className="mr-1 mt-3" onClick={handleUpdateSubmit}>Update</Button> : */}

                      {/* <Button.Ripple
                        color="warning"
                        type="submit"
                        className="mr-1 mt-3"
                       
                      >
                        Submit
                      </Button.Ripple> */}

                      <CustomButtonRipple
                        color={"primary"}
                        type={"submit"}
                        className={"mr-1 mt-3"}
                        name={"Submit"}
                        permission={6}
                      />

                  </FormGroup>

                </Form>
              </ModalBody>

            </Modal>
            <div>

            </div>
          </div>

          {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) :
          <div className="table-responsive" ref={componentRef}>

              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Name</th> 
                    <th>Campus City</th>
                    <th>Student</th>
                    {/* <th>Cost</th> */}
                    <th>Programs</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { 

                        campusList?.map((campus, i) => (
                          <tr key={campus?.id} style={{ textAlign: "center" }}>
                            <td>{serialNum + i}</td>
                            
                            <td>
                              {campus?.name}
                            </td>
                            <td>
                              {campus?.campusCity}
                            </td>
                            <td>
                              Total Student - {campus?.totalStudent} {<br />}
                              International Student - {campus?.internationalStudent}
                            </td>
                            {/* <td>{campus?.internationalStudent}</td> */}

                            {/* <td>
                              Avg. Tution Fee - {campus?.avarageTutionFee} {<br />}
                              Avg. Living Cost - {campus?.avarageLivingCost} {<br />}
                              Avg. Application Fee - {campus?.avarageApplicationFee} {<br />}
                              Est. Total Cost - {campus?.estimatedTotalCost}
                            </td> */}
                            <td>
                               {" "}
                               <span
                                 className="badge badge-secondary"
                                 style={{ cursor: "pointer" }}
                               >
                                 {/* <Link className="text-decoration-none" to = {`campusSubjectList/${campus?.id}`}> 
                                 <span> View </span>
                                 </Link> */}

                                  <LinkSpanButton
                                    url={`campusSubjectList/${campus?.id}`}
                                    className={"text-decoration-none"}
                                    data={"View"}
                                    permission={6}
                                  />

                               </span>{" "}
                             </td>
                            
                            <td style={{ width: "8%" }} className="text-center">
                              <ButtonGroup variant="text">

                              {/* <Link to= {`/campusDetails/${campus?.id}`}>
                                <Button color="primary" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-eye"></i>{" "}
                                </Button>
                                </Link> */}

                                <LinkButton
                                  url={`/campusDetails/${campus?.id}`}
                                  color={"primary"}
                                  className={"mx-1 btn-sm"}
                                  icon={<i className="fas fa-eye"></i>}
                                  permission={6}
                                />

                                {/* <Button onClick={()=> handleUpdate(campus?.id)} color="dark" className="mx-1 btn-sm">
                                  {" "}
                                  <i className="fas fa-edit"></i>{" "}
                                </Button> */}

                                <ButtonForFunction
                                  func={()=> handleUpdate(campus?.id)}
                                  color={"dark"}
                                  className={"mx-1 btn-sm"}
                                  icon={<i className="fas fa-edit"></i>}
                                  permission={6}
                                />

                                {/* <Button color="danger" className="mx-1 btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </Button> */}

                                <ButtonForFunction
                                  color={"danger"}
                                  func={() => toggleDanger(campus)}
                                  className={"mx-1 btn-sm"}
                                  icon={<i className="fas fa-trash-alt"></i>}
                                  permission={6}
                                />

                            <Modal
                              isOpen={deleteModal}
                              toggle={() => setDeleteModal(!deleteModal)}
                              className="uapp-modal"
                            >
                              <ModalBody>
                                <p>
                                  Are You Sure to Delete this{" "}
                                  <b>{localStorage.getItem("camppName")}</b>{" "}
                                  ? Once Deleted it can't be Undone!
                                </p>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  color="danger"
                                  onClick={() =>
                                    handleDeletePermission(
                                      localStorage.getItem("camppId")
                                    )
                                  }
                                >
                                  YES
                                </Button>
                                <Button onClick={() => setDeleteModal(false)}>
                                  NO
                                </Button>
                              </ModalFooter>
                            </Modal>

                              </ButtonGroup>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </Table>
            </div>
          }

          {/* <Pagination
            dataPerPage={dataPerPage}
            totalData={entity}
            paginate={paginate}
            currentPage={currentPage}
          /> */}

          </CardBody>
      </Card>

          
        </div>
    );
};

// export default CampusList;

const mapStateToProps = (state) => ({
  univerSityStateList: state.universityStateDataReducer.universityStates,
});
export default connect(mapStateToProps)(CampusList);