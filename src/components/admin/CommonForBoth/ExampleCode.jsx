import React,{ useState } from "react"
import PropTypes from 'prop-types'
import { FormGroup } from "reactstrap"
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { useSelector,useDispatch } from "react-redux"


//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

import "./rightbar.scss"

import '@toast-ui/editor/dist/toastui-editor.css';

import Highlight from 'react-highlight'
import 'highlight.js/styles/night-owl.css';
import { showRightSidebarAction } from '../../../store/layout/layoutSlice';
const ExampleCode = props => {
  const layout = useSelector(state=>state.layout)
  const dispatch = useDispatch()
  const [fadeType, setFadeType] = useState('');
  const [fadeType2, setFadeType2] = useState('');
  return (
    
      <div className="right-bar example-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <h5 className="m-0 me-2">Example Code</h5>
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  dispatch(showRightSidebarAction({isopen:false}))
                }}
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
            </div>

            <hr className="my-0" />
            
            <div className="p-4">
              <div className='div-code'>
                <div className='div-copy'>
                  <p>{props.srcPath}</p>
                  <CopyToClipboard text={layout.showRightSidebar.importCode}
                    onCopy={() => {
                      setFadeType('fade-in');
                      setTimeout(()=>{setFadeType('fade-out')},1000)
                      }
                    }>
                    <i className={`bx bx-copy-alt`}></i>
                  </CopyToClipboard>
                </div>
                <Highlight language="javascript" className={`example-code ${fadeType}`}>
                  {layout.showRightSidebar.importCode}
                </Highlight>
              </div>
            </div>
            <div className="p-4">
              <div className='div-code'>
                <div className='div-copy'>
                  <p>{layout.srcPath}</p>
                  <CopyToClipboard text={layout.showRightSidebar.content}
                    onCopy={() => {
                      setFadeType2('fade-in');
                      setTimeout(()=>{setFadeType2('fade-out')},1000)
                      }
                    }>
                    <i className={`bx bx-copy-alt`}></i>
                  </CopyToClipboard>
                </div>
                <Highlight language="javascript" className={`example-code2 ${fadeType2}`}>
                  {layout.showRightSidebar.content}
                </Highlight>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
  )
}



export default ExampleCode
