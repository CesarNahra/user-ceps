import { useNavigate } from "react-router-dom"
import * as Styled from './Login.style'
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";

export const FormLoginComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const navigate = useNavigate();

  const submitForm = (data) => {
    console.log(data)
  }

  const redirectToHome = () => {
    navigate('/home')
  }

  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
        <Styled.SubTitle>Para acessar o sistema digite seu email e sua senha.</Styled.SubTitle>
      </Styled.Header>

      <Styled.InputGroup>
        <InputComponent
          id='email'
          type='email'
          placeholder='Digite o seu email'
          label='Email'
          register={{ ...register('email', {
            required: true,
            validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}}) 
          }}
          error={errors.email}
        />
        <InputComponent
          id='password'
          type='password'
          placeholder='Digite a sua senha'
          label='Senha'
          register={{ ...register('password', {required: true, minLength: 8}) }}
          error={errors.password}
        />
      </Styled.InputGroup>

      <Styled.Button $active={!errors.email && !errors.password} type="submit" disabled={errors.email || errors.password}>Entrar</Styled.Button>

      <Styled.Action>
        <Styled.EsqueciSenha href="">Esqueci minha senha</Styled.EsqueciSenha>
        <Styled.Button $outlined={true} type="button">Criar Conta</Styled.Button>
      </Styled.Action>
    </Styled.Form>
  )
}