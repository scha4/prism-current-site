import React, { useState } from "react"
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom"

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from '../../../store/layout/layoutSlice';

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import logo from "../../../assets/images/logo-sm.png"
import logoLight from "../../../assets/images/logo-light.png"
import logoDark from "../../../assets/images/logo-dark.png"

import Navbar from "./Navbar"

//i18n
import { withTranslation } from "react-i18next"

const Header = props => {
  const layout = useSelector(state=>state.layout)
  const dispatch = useDispatch();
  const isMenuOpened = 'false'
  const [isSearch, setSearch] = useState(false)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }
  return (
    <React.Fragment>
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                PRISM
              </span>
              <span className="logo-lg">
                PRISM
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                PRISM
              </span>
              <span className="logo-lg" style={{"color":"white","fontSize":"1.2rem","fontWeight":"600"}}>
                PRISM
              </span>
            </Link>
          </div>

          <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-toggle="collapse"
              onClick={() => {
                dispatch(toggleLeftmenu(!layout.leftMenu))
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

          <Navbar menuOpen={isMenuOpened} />
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              onClick={() => setSearch(!isSearch)}
            >
              <i className="mdi mdi-magnify"></i>
            </button>
            <div
              className={
                isSearch
                  ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                  : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
              }
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={props.t("Search") + "..."}
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <LanguageDropdown /> */}

          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              onClick={() => {
                toggleFullscreen()
              }}
              data-toggle="fullscreen"
            >
              <i className="mdi mdi-fullscreen"></i>
            </button>
          </div>

          <NotificationDropdown />

          <ProfileMenu />

          <div className="dropdown d-inline-block">
            <button
              onClick={() => {
                dispatch(showRightSidebarAction({isopen:!layout.showRightSidebar.isopen, type:'settings'}))
              }}
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="mdi mdi-settings-outline"></i>
            </button>
          </div>
        </div>



      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Header)
