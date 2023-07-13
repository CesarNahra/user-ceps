import { useNavigate } from "react-router-dom"
import * as Styled from './Login.style'
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/auth.context";

export const FormLoginComponent = () => {
  const users = [
    {
      id: 1,
      email: 'admin@usercep.com',
      password: '12345678'
    },
    {
      id: 2,
      email: 'usuario@usercep.com',
      password: '432132423'
    },
    {
      id: 3,
      email: 'usercep@gmail.com',
      password: '86153613'
    },
    {
      id: 4,
      email: 'cesarsantanna.nahra@gmail.com',
      password: '45646961'
    },
  ]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext)

  const submitForm = (data) => {
    const {email, password} = data;

    const user = users.find(u => u.email === email);

    if(!user) {
      alert('usuário não cadastrado');
      reset();
      return;
    }

    password === user.password ? redirectToHome() : alert('ops usuário ou senha inválidos')
  }

  const redirectToHome = (user) => {
    setAuth({
      user,
      isLogged: true,
    })
    navigate('/')
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