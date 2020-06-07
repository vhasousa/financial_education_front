import React from 'react';
import { Link } from 'react-router-dom';

import imgTeste from '~/assets/money.png';
import logo from '~/assets/logo_transparent.png';
import AuthLayout from '~/pages/_layouts/auth';

// import { Container } from './styles';

function SignIn() {
  return (
    <AuthLayout>
      <section>
        <img src={logo} alt="teste" />
        <form>
          <h1>Faça o seu login</h1>
          <input type="email" placeholder="Entre com seu -email" />
          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">Criar conta</Link>
        </form>
      </section>
      <img src={imgTeste} alt="teste" />
    </AuthLayout>
  );
}

export default SignIn;
