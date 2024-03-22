import React from 'react'
import Button from '../../UI/Button/Button'

function SubmitButton({ title, submissionFunction }) {
  function handleSubmit(){
    submissionFunction();
  }
  return (
    <Button title={ title } onClick={handleSubmit} />
  )
}

export default SubmitButton
