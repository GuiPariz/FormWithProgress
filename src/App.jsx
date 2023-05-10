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
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });
  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const explodeString = data.fullName.split(" ");
      if (explodeString[1]) {
        value += amountToAdd;
      }
    }

    if (data.email) {
      let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,}$/
      if(pattern.test(data.email)){
        value += amountToAdd;
      }
      
    }

    if (data.maritalStatus) {
      value += amountToAdd;
    }

    if (data.gender) {
      value += amountToAdd;
    }

    return value;
  };

  const handleSubimit = ()=>{
    alert('Formulario enviado com sucesso!')
  }

  return (
    <Page>
      <FormContainer>
        <BarContainer>
          <Bar style={{ width: `${calculateProgress()}%` }} />
        </BarContainer>
        <FormGroup>
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            type="text"
            value={data.Name}
            placeholder="Digite seu nome completo..."
            onChange={handleChange}
            required
            pattern="[a-zA-Z ]*"
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
            required
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,}$"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            id=""
            value={data.maritalStatus}
            onChange={handleChange}
            required
          >
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
                checked={data.gender === "masculino"}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="feminino"
                onChange={handleChange}
                checked={data.gender === "feminino"}
              />{" "}
              Feminino
            </span>
          </RadioInputs>
        </FormGroup>
        <button type="submit" onClick={handleSubimit} disabled={calculateProgress()!== 100}>Enviar Formulario</button>
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
      cursor: pointer;
    }
    :disabled{
      filter: contrast(0.8);
      cursor: not-allowed;
      outline-offset:0;
  }
  @media only screen and (max-width: 600px) {
    outline: none;
    width: fit-content;
  }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
`;

const shake = keyframes`
  25%{transform:translateX(4px)}
  50%{transform:translateX(-4px)}
  75%{transform:translateX(4px)}
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
    :invalid {
      animation: 300ms ${shake} ease-out;
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
  transition: 300ms;
`;

const Bar = styled.div`
  background-image: url("./assets/Frame.svg");
  height: 1rem;
  width: 0;
  border-radius: 10px;
  transition: width 1s ease;
`;
