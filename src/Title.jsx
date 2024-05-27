import React from 'react'

const Title = ({meetings}) => {
  return (
    <div className='row pt-5 fs-5 fw-3 justify-content-center'>
      <h3>You Have {meetings.length} Meeting today!</h3>
    </div>
  )
}

export default Title