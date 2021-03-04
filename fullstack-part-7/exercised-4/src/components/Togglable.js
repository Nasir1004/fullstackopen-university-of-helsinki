import React, { useState, useImperativeHandle } from 'react'
import PropType from 'prop-types'
import {  Button } from 'react-bootstrap'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
 
  Togglable.propTypes = {
    buttonLabel: PropType.string.isRequired
  }
  return (
    <div>
      <div>
        <Button variant="outline-secondary" onClick={toggleVisibility}>{props.buttonLabel}</Button>{' '}
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        {/* <Button className="danger"   type="button" onClick={toggleVisibility}>
         cancel
        </Button> */}
         {/* <Button variant="danger" onClick={toggleVisibility}>Cancel</Button> */}
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable