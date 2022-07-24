import axios from 'axios'

const base = process.env.NEXT_PUBLIC_API_ENDPOINT
const userBase = `${base}/api/v1/users`

export function registerUser(payload: {
  username: string,
  password: string,
  email: string,
  confirmePassword: string,
  
}) {
  return axios.post(userBase, payload).then((res) => res.data);
}