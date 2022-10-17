import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Col,
  Row,
  Table,
  Dropdown,
  Form,
  FormGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Select from "react-select";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Pagination from "../../SMS/Pagination/Pagination.jsx";
import get from "../../../helpers/get";
import remove from "../../../helpers/remove.js";
import ButtonForFunction from "../Components/ButtonForFunction";
import LinkButton from "../Components/LinkButton.js";
import ReactTableConvertToXl from "../ReactTableConvertToXl/ReactTableConvertToXl";
import * as XLSX from "xlsx/xlsx.mjs";
import ReactToPrint from "react-to-print";
import LinkSpanButton from "../Components/LinkSpanButton.js";
import CommonFilter from "./CommonFilter.js";
import ConsultantFilter from "./ConsultantFilter.js";
import StudentFilter from "./StudentFilter.js";
import AdmissionManagerFilter from "./AdmissionManagerFilter.js";
import ProviderAdminFilter from "./ProviderAdminFilter.js";
import { userTypes } from "../../../constants/userTypeConstant.js";
import Loader from "../Search/Loader/Loader.js";
import ApplicationsCommon from "./ApplicationsCommon.js";
import ConsultantApplication from "./ConsultantApplication.js";
import StudentApplication from "./StudentApplication.js";

const Applications = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    get("Account/GetCurrentUserId").then((res) => {
      setCurrentUser(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
         {
           parseInt(localStorage.getItem("userType")) === userTypes?.Consultant ?
           <ConsultantApplication currentUser={currentUser} />
           :
           parseInt(localStorage.getItem("userType")) === userTypes?.Student ?
           <StudentApplication 
           currentUser={currentUser} />
           :
           <ApplicationsCommon />
         }
        </>
        
      )}
    </div>
  );
};

export default Applications;
