import React from "react"
import {
  
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import axios from "axios"
import * as Icon from "react-feather"

import { useAuth0 } from "../../../authServices/auth0/auth0Service"
import { history } from "../../../history"
import { studentLogOutJwtAction } from "../../../redux/actions/SMS/AuthAction/AuthAction"
import { useDispatch } from "react-redux"

const handleNavigation = (e, path) => {
  e.preventDefault()
  history.push(path)
}

const UserDropdown = props => {
  const dispatch = useDispatch();

  const { logout, isAuthenticated } = useAuth0()

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push("/");
    window.location.reload();
    // return dispatch => {
    //   dispatch({ type: "LOGOUT_WITH_JWT", payload: {} })
    // }
    dispatch(studentLogOutJwtAction({}))
  }
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/profile")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/email/inbox")}
      >
        <Icon.Mail size={14} className="mr-50" />
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/todo/all")}
      >
        <Icon.CheckSquare size={14} className="mr-50" />
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/chat")}
      >
        <Icon.MessageSquare size={14} className="mr-50" />
        <span className="align-middle">Chats</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#" onClick={e => handleNavigation(e, "/ecommerce/wishlist")}>
        <Icon.Heart size={14} className="mr-50" />
        <span className="align-middle">WishList</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag="a"
        
        onClick={e => {
          handleLogOut(e)
          // return props.logoutWithJWT()
          // if (isAuthenticated) {
          //   return logout({
          //     returnTo: window.location.origin + process.env.REACT_APP_PUBLIC_PATH
          //   })
          // } else {
          //   const provider = props.loggedInWith
          //   if (provider !== null) {
          //     if (provider === "jwt") {
          //       return props.logoutWithJWT()
          //     }
          //     if (provider === "firebase") {
          //       return props.logoutWithFirebase()
          //     }
          //   } else {
          //     history.push("/pages/login")
          //   }
          // }

        }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    langDropdown: false,
    suggestions: []
  }

  // componentDidMount() {
  //   axios.get("/api/main-search/data").then(({ data }) => {
  //     this.setState({ suggestions: data.searchResult })
  //   })
  // }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }


  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown })

  render() {
    
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
     

        {/*<NavItem className="nav-search" onClick={this.handleNavbarSearch}>*/}
        {/*  <NavLink className="nav-link-search">*/}
        {/*    <Icon.Search size={21} data-tour="search" />*/}
        {/*  </NavLink>*/}
        {/*  <div*/}
        {/*    className={classnames("search-input", {*/}
        {/*      open: this.state.navbarSearch,*/}
        {/*      "d-none": this.state.navbarSearch === false*/}
        {/*    })}*/}
        {/*  >*/}
        {/*    <div className="search-input-icon">*/}
        {/*      <Icon.Search size={17} className="primary" />*/}
        {/*    </div>*/}
        {/*    <Autocomplete*/}
        {/*      className="form-control"*/}
        {/*      suggestions={this.state.suggestions}*/}
        {/*      filterKey="title"*/}
        {/*      filterHeaderKey="groupTitle"*/}
        {/*      grouped={true}*/}
        {/*      placeholder="Type anything..."*/}
        {/*      autoFocus={true}*/}
        {/*      clearInput={this.state.navbarSearch}*/}
        {/*      externalClick={e => {*/}
        {/*        this.setState({ navbarSearch : false })*/}
        {/*      }}*/}
        {/*      onKeyDown={e => {*/}
        {/*        if (e.keyCode === 27 || e.keyCode === 13) {*/}
        {/*          this.setState({*/}
        {/*            navbarSearch: false*/}
        {/*          })*/}
        {/*          this.props.handleAppOverlay("")*/}
        {/*        }*/}
        {/*      }}*/}
        {/*      customRender={(*/}
        {/*        item,*/}
        {/*        i,*/}
        {/*        filteredData,*/}
        {/*        activeSuggestion,*/}
        {/*        onSuggestionItemClick,*/}
        {/*        onSuggestionItemHover*/}
        {/*      ) => {*/}
        {/*        const IconTag = Icon[item.icon ? item.icon : "X"]*/}
        {/*        return (*/}
        {/*          <li*/}
        {/*            className={classnames("suggestion-item", {*/}
        {/*              active: filteredData.indexOf(item) === activeSuggestion*/}
        {/*            })}*/}
        {/*            key={i}*/}
        {/*            onClick={e => onSuggestionItemClick(item.link, e)}*/}
        {/*            onMouseEnter={() =>*/}
        {/*              onSuggestionItemHover(filteredData.indexOf(item))*/}
        {/*            }*/}
        {/*          >*/}
        {/*            <div*/}
        {/*              className={classnames({*/}
        {/*                "d-flex justify-content-between align-items-center":*/}
        {/*                  item.file || item.img*/}
        {/*              })}*/}
        {/*            >*/}
        {/*              <div className="item-container d-flex">*/}
        {/*                {item.icon ? (*/}
        {/*                  <IconTag size={17} />*/}
        {/*                ) : item.file ? (*/}
        {/*                  <img*/}
        {/*                    src={item.file}*/}
        {/*                    height="36"*/}
        {/*                    width="28"*/}
        {/*                    alt={item.title}*/}
        {/*                  />*/}
        {/*                ) : item.img ? (*/}
        {/*                  <img*/}
        {/*                    className="rounded-circle mt-25"*/}
        {/*                    src={item.img}*/}
        {/*                    height="28"*/}
        {/*                    width="28"*/}
        {/*                    alt={item.title}*/}
        {/*                  />*/}
        {/*                ) : null}*/}
        {/*                <div className="item-info ml-1">*/}
        {/*                  <p className="align-middle mb-0">{item.title}</p>*/}
        {/*                  {item.by || item.email ? (*/}
        {/*                    <small className="text-muted">*/}
        {/*                      {item.by*/}
        {/*                        ? item.by*/}
        {/*                        : item.email*/}
        {/*                        ? item.email*/}
        {/*                        : null}*/}
        {/*                    </small>*/}
        {/*                  ) : null}*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              {item.size || item.date ? (*/}
        {/*                <div className="meta-container">*/}
        {/*                  <small className="text-muted">*/}
        {/*                    {item.size*/}
        {/*                      ? item.size*/}
        {/*                      : item.date*/}
        {/*                      ? item.date*/}
        {/*                      : null}*/}
        {/*                  </small>*/}
        {/*                </div>*/}
        {/*              ) : null}*/}
        {/*            </div>*/}
        {/*          </li>*/}
        {/*        )*/}
        {/*      }}*/}
        {/*      onSuggestionsShown={userInput => {*/}
        {/*        if (this.state.navbarSearch) {*/}
        {/*          this.props.handleAppOverlay(userInput)*/}
        {/*        }*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <div className="search-input-close">*/}
        {/*      <Icon.X*/}
        {/*        size={24}*/}
        {/*        onClick={(e) => {*/}
        {/*          e.stopPropagation()*/}
        {/*          this.setState({*/}
        {/*            navbarSearch: false*/}
        {/*          })*/}
        {/*          this.props.handleAppOverlay("")*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</NavItem>*/}


       


        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            {/*<Icon.MessageSquare size={21} />*/}
            <i className="far fa-bookmark fa-20px"></i>
            <Badge pill color="primary" className="badge-up">
              {" "}
              15{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false
              }}
            >
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.PlusSquare
                      className="font-medium-5 primary"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="primary media-heading" tag="h6">
                      You have new order!
                    </Media>
                    <p className="notification-text">
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      99% Server load
                    </Media>
                    <p className="notification-text">
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Warning Notification
                    </Media>
                    <p className="notification-text">
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="info media-heading" tag="h6">
                      Complete the task
                    </Media>
                    <p className="notification-text">
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.File className="font-medium-5 warning" size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      Generate monthly report
                    </Media>
                    <p className="notification-text">
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            {/*   <Icon.MessageSquare size={21} />*/}
            <i className="far fa-envelope fa-20px"></i>
            <Badge pill color="primary" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false
              }}
            >
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.PlusSquare
                      className="font-medium-5 primary"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="primary media-heading" tag="h6">
                      You have new order!
                    </Media>
                    <p className="notification-text">
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      99% Server load
                    </Media>
                    <p className="notification-text">
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Warning Notification
                    </Media>
                    <p className="notification-text">
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="info media-heading" tag="h6">
                      Complete the task
                    </Media>
                    <p className="notification-text">
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.File className="font-medium-5 warning" size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      Generate monthly report
                    </Media>
                    <p className="notification-text">
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown
          tag="li"
          className="dropdown-notification nav-item"
        >
          <DropdownToggle tag="a" className="nav-link nav-link-label">
            {/*<Icon.Bell size={21} />*/}
            <i className="far fa-bell fa-20px"></i>
            <Badge pill color="primary" className="badge-up">
              {" "}
              5{" "}
            </Badge>
          </DropdownToggle>
          <DropdownMenu tag="ul" right className="dropdown-menu-media">
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <h3 className="text-white">5 New</h3>
                <span className="notification-title">App Notifications</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative"
              options={{
                wheelPropagation: false
              }}
            >
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.PlusSquare
                      className="font-medium-5 primary"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="primary media-heading" tag="h6">
                      You have new order!
                    </Media>
                    <p className="notification-text">
                      Are your going to meet me tonight?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      9 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.DownloadCloud
                      className="font-medium-5 success"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      99% Server load
                    </Media>
                    <p className="notification-text">
                      You got new order of goods?
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      5 hours ago
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.AlertTriangle
                      className="font-medium-5 danger"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="danger media-heading" tag="h6">
                      Warning Notification
                    </Media>
                    <p className="notification-text">
                      Server has used 99% of CPU
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Today
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.CheckCircle
                      className="font-medium-5 info"
                      size={21}
                    />
                  </Media>
                  <Media body>
                    <Media heading className="info media-heading" tag="h6">
                      Complete the task
                    </Media>
                    <p className="notification-text">
                      One of your task is pending.
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last week
                    </time>
                  </small>
                </Media>
              </div>
              <div className="d-flex justify-content-between">
                <Media className="d-flex align-items-start">
                  <Media left href="#">
                    <Icon.File className="font-medium-5 warning" size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="warning media-heading" tag="h6">
                      Generate monthly report
                    </Media>
                    <p className="notification-text">
                      Reminder to generate monthly report
                    </p>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      Last month
                    </time>
                  </small>
                </Media>
              </div>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <DropdownItem tag="a" className="p-1 text-center">
                <span className="align-middle">Read all notifications</span>
              </DropdownItem>
            </li>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.userName}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.props.userImg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
export default NavbarUser
