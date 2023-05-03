import { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./global.css";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    gender: "",
  });

  const handleChange = (event) => {

    const {name, value} = event.target

    setData((prev)=>{
      const newData = {...prev, [name]: value }

      return newData
    })
  };
  return (
    <Page>
      <FormContainer>
        <BarContainer>
          <Bar/>
        </BarContainer>
        <FormGroup>
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            type="text"
            value={data.Name}
            placeholder="Digite seu nome completo..."
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">E-mail</label>
          <input
            name="email"
            type="email"
            value={data.email}
            placeholder="digite seu email..."
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Estado Civil</label>
          <select name="maritalStatus" id="" value={data.maritalStatus} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Gênero</label>
          <RadioInputs>
            <span>
              <input
                type="radio"
                name="gender"
                value="masculino"
                onChange={handleChange}
                checked={data.gender === 'masculino'}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="feminino"
                onChange={handleChange}
                checked={data.gender === 'feminino'}
              />{" "}
              Feminino
            </span>
          </RadioInputs>
        </FormGroup>
        <button type="submit">Enviar Formulario</button>
      </FormContainer>
    </Page>
  );
}

export default App;

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: no-repeat url("./assets/Frame.svg");
  background-size: cover;
`;

const FormContainer = styled.form`
  z-index: 20;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #363636;
  border-radius: 8px;
  padding: 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.7px;
  box-shadow: 1px 1px 10px, -1px -1px 10px black;

  button {
    transition: 150ms;
    outline: 4px solid #6b0cd4;
    margin: 2rem auto 0;
    width: 50%;
    border: none;
    border-radius: 4px;
    background: no-repeat url("./assets/Frame.svg");
    background-size: cover;
    padding: 1rem;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.75;
    font-weight: 500;
    :is(:hover, :focus) {
      outline-offset: 3px;
      transition: 150ms;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  height: 3rem;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.5rem;

  input,
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 2rem;
    padding: 0.5rem;
    ::placeholder {
      color: #363636;
    }
    :focus-visible {
      outline: 1px solid #9718fb;
    }
    :invalid{
      animation: shake 300ms;
      color: red;
    }
  }
`;

const RadioInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
`

const Bar = styled.div`
  background-image: url('./assets/Frame.svg');
  width: 25%;
  height: 1rem;
  border-radius: 10px;
`

const shake = keyframes`
  25%{transform:translateX(4px)}
  50%{transform:translateX(-4px)}
  75%{transform:translateX(4px)}
`