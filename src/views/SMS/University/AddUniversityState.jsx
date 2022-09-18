import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  InputGroup,
  Table,
} from "reactstrap";
import { connect, useDispatch } from "react-redux";
import Select from "react-select";
import { useHistory } from "react-router";

import { useToasts } from "react-toast-notifications";
import { StoreUniversityStateData } from "../../../redux/actions/SMS/UniversityAction/UniversityStateAction";
import get from "../../../helpers/get";
import post from "../../../helpers/post";
import remove from "../../../helpers/remove";
import put from "../../../helpers/put";
import ButtonForFunction from "../Components/ButtonForFunction";
import { permissionList } from "../../../constants/AuthorizationConstant";

const AddUniversityState = () => {
  const [universityDetailsList, setUniversityDetailsList] = useState([]);
  const [universityState, setUniversityState] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [countryLabel, setCountryLabel] = useState("Select Country");
  const [countryValue, setCountryValue] = useState(0);
  const [success, setSuccess] = useState(false);
  const [countryNameError, setCountryNameError] = useState(false);
  const [uniStateError, setUniStateError] = useState(false);

  const [delUniStateId, setDelUniStateId] = useState(0);
  const [delUniStateName, setDelUniStateName] = useState("");

  const [updateUniState, setUpdateUniState] = useState(undefined);

  const { addToast } = useToasts();

  const history = useHistory();
  const dispatch = useDispatch();

  const permissions= JSON.parse(localStorage.getItem('permissions'));

  useEffect(() => {
    const returnValue = get(`UniversityState/Index`).then((action) => {
      setUniversityDetailsList(action);
      dispatch(StoreUniversityStateData(action));
    });
  }, [success]);

  useEffect(() => {
    const returnValue = get(`UniversityCountryDD/Index`).then((action) => {
      setCountryList(action);
    });
  }, []);

  const selectCountryName = (label, value) => {
    setCountryLabel(label);
    setCountryValue(value);
    setCountryNameError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subdata = {
      name: universityState,
      universityCountryId: countryValue,
    };

    if (countryValue === 0) {
      setCountryNameError(true);
    }
    if (universityState === "") {
      setUniStateError(true);
    } else {
      const returnValue = post(`UniversityState/Create`, subdata).then(
        (action) => {
          setSuccess(!success);
          setModalOpen(false);
          addToast(action?.data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
          setCountryLabel("Select Country");
          setCountryValue(0);
          setUniversityState("");
        }
      );
    }
  };

  // on Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setCountryLabel("Select Country");
    setCountryValue(0);
    setUniversityState("");
    setUpdateUniState(undefined);
  };

  // delete button click
  const toggleDanger = (uniDetails) => {
    setDelUniStateName(uniDetails?.name);
    setDelUniStateId(uniDetails?.id);
    setDeleteModal(true);
  };

  // on Close Delete Modal
  const closeDeleteModal = () => {
    setDeleteModal(false);
    setDelUniStateName('');
    setDelUniStateId(0);
  };

  // confirm delete
  const handleDeleteUniState = (id) => {
    const returnValue = remove(`UniversityState/Delete/${id}`).then(
      (action) => {
        setDeleteModal(false);
        setSuccess(!success);
        addToast(action, {
          appearance: "error",
          autoDismiss: true,
        });
        setDelUniStateName('');
        setDelUniStateId(0);
      }
    );
  };

  // update state
  const handleUpdate = (uniDetails) => {
    setModalOpen(true);
    setUniversityState(uniDetails.name);
    setCountryLabel(uniDetails.country.name);
    setCountryValue(uniDetails.country.id);
    setUpdateUniState(uniDetails?.id);
  };

  // update submit
  const handleUpdateSubmit = () => {
    const id = updateUniState;

    const subData = {
      id: id,
      name: universityState,
      universityCountryId: countryValue,
    };

    const returnvalue = put(`UniversityState/Update`, subData).then(
      (action) => {
        setSuccess(!success);
        setModalOpen(false);
        addToast(action?.data?.message, {
          appearance: "success",
          autoDismiss: true,
        });
        setUniversityState("");
        setCountryLabel("Select Country");
        setCountryValue(0);
        setUpdateUniState(undefined);
      }
    );
  };

  const countryName = countryList?.map((country) => ({
    label: country.name,
    value: country.id,
  }));

  // redirect to dashboard
  const backToDashboard = () => {
    history.push("/");
  };

  return (
    <div>
      <Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">University States</h3>
          <div className="page-header-back-to-home">
            <span onClick={backToDashboard} className="text-light">
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          {
            permissions?.includes(permissionList?.Add_Universitystate) ?
            <ButtonForFunction
            className={"btn btn-uapp-add"}
            func={() => setModalOpen(true)}
            icon={<i className="fas fa-plus"></i>}
            name={" Add New State"}
           
          />
          :
          null
          }

          <div>
            {" "}
            <b>
              {" "}
              Total{" "}
              <span className="badge badge-primary">
                {" "}
                {universityDetailsList?.length}{" "}
              </span>{" "}
              University State Found{" "}
            </b>
          </div>
        </CardHeader>

        <CardBody>
          <div>
            <Modal
              isOpen={modalOpen}
              toggle={closeModal}
              className="uapp-modal"
            >
              <ModalHeader>Add University State</ModalHeader>

              <ModalBody>
                <Form>
                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        University State <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={universityState}
                        placeholder="Enter University State"
                        onChange={(e) => {
                          setUniversityState(e.target.value);
                          setUniStateError(false);
                        }}
                      />
                      {uniStateError ? (
                        <span className="text-danger">
                          University state name is required
                        </span>
                      ) : null}
                    </Col>
                  </FormGroup>

                  <FormGroup row className="has-icon-left position-relative">
                    <Col md="4">
                      <span>
                        University Country{" "}
                        <span className="text-danger">*</span>{" "}
                      </span>
                    </Col>
                    <Col md="8">
                      <Select
                        options={countryName}
                        value={{ label: countryLabel, value: countryValue }}
                        onChange={(opt) =>
                          selectCountryName(opt.label, opt.value)
                        }
                        name="country"
                        id="country"
                      />
                      {countryNameError ? (
                        <span className="text-danger">
                          Country name must be selected
                        </span>
                      ) : null}
                    </Col>
                  </FormGroup>

                  <FormGroup
                    className="has-icon-left position-relative"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Button
                      color="danger"
                      className="mr-2 mt-3"
                      onClick={closeModal}
                    >
                      Close
                    </Button>
                    {updateUniState != undefined ? (
                      <Button
                        color="primary"
                        className="mr-1 mt-3"
                        onClick={handleUpdateSubmit}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button.Ripple
                        color="primary"
                        type="submit"
                        className="mr-1 mt-3"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit
                      </Button.Ripple>
                    )}
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>

          <div className="table-responsive">
            <Table className="table-sm table-bordered">
              <thead className="thead-uapp-bg">
                <tr style={{ textAlign: "center" }}>
                  <th>SL/NO</th>
                  <th>State</th>
                  <th className="text-center">Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {universityDetailsList?.map((uniDetails, i) => (
                  <tr key={uniDetails.id} style={{ textAlign: "center" }}>
                    <th scope="row">{i + 1}</th>
                    <td>{uniDetails.name}</td>
                    <td>{uniDetails.country.name}</td>
                    <td>
                      {/* <Button onClick={() => toggleDanger(uniDetails)} className="mx-1 btn-sm" color="danger"><i className="fas fa-trash-alt"></i></Button> */}

                    {
                        permissions?.includes(permissionList?.Delete_Universitystate) ?
                        <ButtonForFunction
                        func={() => toggleDanger(uniDetails)}
                        className={"mx-1 btn-sm"}
                        color={"danger"}
                        icon={<i className="fas fa-trash-alt"></i>}
                        permission={6}
                      />
                      :
                      null
                    }

                      {/* <Button onClick={()=> handleUpdate(uniDetails)} className="mx-1 btn-sm" color="warning"><i className="fas fa-edit"></i></Button> */}

                      {
                        permissions?.includes(permissionList?.Update_Universitystate) ?
                        <ButtonForFunction
                        func={() => handleUpdate(uniDetails)}
                        className={"mx-1 btn-sm"}
                        color={"warning"}
                        icon={<i className="fas fa-edit"></i>}
                        permission={6}
                      />
                      :
                      null
                      }

                      <Modal
                        isOpen={deleteModal}
                        toggle={closeDeleteModal}
                        className="uapp-modal"
                      >
                        <ModalBody>
                          <p>
                            Are You Sure to Delete this{" "}
                            <b>{delUniStateName}</b> ? Once
                            Deleted it can't be Undone!
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            color="danger"
                            onClick={() =>
                              handleDeleteUniState(delUniStateId)
                            }
                          >
                            YES
                          </Button>
                          <Button color="primary" onClick={closeDeleteModal}>NO</Button>
                        </ModalFooter>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(AddUniversityState);
