import create from 'zustand';

type User = {
  name: string,
  email: string,
}

type UserState = {
  users: User[];
  addUser: (user: User) => void
}

const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => {
    set(state => ({users: [...state.users, user]}))
  }
}));

export { useUserStore };