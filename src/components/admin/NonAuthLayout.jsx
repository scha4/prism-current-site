import PropTypes from 'prop-types'
import React, { Component } from "react"
import { Outlet } from 'react-router-dom'
class NonAuthLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capitalizeFirstLetter.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  componentDidMount() {
    let currentage = this.capitalizeFirstLetter(this.props.location.pathname).replace('admin/office/','')

    document.title =
      currentage + " | PRISM"
  }
  render() {
    return <React.Fragment><Outlet/></React.Fragment>
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default NonAuthLayout
