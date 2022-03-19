interface User {
  id: number,
  username: string,
  role: string,
  email: string,
  password: string
}

interface IUser {
  users: {
    id: number,
    username: string,
    role: string,
    email: string,
    password: string
  }
  token: string,
}

export { User, IUser };
