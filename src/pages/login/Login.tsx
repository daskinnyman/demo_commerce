import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from 'react-hook-form';


type Inputs = {
    email: string,
    password: string
};

function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({ mode: 'onChange' })

    function onSubmit(values: Inputs) {
        axios.post("/api/login", values)
            .then((el) => el.data)
            .then((data) => {
                if (!data || !data.token) {
                    return;
                }

                sessionStorage.setItem('token', data.token)
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email !== null}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        placeholder='email'
                        {...register('email', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email !== null && errors.email?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password !== null}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        id='password'
                        placeholder='password'
                        {...register('password', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password !== null && errors.password?.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default Login;

