import React, { FormEvent } from 'react';
import { useUserStore } from '../../stores/user';

// import { Container } from './styles';

const UserForm: React.FC = () => {
  const addUser = useUserStore(state => state.addUser);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const name = (event.target as any).name.value;
    const email = (event.target as any).email.value;
    addUser({name, email});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' placeholder='nome'/>
      <input name='email' placeholder='email'/>
      <button type='submit'>Criar usuário</button>
    </form>
  )
}

export default UserForm;