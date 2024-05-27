import React, { useEffect, useState } from 'react'
import "./App.css"
import { person } from './Data'
import Title from './Title'
import CountList from './CountList'
import DataAction from './DataAction'

const App = () => {
  const [personData, setPersonData] = useState(person) // Correct state initialization

  // This function for data re-rendering
  const deleteData = () => {
    setPersonData([]) // Update state with an empty array
  }

  const showData = () => {
    setPersonData(person) // Update state with person data
  }

  useEffect(() => {
    setPersonData([]) // Clear data on mount
  }, [])

  return (
    <div className='color-body'>
      <div className='container'>
        <Title meetings={personData}/> {/* Pass the state here */}
        <CountList personData={personData}/> {/* Pass the state here */}
        <DataAction RemoveInfo={deleteData} ShowInfo={showData}/>
      </div>
    </div>
  )
}

export default App