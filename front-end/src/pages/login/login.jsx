import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../assets/img/logo-pdv.png';
import { login, isUserLoggedIn } from '../../services/auth';

const Login = ({ setCurrentRoute }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    useEffect(() => {
        isUserLoggedIn(navigate, location.pathname);
        setCurrentRoute(location.pathname);
    }, [])
    // no momento que entra na view, no componente, ele carrega, ou seja, não carrega todo tempo . max recursion dev

    return <Grid container spacing={2}>
        <Grid item xs={0} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
            <Stack direction={'column'}>
            <Box sx={{
                textAlign: 'center',
                padding: '15px',
                boxSizing: 'border-box'
            }}>
            <img
                alt={"Logo PDV"}
                src={logo}
                style={{
                    height: '100px',
                    marginBottom: '14px'
                }}
            />
            </Box>
            <TextField
                fullWidth={true}
                label={'E-mail'}
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    marginBottom: '8px',
                }}
            />
            <TextField
                fullWidth={true}
                label={'Senha'}
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                    marginBottom: '8px'
                }}
            />
            <Button
                size='large'
                variant='contained'
                onClick={async () => {
                    try{
                        const response = await login(email, password);
                    if(response.status === 200){
                        window.localStorage.setItem('user', JSON.stringify(response.data));
                        navigate('/')
                    }else{
                        alert('Erro ao realizar Login. Tente novamente.')
                    }
                    }catch(err){
                            alert('Erro ao realizar Login. Tente novamente.')
                    }
                }}
                >Entrar
            </Button>
            </Stack>
        </Grid>
  </Grid>
}

export default Login;