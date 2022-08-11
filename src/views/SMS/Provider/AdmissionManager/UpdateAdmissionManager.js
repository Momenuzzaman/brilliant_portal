import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormGroup, Input } from 'reactstrap';
import get from '../../../../helpers/get';
import post from '../../../../helpers/post';
import Select from "react-select";
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import put from '../../../../helpers/put';

const UpdateAdmissionManager = () => {

    const {id,id2} = useParams();

    console.log('one',id,'two',id2);
    const history = useHistory();

    const [country,setCountry] = useState([]);
    const [state, setState] = useState([]);
    const  [countryLabel, setCountryLabel] = useState('Select country');
    const  [countryValue, setCountryValue] = useState(0);
    const  [stateLabel, setStateLabel] = useState('Select state');
    const  [stateValue, setStateValue] = useState(0);
    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const {addToast} = useToasts();
    const [data,setData] = useState({});

    const [title,setTitle] = useState([]);
    const [titleLabel,setTitleLabel] = useState('Select');
    const [titleValue,setTitleValue] = useState(0);
    const [titleError,setTitleError] = useState(false);
    

    console.log('checking id for upadating admission Manager',id);

    useEffect(()=>{
        
        get(`Country/Index`)
        .then( res=> {
            // console.log('Country list', res);
            setCountry(res);
        })

        get(`AdmissionManager/Get/${id}`)
        .then(res => {
            console.log('Ad Manager',res);
            setData(res);
            setTitleLabel(res?.nameTittle?.name);
            setTitleValue(res?.nameTittle?.id);
            setCountryLabel(res?.country?.name);
            setCountryValue(res?.country.id);
            setStateLabel(res?.state?.name);
            setStateValue(res?.state.id);
        })

        get('NameTittle/GetAll')
        .then(res => {
          console.log('title',res);
          setTitle(res);
        })

    },[])


    const nameTitle = title?.map((singleTitle) => ({
      label: singleTitle.name,
      value: singleTitle.id,
    }));


             // select  Title
const selectTitle = (label, value) => {

  setTitleError(false);
  setTitleLabel(label);
  setTitleValue(value);
  
 
 
}


    const backToProviderDetails = () => {
        history.push(`/providerDetails/${id2}`);
      }


      const countryName = country?.map((branchCountry) => ({
        label: branchCountry.name,
        value: branchCountry.id,
      }));

      const selectCountry = (label, value) => {
        setCountryLabel(label);
        setCountryValue(value);
        searchStateByCountry(value);
        setStateLabel('Select');
    
       
       
      }

      
    const searchStateByCountry = (countryValue) => {
        get(`State/GetbyCountryId/${countryValue}`)
        .then(res => {
          console.log('State',res);
          setState(res);
        })
      }

      const stateName = state?.map((branchState) => ({
        label: branchState.name,
        value: branchState.id,
      }));

      const selectState = (label, value) => {
        setStateLabel(label);
        setStateValue(value);
       
    
      };


      const handleSubmit  = (event) => {
        event.preventDefault();
        const subData = new FormData(event.target);

        put(`AdmissionManager/Update`,subData)
        .then(res =>{
          if(res?.status == 200){
            addToast(res?.data?.message,{
              appearance: 'success',
              autoDismiss: true
            })
            history.push(`/providerDetails/${id2}`);

          }
        })


      }

    return (
        <div>

<Card className="uapp-card-bg">
        <CardHeader className="page-header">
          <h3 className="text-light">Update Admission Manager</h3>
          <div className="page-header-back-to-home">
            <span className="text-light" onClick={backToProviderDetails}>
              {" "}
              <i className="fas fa-arrow-circle-left"></i> Back to Provider Details
            </span>
          </div>
        </CardHeader>
      </Card>

      <Card>
         
          <CardBody>
      <form onSubmit={handleSubmit}>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Title</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                    <Select
                      options={nameTitle}
                      value={{ label: titleLabel, value: titleValue }}
                      onChange={(opt) => selectTitle(opt.label, opt.value)}
                      name="nameTittleId"
                      id="nameTittleId"
                      required

                    />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">First Name</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter first name"
                        defaultValue={data?.firstName}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Last Name</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter last name"
                      defaultValue={data?.lastName}
                        required
                      />

                    </Col>
                  </FormGroup>

               

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">email</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        value={data?.email}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Phone Number</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phonenumber"
                        placeholder="Enter phone number"
                       defaultValue={data?.phoneNumber}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Post Code</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="postCode"
                        id="postCode"
                        placeholder="Enter post code"
                       defaultValue={data?.postCode}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">City</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                       defaultValue={data?.city}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                 
                      <span className="pl-2">Sequence Id</span>
                    </Col>

                   
                    
                    
                    <Col md="10" lg="4">
                      <Input
                        type="text"
                        name="sequenceId"
                        id="sequenceId"
                        placeholder="Enter sqquence id"
                        defaultValue={data?.sequenceId}
                        required
                      />

                    </Col>
                  </FormGroup>

                  <FormGroup row >
                  <Col md="2">
                    <span className='pl-2'>
                       Country
                    </span>
                  </Col>
                  <Col md="10" lg="4">
                    <Select
                      options={countryName}
                      value={{ label: countryLabel, value: countryValue }}
                      onChange={(opt) => selectCountry(opt.label, opt.value)}
                      name="countryId"
                      id="countryId"
                      required

                    />

                   

                
                  </Col>
                </FormGroup>

                <FormGroup row className="has-icon-left position-relative">
                  <Col md="2">
                    <span className='pl-2'>
                       State
                    </span>
                  </Col>
                  <Col md="4">
                    <Select
                      options={stateName}
                      value={{ label: stateLabel, value: stateValue }}
                      onChange={(opt) => selectState(opt.label, opt.value)}
                      name="stateId"
                      id="stateId"
                      required
                    />
                      
                 
                  </Col>
                </FormGroup>

             
   
                      <Input
                        type="hidden"
                        name="providerId"
                        id="providerId"
                        value={id2}
                      
                        required
                      />
                      <Input
                        type="hidden"
                        name="id"
                        id="id"
                        value={id}
                      
                        required
                      />

           
                  <FormGroup row>
                    <Col md='6'>
                   <div className='d-flex justify-content-end'>
                   <Button.Ripple
                        type="submit"
                        className="mr-1 mt-3 badge-primary"
                     
                      >
                        Submit
                      </Button.Ripple>
                   </div>
                    
                    </Col>



                  </FormGroup>

                  

              </form>
              </CardBody>
              </Card>
            
        </div>
    );
};

export default UpdateAdmissionManager;