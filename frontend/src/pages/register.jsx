import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register with:', { name, email, password });
  };

  const handleGoogleContinue = () => {
    console.log('Continue with Google');
  };

  return (
 <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#f9fafb',
        display: 'flex',
      }}
    >

       {/* Left Side - Hero Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: 8,
          py: 6,
          position: 'relative',
          ml: 10, 
        }}
      >
        {/* Medico Text instead of Logo */}
        <Box sx={{ position: 'absolute', top: 32, left: 32 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#000', fontWeight: 700, fontSize: 28, fontFamily: 'Arial, sans-serif' }}>
              Medico
            </Typography>
          </Box>
        </Box>

        {/* Hero Content */}
        <Box sx={{ maxWidth: 480 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontSize: 34, color: '#111927', lineHeight: 1.1, mb: 4 }}
          >
            Track. Remind. Stay Well!
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 38, mb: 4 }}>
            Your{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
            Medico
              <br />
              Your health, on time...
            </Box>
          </Typography>
          <Typography sx={{ color: '#64748b', fontSize: 20, mb: 6 }}>
           Smart software for smarter care.
          </Typography>

          {/* AI Characters Illustration */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              mb: 4,
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  background: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: 32 }}>🤖</Typography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  width: 24,
                  height: 24,
                  background: '#a78bfa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: 12 }}>✨</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 96,
                height: 96,
                background: 'linear-gradient(to bottom right, #fde68a, #fb923c)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateY(-8px)',
              }}
            >
              <Typography sx={{ fontSize: 40 }}>😊</Typography>
            </Box>
            <Box
              sx={{
                width: 80,
                height: 80,
                background: 'linear-gradient(to bottom right, #4ade80, #16a34a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ fontSize: 32 }}>🎯</Typography>
            </Box>
            <Box
              sx={{
                width: 72,
                height: 72,
                background: 'linear-gradient(to bottom right, #9ca3af, #4b5563)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateY(4px)',
              }}
            >
              <Typography sx={{ fontSize: 24 }}>⚡</Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 32,
                left: 128,
                width: 16,
                height: 16,
                bgcolor: '#c4b5fd',
                borderRadius: '50%',
                opacity: 0.6,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 64,
                left: 32,
                width: 12,
                height: 12,
                bgcolor: '#93c5fd',
                borderRadius: '50%',
                opacity: 0.4,
              }}
            />
          </Box>
        </Box>
      </Box>









    <Box
        sx={{
          width: 384,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 4,
          py: 6,
          bgcolor: '#fff',
          mr: 30, 
        }}
      >
      <Paper elevation={3} sx={{ p: 5, width: 384 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Create your account
        </Typography>

        <Button
          onClick={handleGoogleContinue}
          variant="outlined"
          sx={{ width: '100%', mb: 4, height: 48, borderColor: '#d1d5db', color: '#111', textTransform: 'none', bgcolor: '#f9fafb', '&:hover': { bgcolor: '#f3f4f6' } }}
          startIcon={
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          }
        >
          Continue with Google
        </Button>

        <Typography align="center" sx={{ color: '#6b7280', mb: 3 }}>
          Or register with your details
        </Typography>

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TextField
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            variant="outlined"
            required
            fullWidth
            sx={{ bgcolor: '#f9fafb' }}
          />
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            required
            fullWidth
            sx={{ bgcolor: '#f9fafb' }}
          />
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            required
            fullWidth
            sx={{ bgcolor: '#f9fafb' }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%', height: 48, bgcolor: '#000', color: '#fff', fontWeight: 500, '&:hover': { bgcolor: '#111827' } }}
          >
            Register
          </Button>

          <Typography align="center" sx={{ fontSize: 14, color: '#64748b' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#111927', textDecoration: 'underline' }}>
              Sign in
            </a>
          </Typography>
        </form>
      </Paper>
    </Box>
    </Box>
  );
}
