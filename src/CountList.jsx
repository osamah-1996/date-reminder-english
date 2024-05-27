import React from 'react'

const CountList = ({personData}) => {
  return (
    <div className='rectangle p-3 mt-3'>
       {
        personData.length ?  (personData.map((item, index, array) => {
          return (
            <div key={index} className='d-flex border-bottom py-2'>
                <img src={item.image} alt='opps' className='image-avatar'/>
                <div className='px-3'>
                  <p className='d-inline fs-5 fw-bold'>{item.name}</p>
                  <p className='fs-6 fw-6'>{item.date}</p>
                </div>
            </div>
          )
        })) :<h4 className='text-center mt-5'>Sorry you have {personData.length} Meetings Today!</h4>
       }
        
    </div>
  )
}

export default CountList