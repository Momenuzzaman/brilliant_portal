import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    ButtonGroup,
  
    Button,
  
    Input,
  
    Col,
    Row,
    Table,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import Select from "react-select";
  import Pagination from "../../SMS/Pagination/Pagination.jsx";
import { useHistory, useLocation } from "react-router";

import get from "../../../helpers/get.js";
import { rootUrl } from "../../../constants/constants.js";
import { useState } from 'react';

const ConsultantList = () => {

    const [consTypeLabel, setConsTypeLabel] = useState("Consultant type");
    const [consTypeValue, setConsTypeValue] = useState(0);
    const [accStatusLabel, setAccStatusLabel] = useState("Account status");
    const [accStatusValue, setAccStatusValue] = useState(0);

    const [entity, setEntity] = useState(0);
    const [callApi, setCallApi] = useState(false);
    const [serialNum, setSerialNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(15);
    const [searchStr, setSearchStr] = useState("");

    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [uniStateLabel, setUniStateLabel] = useState("State");
    // const [unistateValue, setUniStateValue] = useState(0);
    // const [providerLabel, setProviderLabel] = useState("Provider");
    // const [providerValue, setProviderValue] = useState(0);

    const history = useHistory();


    const selectConsType = (label, value) => {
        setConsTypeLabel(label);
        setConsTypeValue(value);
        handleSearch();
      };

      const searchValue = (e) => {
        setSearchStr(e.target.value);
        handleSearch();
      };

    // search handler
     const handleSearch = () => {
       setCurrentPage(1);
       setCallApi((prev) => !prev);
     };

     // user select data per page
     const dataSizeArr = [10, 15, 20, 30, 50, 100, 1000];
     const dataSizeName = dataSizeArr.map((dsn) => ({ label: dsn, value: dsn }));

     const selectDataSize = (value) => {
        setLoading(true);
        setDataPerPage(value);
        setCallApi((prev) => !prev);
      };

    // toggle dropdown
       const toggle = () => {
       setDropdownOpen((prev) => !prev);
    };

    // on clear
     const handleClearSearch = () => {
        setConsTypeLabel("Consultant type...");
        setConsTypeValue(0);
        setAccStatusLabel("Account status...");
        setAccStatusValue(0);
        setSearchStr("");
        setCallApi((prev) => !prev);
     };

    //  change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      setCallApi((prev) => !prev);
    };

    // on enter press
     const handleKeyDown = (event) => {
       if (event.key === "Enter") {
         setCurrentPage(1);
         setCallApi((prev) => !prev);
       }
     };

    // redirect to dashboard
    const backToDashboard = () => {
      history.push("/");
    };

    return (
        <div>
             <Card className="uapp-card-bg">
                <CardHeader className="page-header">
                  <h3 className="text-light">Consultant list</h3>
                  <div className="page-header-back-to-home">
                    <span onClick={backToDashboard} className="text-light">
                      {" "}
                      <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                    </span>
                  </div>
                </CardHeader>
            </Card>

            {/* filter starts here */}
        <Card className="uapp-employee-search">
            <CardBody className="search-card-body">
              <Row>
                <Col lg="4" md="4" sm="6" xs="6">
                  <Select
                    // options={universityTypeName}
                    value={{ label: consTypeLabel, value: consTypeValue }}
                    // onChange={(opt) => selectUniType(opt.label, opt.value)}
                    name="UniversityTypeId"
                    id="UniversityTypeId"
                  />
                </Col>

                <Col lg="4" md="4" sm="6" xs="6">
                  <Select
                    // options={universityCountryName}
                    value={{ label: accStatusLabel, value: accStatusValue }}
                    // onChange={(opt) => selectUniCountry(opt.label, opt.value)}
                    name="UniversityCountryId"
                    id="UniversityCountryId"
                  />
                </Col>

                <Col lg="4" md="4" sm="6" xs="6">
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
                </Col>

                {/* <Col lg="3" md="3" sm="6" xs="6">
                  <div className="uapp-Search-div">
                    <span>Reset</span>

                  </div>
                </Col> */}
              </Row>

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
            {/* filter starts here */}

    <Card className="uapp-employee-search">
        <CardBody>
          <Row className="mb-3">
            <Col lg="6" md="5" sm="6" xs="4">
              <Link to='/addConsultant'>
                <Button
                  // onClick={handleAddUniversity}
                  className="btn btn-uapp-add "
                >
                  {" "}
                  <i className="fas fa-plus"></i> Add New{" "}
                </Button>
              </Link>
            </Col>

            <Col lg="6" md="7" sm="6" xs="8">
              <Row>
                <Col lg="5" md="6"></Col>
                <Col lg="2" md="3" sm="5" xs="5" className="mt-2">
                  Showing
                </Col>
                <Col md="3" sm="7" xs="7">
                  <Select
                    options={dataSizeName}
                    value={{ label: dataPerPage, value: dataPerPage }}
                    onChange={(opt) => selectDataSize(opt.value)}
                  />
                </Col>
                <Col lg="2">
                  <Dropdown
                    className="uapp-dropdown"
                    style={{ float: "right" }}
                    isOpen={dropdownOpen}
                    toggle={toggle}
                  >
                    <DropdownToggle caret>
                      <i className="fas fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Export All</DropdownItem>
                      {/* <DropdownItem divider /> */}
                      <DropdownItem>Export Excel</DropdownItem>
                      <DropdownItem>Export PDF</DropdownItem>
                      <DropdownItem>Export CSV</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* {loading ? (
            <h2 className="text-center">Loading...</h2>
          ) : ( */}
            <div className="table-responsive">
              <Table className="table-sm table-bordered">
                <thead className="thead-uapp-bg">
                  <tr style={{ textAlign: "center" }}>
                    <th>SL/NO</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Account status</th>
                    <th>Email</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {universityList?.map((university, i) => (
                    <tr key={university.id} style={{ textAlign: "center" }}>
                      <td>{serialNum + i}</td>
                      <td>
                        {" "}
                        <img
                          className="Uapp-c-image"
                          src={`${rootUrl}/${university.universityLogo.fileUrl?.slice(
                            2,
                            university.universityLogo.fileUrl.length
                          )}`}
                        />{" "}
                      </td>
                      <td>
                        {university?.name} ({university?.shortName})
                      </td>
                      <td>{university?.universityType?.name}</td>
                      <td>
                        {university?.universityCountry?.name} (
                        {university?.universityState?.name})
                      </td>
                 
                      <td>
                        <span onClick={()=>redirectToCampusList(university?.id)}
                          className="badge badge-secondary"
                          style={{ cursor: "pointer" }}
                        >
                          {university?.totalCampus}
                        </span>
                      </td>
                    
                      <td>
                        {" "}
                        <span
                          className="badge badge-primary"
                          style={{ cursor: "pointer" }}
                        >
                          50
                        </span>{" "}
                      </td>
                      <td>
                        {" "}
                        <span
                          className="badge badge-warning"
                          style={{ cursor: "pointer" }}
                        >
                          50
                        </span>{" "}
                      </td>
                      <td style={{ width: "8%" }} className="text-center">
                        <ButtonGroup variant="text">
                        <Link to= {`/universityDetails/${university?.id}`}>
                          <Button color="primary" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-eye"></i>{" "}
                          </Button>
                          </Link>
                          <Button color="dark" className="mx-1 btn-sm">
                            {" "}
                            <i className="fas fa-edit"></i>{" "}
                          </Button>
                          <Button color="danger" className="mx-1 btn-sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </Table>
            </div>
        {/* //   )} */}

          <Pagination
            dataPerPage={dataPerPage}
            totalData={entity}
            paginate={paginate}
            currentPage={currentPage}
          />
        </CardBody>
    </Card>


        </div>
    );
};

export default ConsultantList;