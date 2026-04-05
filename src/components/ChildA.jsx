import React from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC'

function ChildA() {
  return (
    <div>
      <ChildB/>
      {/* <ChildC/> */}
    </div>
  )
}

export default ChildA
