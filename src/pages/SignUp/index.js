import React from 'react';
import { Link } from 'react-router-dom';

import registerImg from '~/assets/register.png';
import logo from '~/assets/logo_transparent.png';
import AuthLayout from '~/pages/_layouts/auth';

// import { Container } from './styles';

function SignIn() {
  return (
    <>
      <AuthLayout>
        <section>
          <img src={logo} alt="teste" />
          <form>
            <h1>Faça o seu cadastro</h1>
            <input placeholder="Nome completo" />
            <input type="email" placeholder="Entre com seu -email" />
            <input type="password" placeholder="Digite sua senha" />

            <button type="submit">Acessar</button>
            <Link to="/login">Fazer login</Link>
          </form>
        </section>
        <img src={registerImg} alt="teste" />
      </AuthLayout>
    </>
  );
}

export default SignIn;
