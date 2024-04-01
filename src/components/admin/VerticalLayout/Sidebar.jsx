import PropTypes from "prop-types"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import SidebarContent from "./SidebarContent"

import avatar2 from "../../../assets/images/users/sj.jpg"

const Sidebar = props => {
  const layout = useSelector(state=>state.layout)
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          <div className="user-wid text-center py-4">
            <div className="user-img">
              <img src={avatar2} alt="" className="avatar-md mx-auto rounded-circle" />
            </div>

              <div className="mt-3">
                <Link to="#" className="text-dark fw-medium font-size-16">Eric</Link>
                <p className="text-body mt-1 mb-0 font-size-13">CEO, Prism</p>
              </div>
            </div>
            <div data-simplebar className="h-100">
            {layout.leftSideBarType !== "condensed" ? <SidebarContent /> : <SidebarContent />}
          </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default withTranslation()(Sidebar)