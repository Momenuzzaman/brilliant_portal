import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table, Form } from 'reactstrap';
import { useToasts } from "react-toast-notifications";
import get from '../../../helpers/get';
import post from '../../../helpers/post';
import remove from '../../../helpers/remove';
import put from '../../../helpers/put';

const Nationality = () => {

    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const {addToast} = useToasts();
    const [success,setSuccess] = useState(false);
    const [data,setData] = useState({});
    const [delData, setDelData] = useState({});


    const backToDashboard = () => {
        history.push('/');
    }

    useEffect(()=>{
        get('Nationality/Index')
        .then(res => {
            console.log(res);
            setCountryList(res);
        })
    },[success])

    // on Close Modal
   const closeModal = () => {
    setModalOpen(false);
 
  }

  const toggleDeleteModal = (data) => {

    setDelData(data);
    console.log(data);
    setDeleteModal(true);

  }


  const deleteConfirm = () => {
    remove(`Nationality/Delete/${delData?.id}`)
    .then(res => {
        addToast(res,{
            appearance: 'error',
            autoDismiss: true
        })
        setDelData({});
        setSuccess(!success);
        setDeleteModal(false);
    })
  }
 

    const AddModalOpen= () => {
  
      
      setModalOpen(true);

    }

    const handleAddCountry  = (e) => {
        e.preventDefault();
        const subdata = new FormData(e.target);

        if(data?.id){
            put('Nationality/Update',subdata)
            .then(res => {
               if(res?.status ==200){
                console.log(res?.data?.message);
                addToast(res?.data?.message,{
                    appearance: 'success',
                    autoDismiss: true
                })
                setData({});
               setSuccess(!success);
                setModalOpen(false);
               }
    
            })
        }
        else{
            post('Nationality/Create',subdata)
        .then(res => {
            if(res?.status == 200){
                console.log(res?.data?.message);
            addToast(res?.data?.message,{
                appearance: 'success',
                autoDismiss: true
            })
           setSuccess(!success);
            setModalOpen(false);
            }

        })
        }


    }

    const handleUpdateCountry = (data) => {
        setData(data);
        setModalOpen(true);
    }


    return (
        <div>
             <Card className="uapp-card-bg">
              <CardHeader className="page-header">
                <h3 className="text-light">Nationality List</h3>
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
       
            <Button className="btn btn-uapp-add" onClick={()=>AddModalOpen('add')} > <i className="fas fa-plus"></i>  Add New</Button>
                  <div> <b> Total <span className="badge badge-primary">{countryList.length} </span> Countries  Found </b></div>
            </CardHeader>
             <CardBody>

             <div>

<Modal isOpen={modalOpen} toggle={closeModal} className="uapp-modal">
  <ModalHeader>Add Nationality </ModalHeader>
  <ModalBody>
    <Form onSubmit={handleAddCountry} >
     
      <FormGroup row className="has-icon-left position-relative">
        <Col md="4">
          <span> Name</span>
        </Col>
        <Col md="8">

           
            {
                (data?.id) ?

                <input
                type='hidden'
                name='id'
                id='id'
                value={data?.id}
                />
                :
                null
            }

          <Input
            type="text"
            name="name"
            id="name"
            defaultValue={data?.name}
           
          
            placeholder="Enter Nationality"
          />

        </Col>
      </FormGroup>

     
     

      <FormGroup className="has-icon-left position-relative" style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Button color="danger" className="mr-1 mt-3" onClick={closeModal}>Close</Button>

   
          <Button.Ripple
            color="primary"
            type="submit"
            className="mr-1 mt-3"
           
          >
            Submit
          </Button.Ripple>

      

      </FormGroup>

    </Form>
  </ModalBody>

</Modal>
<div>

</div>
</div>


<div className="table-responsive">
          <Table className="table-sm table-bordered text-center" >
          <thead className="thead-uapp-bg">
              <tr style={{ textAlign: "center" }}>
                <th>SL/NO</th>
                <th> Name</th>
          
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                countryList.map((list,index) =><tr key={index}
                list ={list}
                >
                  
                  <td>{index+1}</td>
                  <td>{list?.name}</td>
              
                  <td>
                  <ButtonGroup variant="text">

                            {/* <Button  color="danger" onClick={()=>handleDelete(dept?.id)}   className="mr-2 btn-sm"><i className="fas fa-trash-alt"></i></Button> */}
                          
                         <Button className="btn-sm mx-2" onClick={()=>toggleDeleteModal(list)}  color="danger"><i className="fas fa-trash-alt"></i></Button>
                       
                      
                         <Button color="warning" onClick={()=> handleUpdateCountry(list)}    className=" btn-sm"> <i className="fas fa-edit"></i> </Button>
                       
                          
                          </ButtonGroup>

                  {/* modal for delete */}
                  <Modal isOpen={deleteModal}  className="uapp-modal">

                      <ModalBody>
                        <p>Are You Sure to Delete this ? Once Deleted it can't be Undone!</p>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" onClick={deleteConfirm} >YES</Button>
                        <Button >NO</Button>
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
    );
};

export default Nationality;