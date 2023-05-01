import { useState } from 'react'
import styled from 'styled-components'
import "./global.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Background >
      <FormContainer >
        <FormGroup>
          <label htmlFor="">Nome Completo</label>
          <input type="text" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">email</label>
          <input type="email" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Estado Civil</label>
          <input type="text" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Gênero</label>
          <input type="text" />
        </FormGroup>
        <button type='submit'>Enviar Formulario</button>
      </FormContainer>
    </Background>
  )
}

export default App

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items:center;
  background-color: #000 ;
` 

const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #161f30;
  color: #ccc;
  border-radius: 8px;
  padding: 2rem;

  button{
    transition: 150ms;
    outline: 4px solid #2c3e4d;
    margin: 0 auto;
    width: 50%;
    border: none;
    border-radius: 4px;
    background-color:#2c3e4d;
    padding: 1rem;
    color:#ccc;
    font-size: 1.2rem;
    letter-spacing: 0.75;
    font-weight: 500;
    :is(:hover, :focus){
      outline-offset: 3px;
      color: #fff;
      transition: 150ms;
    };
  }
`

const FormGroup = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: column;
  margin-bottom: 1.5rem;
  gap: 0.5rem;

  input{
    border: none;
    border-radius: 4px;
    height: 2rem;
    padding: 0.5rem;
    outline: none;
  }
`