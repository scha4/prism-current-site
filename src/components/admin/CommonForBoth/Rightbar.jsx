import React from "react"
import PropTypes from 'prop-types'
import { FormGroup } from "reactstrap"

import { useSelector, useDispatch } from "react-redux"

//SimpleBar
import SimpleBar from "simplebar-react"
//Settings
import Settings from './Settings'
//ExampleCode
import ExampleCode from './ExampleCode'


import "./rightbar.scss"

//Import images
import layout1 from "../../../assets/images/layouts/layout-1.jpg"
import layout2 from "../../../assets/images/layouts/layout-2.jpg"
import layout3 from "../../../assets/images/layouts/layout-3.jpg"
import { showRightSidebarAction } from '../../../store/layout/layoutSlice'
const RightSidebar = props => {
  const layout = useSelector(state=>state.layout)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {props.type === 'settings'? <Settings /> : null}
      {props.type === 'examplecode'? <ExampleCode /> : null}
      <div className="rightbar-overlay" 
        onClick={() => {
          dispatch(showRightSidebarAction({isopen:!layout.showRightSidebar.isopen}));
        }}
      />
    </React.Fragment>
  )
}


export default RightSidebar
