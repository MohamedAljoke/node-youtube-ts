import { useForm } from "@mantine/hooks"

export default function RegisterPage() {
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmePassword:'',
    }
  })
  // const mutation = useMutation()
  return <div>
    Register Page
  </div>
}