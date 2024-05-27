import React from 'react'

const DataAction = ({RemoveInfo, ShowInfo, personData}) => {
  return (
    <div className='mt-3 d-flex justify-content-between'>
      <button className='btn-style p-2' onClick={RemoveInfo}>Delete</button>
      <button className='btn-style p-2' onClick={ShowInfo}>Show</button>
    </div>
  )
}

export default DataAction