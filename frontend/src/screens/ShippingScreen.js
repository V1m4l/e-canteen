import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import PizzaPie from '../components/PizzaPiechart'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const submitHandler = () => {
    history.push('/payment')
  }

  return (
    <div>
      <CheckoutSteps step1 step3 />
      <h1>Food Details</h1>
<PizzaPie />
      <Button type='submit' variant='primary' onClick={submitHandler}>
          Continue
        </Button>
    </div>
  )
}

export default ShippingScreen
