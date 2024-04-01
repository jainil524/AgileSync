import React from 'react'
import Button from '../../components/UI/Button/Button'


function Dashboard() {

  const handleClick = (e,setIsLoading) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      Dasboard
      <Button title="Click me" setClick={handleClick}/>
    </div>
  )
}

export default Dashboard
