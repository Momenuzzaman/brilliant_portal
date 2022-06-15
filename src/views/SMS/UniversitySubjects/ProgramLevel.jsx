import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { Card, CardBody, CardHeader, CardTitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, Table } from 'reactstrap';
import { useToasts } from "react-toast-notifications";
import { useDispatch } from 'react-redux';
import {StoreProgramLevelData} from '../../../redux/actions/SMS/UniversitySubject/ProgramLevelAction';
import post from '../../../helpers/post';
import get from '../../../helpers/get';
import remove from '../../../helpers/remove';
import put from '../../../helpers/put';

const ProgramLevel=(props)=>{
    const programLevelList = props.allprogramLevelList[0];
    const history = useHistory();
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const {addToast} = useToasts();
    const [programLevel,setProgramLevel] = useState('');
    const [programValue,setProgramValue] = useState(0);
    const [description,setDescription] = useState('');
    
     // redirect to dashboard
     const backToDashboard = () => {
        history.push("/")
    }

// on Close Modal
const closeModal = () => {
    setModalOpen(false);
    localStorage.removeItem('ProgramId');
    setProgramLevel('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const subdata = {
      name: programLevel,
      description:description
    }
      const returnValue = post(`ProgramLevel/Create`,subdata).then((action)=>{
          setSuccess(!success)
          setModalOpen(false)
          addToast(action?.data?.message, {
            appearance: action?.data?.message === 'ProgramLevel added successfully.' ? 'success': 'error',
            autoDismiss: true,
          })
          setProgramLevel('');
          setDescription('');
      });
  }

  useEffect(()=> {
    const returnValue = get(`ProgramLevel/Index`).then((action)=>{
    
        dispatch(StoreProgramLevelData(action))
      });
  },[success])

  
const handleUpdate = (type) => {
    setModalOpen(true);
    setProgramLevel(type.name);
    setDescription(type.description);
    localStorage.setItem('ProgramId',type.id)   
  }

  const toggleDanger = (name,id) => {
    localStorage.setItem('ProgramName',name)
    localStorage.setItem('ProgramId',id)
    setDeleteModal(true)
   }
   // on Close Delete Modal
const closeDeleteModal = () => {
    setDeleteModal(false);
    localStorage.removeItem('ProgramName')
   localStorage.removeItem('ProgramId')
  
  }

  const handleDeleteUniType = (id) => {
    const returnValue = remove(`ProgramLevel/Delete/${id}`).then((action)=> {
      setDeleteModal(false);
      setSuccess(!success);
      console.log(action);
       addToast(action, {
         appearance:  'error',
         autoDismiss: true,
       })
       localStorage.removeItem('ProgramName')
       localStorage.removeItem('ProgramId')
    })
  }

  const handleUpdateSubmit = () => {
    const id = localStorage.getItem('ProgramId');
    const subData = {
      id: id,
      name: programLevel,
      description:description
    }
   const returnvalue = put(`ProgramLevel/Update`,subData).then((action)=> {
      setSuccess(!success);
      setModalOpen(false)
      addToast(action?.data?.message, {
        appearance: 'success',
        autoDismiss: true,
      })
      setProgramLevel('');
      setDescription('');
     localStorage.removeItem('ProgramName')
     localStorage.removeItem('ProgramId')
  
    })
  
  
  }
const AddModalOpen= () => {
    setModalOpen(true);
    setProgramLevel('');
    setDescription('');
    localStorage.removeItem('ProgramId')
}

return (
    <div>
        <Card className="uapp-card-bg">
          <CardHeader className="page-header">             
             <h3 className="text-light">Program Level List</h3>
              <div className="page-header-back-to-home">
                 <span onClick={backToDashboard} className="text-light"> <i className="fas fa-arrow-circle-left"></i> Back to Dashboard</span>
              </div>             
          </CardHeader>      
        </Card>


    <Card>
        <CardHeader>
   
        <Button className="btn btn-uapp-add" onClick={AddModalOpen}> <i className="fas fa-plus"></i>  Add New</Button>
              <div> <b> Total <span className="badge badge-primary"> {programLevelList?.length}</span> Program Level  Found </b></div>
        </CardHeader>
         <CardBody>

         <div>

<Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">
<ModalHeader>Add ProgramLevel </ModalHeader>
<ModalBody>
<Form>
  <FormGroup row className="has-icon-left position-relative">
    <Col md="4">
      <span>ProgramLevel Name</span>
    </Col>
    <Col md="8">
      <Input
        type="text"
        name="name"
        id="name"
        value={programLevel}
        onChange={(e) => setProgramLevel(e.target.value)}
        placeholder="Create Program Level"
      />

    </Col>
  </FormGroup>
  <FormGroup row className="has-icon-left position-relative">
                                    <Col md="4">
                                    <span>University Description</span>
                                    </Col>
                                    <Col md="8">

                     <Input
                     type="textarea"
                    name="Description"
                    id="Description"
                    rows="3"
                    value={description}
                    placeholder="Description"
                     onChange={e => setDescription(e.target.value)}
                  />

             </Col>
      </FormGroup>

      <FormGroup row className="has-icon-left position-relative">
    <Col md="4">
      <span>Level Value</span>
    </Col>
    <Col md="8">
      <Input
        type="number"
        name="levelValue"
        id="levelValue"
        value={0}
        onChange={(e) => setProgramValue(e.target.value)}
       
      />

    </Col>
  </FormGroup>

  <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

    <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

    {
    localStorage.getItem("ProgramId") ?
      <Button color="warning" onClick={handleUpdateSubmit}  className="mr-1 mt-3">Update</Button> :
      <Button.Ripple
        color="primary"
        type="submit"
        className="mr-1 mt-3"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button.Ripple>

  }

  </FormGroup>

</Form>
</ModalBody>

</Modal>
<div>

</div>
</div>


<div className="table-responsive">
      <Table className="table-sm table-bordered">
      <thead className="thead-uapp-bg">
          <tr style={{ textAlign: "center" }}>
            <th>SL/NO</th>
            <th>ProgramLevel Name</th>
            <th>Description</th>            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            programLevelList?.map(( program, i) => <tr key={ program.id} style={{ textAlign: "center" }}>
              <th scope="row">{i + 1}</th>
              <td>{ program.name}</td>
              <td>{ program.description}</td>
              <td>
                <Button className="mx-1 btn-sm" onClick={() => toggleDanger( program.name,  program.id)} color="danger"><i className="fas fa-trash-alt"></i></Button>
                <Button onClick={()=> handleUpdate( program)} className="mx-1 btn-sm" color="warning"><i className="fas fa-edit"></i></Button>


                <Modal isOpen={deleteModal} toggle={closeDeleteModal} className="uapp-modal">

                  <ModalBody>
                    <p>Are You Sure to Delete this <b>{localStorage.getItem('ProgramName')}</b> ? Once Deleted it can't be Undone!</p>
                  </ModalBody>

                  <ModalFooter>
                    <Button color="danger" onClick={() => handleDeleteUniType(localStorage.getItem('ProgramId'))}>YES</Button>
                    <Button onClick={closeDeleteModal}>NO</Button>
                  </ModalFooter>

                </Modal>
              </td>
            </tr>)
          }

        </tbody>
      </Table>
      </div>

     </CardBody>
  </Card>
    </div>
)
}

const mapStateToProps = state => ({

    allprogramLevelList: state.programLevelDataReducer.programLevelList
  
})
export default connect(mapStateToProps)(ProgramLevel);