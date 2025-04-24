import React from 'react'
import Card from './components/Card'
import DummyData from './components/DummyData'

const App = () => {

  const details = DummyData
  return (
    <div>
        <div className='p-10 space-x-5 space-y-5 bg-amber-100 h-full' >
          {details.map((detail, index) => (
            <Card key={index} {...detail} />
          ))}
        </div>
    </div>
  );
}
 
export default App
