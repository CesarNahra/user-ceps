import { useNavigate } from "react-router-dom"
import * as Styled from './Login.style'
import { useState } from "react";
import { InputComponent } from "../Input/Input.component";

export const FormLoginComponent = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const isDisabled = () => {
    return !data.email || !data.password || !data.email.includes('@') || data.password.length < 8;
  }

  const handleInput = (e) => {
    e.preventDefault();
    const {value, id} = e.target;
    
    setData({...data, [id]: value})
  }

  const redirectToHome = () => {
    navigate('/home')
  }

  return (
    <Styled.Form onSubmit={redirectToHome}>
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
        <Styled.SubTitle>Texto</Styled.SubTitle>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent id='email' type='email' placeholder='Digite o seu email' label='Email'/>
        <InputComponent id='password' type='password' placeholder='Digite a sua senha' label='Senha'/>
      </Styled.InputGroup>

      <Styled.Button type="submit" disabled={isDisabled()}>Entrar</Styled.Button>

      <Styled.Action>
        <Styled.EsqueciSenha href="">Esqueci minha senha</Styled.EsqueciSenha>
        <Styled.Button $outlined={true} type="button">Criar Conta</Styled.Button>
      </Styled.Action>
    </Styled.Form>
  )
}