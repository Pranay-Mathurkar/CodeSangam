


// // // import { useState,useContext,useEffect } from 'react';
// // // import { Button, TextField, Box, Typography, Paper } from '@mui/material';

// // // import { AuthContext } from '../contexts/AuthContext';



// // // export default function Login() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //    const [error, setError] = useState('');
// // //    const [message, setMessage] =useState('');




// // //    const { login } = useContext(AuthContext);

// // //   let handleLoginAuth =async (e)  => {
// // //     e.preventDefault();
// // //     console.log('Login in with:', { email, password });

   


// // //       setError('');
// // //       setMessage('');

// // //        if (password.length < 6) {
// // //     setError("Password must be at least 6 characters long");
// // //     return;
// // //   }

// // //       try {
// // //             let result = await login(email, password)
  

// // //             }
// // //           catch (err) {
// // //             console.log(err);

// // //   let message = "Login failed. Please try again.";

// // //   if (err.response && err.response.data && err.response.data.message) {
// // //     message = err.response.data.message;
// // //   } else if (err.message) {
// // //     message = err.message;
// // //   }

// // //   setError(message);
// // // }


// // //   };

// // // //  const handleGoogleLoginAuth = () => {
// // // //     /* global google */
// // // //     if (window.google) {
// // // //       const client = window.google.accounts.oauth2.initTokenClient({
// // // //         client_id: "931291640959-fnrdj7phqnal42ulm65hsnsoeimnsm3n.apps.googleusercontent.com", // replace with your Google client ID
// // // //         scope: "profile email",
// // // //         callback: async (response) => {
// // // //           try {
// // // //             await googleLogin(response.access_token); // send token to backend
// // // //           } catch (err) {
// // // //             console.error("Google login error:", err);
// // // //             setError("Google login failed");
// // // //           }
// // // //         },
// // // //       });
// // // //       client.requestAccessToken();
// // // //     } else {
// // // //       setError("Google SDK not loaded");
// // // //     }
// // // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         width: '100vw',
// // //         height: '100vh',
// // //         bgcolor: '#f9fafb',
// // //         display: 'flex',
// // //       }}
// // //     >
// // //       {/* Left Side - Hero Section */}
// // //       <Box
// // //         sx={{
// // //           flex: 1,
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           justifyContent: 'center',
// // //           alignItems: 'flex-start',
// // //           px: 8,
// // //           py: 6,
// // //           position: 'relative',
// // //           ml: 10, 
// // //         }}
// // //       >
// // //         {/* Medico Text instead of Logo */}
// // //         <Box sx={{ position: 'absolute', top: 32, left: 32 }}>
// // //           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// // //             <Typography sx={{ color: '#000', fontWeight: 700, fontSize: 28, fontFamily: 'Arial, sans-serif' }}>
// // //               Medico
// // //             </Typography>
// // //           </Box>
// // //         </Box>

// // //         {/* Hero Content */}
// // //         <Box sx={{ maxWidth: 480 }}>
// // //           <Typography
// // //             variant="h2"
// // //             sx={{ fontWeight: 700, fontSize: 34, color: '#111927', lineHeight: 1.1, mb: 4 }}
// // //           >
// // //             Track. Remind. Stay Well!
// // //           </Typography>
// // //           <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 38, mb: 4 }}>
// // //             Your{' '}
// // //             <Box
// // //               component="span"
// // //               sx={{
// // //                 background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
// // //                 WebkitBackgroundClip: 'text',
// // //                 WebkitTextFillColor: 'transparent',
// // //                 fontWeight: 700,
// // //               }}
// // //             >
// // //             Medico
// // //               <br />
// // //               Your health, on time...
// // //             </Box>
// // //           </Typography>
// // //           <Typography sx={{ color: '#64748b', fontSize: 20, mb: 6 }}>
// // //            Smart software for smarter care.
// // //           </Typography>

// // //           {/* AI Characters Illustration */}
// // //           <Box
// // //             sx={{
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               gap: 3,
// // //               mb: 4,
// // //               position: 'relative',
// // //             }}
// // //           >
// // //             <Box sx={{ position: 'relative' }}>
// // //               <Box
// // //                 sx={{
// // //                   width: 80,
// // //                   height: 80,
// // //                   background: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
// // //                   borderRadius: '50%',
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                 }}
// // //               >
// // //                 <Typography sx={{ fontSize: 32 }}>🤖</Typography>
// // //               </Box>
// // //               <Box
// // //                 sx={{
// // //                   position: 'absolute',
// // //                   top: -8,
// // //                   right: -8,
// // //                   width: 24,
// // //                   height: 24,
// // //                   background: '#a78bfa',
// // //                   borderRadius: '50%',
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'center',
// // //                 }}
// // //               >
// // //                 <Typography sx={{ fontSize: 12 }}>✨</Typography>
// // //               </Box>
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 width: 96,
// // //                 height: 96,
// // //                 background: 'linear-gradient(to bottom right, #fde68a, #fb923c)',
// // //                 borderRadius: '50%',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //                 transform: 'translateY(-8px)',
// // //               }}
// // //             >
// // //               <Typography sx={{ fontSize: 40 }}>😊</Typography>
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 width: 80,
// // //                 height: 80,
// // //                 background: 'linear-gradient(to bottom right, #4ade80, #16a34a)',
// // //                 borderRadius: '50%',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //               }}
// // //             >
// // //               <Typography sx={{ fontSize: 32 }}>🎯</Typography>
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 width: 72,
// // //                 height: 72,
// // //                 background: 'linear-gradient(to bottom right, #9ca3af, #4b5563)',
// // //                 borderRadius: '50%',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //                 transform: 'translateY(4px)',
// // //               }}
// // //             >
// // //               <Typography sx={{ fontSize: 24 }}>⚡</Typography>
// // //             </Box>
// // //             <Box
// // //               sx={{
// // //                 position: 'absolute',
// // //                 top: 32,
// // //                 left: 128,
// // //                 width: 16,
// // //                 height: 16,
// // //                 bgcolor: '#c4b5fd',
// // //                 borderRadius: '50%',
// // //                 opacity: 0.6,
// // //               }}
// // //             />
// // //             <Box
// // //               sx={{
// // //                 position: 'absolute',
// // //                 top: 64,
// // //                 left: 32,
// // //                 width: 12,
// // //                 height: 12,
// // //                 bgcolor: '#93c5fd',
// // //                 borderRadius: '50%',
// // //                 opacity: 0.4,
// // //               }}
// // //             />
// // //           </Box>
// // //         </Box>
// // //       </Box>












// // //       {/* Right Side - Login Form */}
// // //       <Box
// // //         sx={{
// // //           width: 384,
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           justifyContent: 'center',
// // //           px: 4,
// // //           py: 6,
// // //           bgcolor: '#fff',
// // //           mr: 30, 
// // //         }}
// // //       >
// // //        <Paper elevation={3} sx={{ p: 5, width: 384 }}>
// // //           <Typography
// // //             variant="h5"
// // //             sx={{ fontWeight: 600, color: '#111927', mb: 4, textAlign: 'center' }}
// // //           >
// // //             Welcome Back
// // //           </Typography>
// // //           {/* <Button
// // //             onClick={handleGoogleLoginAuth}
// // //             variant="outlined"
// // //             sx={{
// // //               width: '100%',
// // //               mb: 3,
// // //               height: 48,
// // //               borderColor: '#d1d5db',
// // //               color: '#111',
// // //               textTransform: 'none',
// // //               bgcolor: '#f9fafb',
// // //               '&:hover': { bgcolor: '#f3f4f6' },
// // //             }}
// // //             startIcon={
// // //               <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
// // //                 <path
// // //                   fill="#4285F4"
// // //                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
// // //                 />
// // //                 <path
// // //                   fill="#34A853"
// // //                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
// // //                 />
// // //                 <path
// // //                   fill="#FBBC05"
// // //                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
// // //                 />
// // //                 <path
// // //                   fill="#EA4335"
// // //                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
// // //                 />
// // //               </svg>
// // //             }
// // //           >
// // //             Login  with Google
// // //           </Button> */}
// // //           <Typography align="center" sx={{ color: '#6b7280', mb: 3 }}>
// // //              Login  with a registered account
// // //           </Typography>
// // //           <form
// // //             onSubmit={handleLoginAuth}
// // //             style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
// // //           >
// // //             <TextField
// // //               type="email"
// // //               placeholder="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               variant="outlined"
// // //               required
// // //               fullWidth
// // //               sx={{ mb: 2, bgcolor: '#f9fafb' }}
// // //             />
// // //             <TextField
// // //               type="password"
// // //               placeholder="password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               variant="outlined"
// // //               required
// // //               fullWidth
// // //               sx={{ mb: 2, bgcolor: '#f9fafb' }}
// // //             />

// // //              {error && (
// // //                           <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
// // //                             {error}
// // //                           </Typography>
// // //                         )}

                        
// // //             <Typography align="center" sx={{ fontSize: 14, color: '#64748b', mb: 2 }}>
// // //               Don't have an account?{' '}
// // //               <a href="/register" style={{ color: '#111927', textDecoration: 'underline' }}>
// // //                 Create your account
// // //               </a>
// // //             </Typography>
// // //             <Button
// // //               type="submit"
// // //               variant="contained"
// // //               sx={{
// // //                 width: '100%',
// // //                 height: 48,
// // //                 bgcolor: '#000',
// // //                 color: '#fff',
// // //                 fontWeight: 500,
// // //                 '&:hover': { bgcolor: '#111827' },
// // //               }}
// // //             >
// // //               Login 
// // //             </Button>
// // //           </form>
// // //         </Paper>
// // //       </Box>
// // //     </Box>
// // //   );
// // // }




































// // // import { useState, useContext } from 'react';
// // // import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
// // // import { AuthContext } from '../contexts/AuthContext';

// // // export default function Login() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const { login } = useContext(AuthContext);

// // //   const handleLoginAuth = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     if (password.length < 6) {
// // //       setError("Password must be at least 6 characters long");
// // //       return;
// // //     }
// // //     try {
// // //       await login(email, password);
// // //       // Navigation happens in context on success
// // //     } catch (err) {
// // //       let message = "Login failed. Please try again.";
// // //       if (err.response && err.response.data && err.response.data.message) {
// // //         message = err.response.data.message;
// // //       } else if (err.message) {
// // //         message = err.message;
// // //       }
// // //       setError(message);
// // //     }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         width: '100vw',
// // //         minHeight: '100vh',
// // //         bgcolor: '#f9fafb',
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         justifyContent: 'center',
// // //       }}
// // //     >
// // //       <Grid
// // //         container
// // //         component="main"
// // //         justifyContent="center"
// // //         alignItems="center"
// // //         sx={{
// // //           minHeight: { xs: "100vh", md: "80vh" },
// // //           width: '100%',
// // //           maxWidth: 1350,
// // //           m: 'auto',
// // //           boxSizing: 'border-box'
// // //         }}
// // //         spacing={4}
// // //       >
// // //         {/* Hero Section */}
// // //         <Grid
// // //           item
// // //           xs={12}
// // //           md={7}
// // //           order={{ xs: 2, md: 1 }}
// // //           sx={{
// // //             display: "flex",
// // //             flexDirection: "column",
// // //             justifyContent: "center",
// // //             alignItems: { xs: "center", md: "flex-start" },
// // //             px: { xs: 2, sm: 4, md: 8 },
// // //             py: { xs: 6, md: 0 },
// // //           }}
// // //         >
// // //           <Box sx={{ width: "100%", maxWidth: 540 }}>
// // //             <Typography sx={{ color: "#111927", fontWeight: 700, fontSize: { xs: 28, sm: 32 } }}>
// // //               Medico
// // //             </Typography>
// // //             <Typography
// // //               variant="h2"
// // //               sx={{
// // //                 fontWeight: 700,
// // //                 fontSize: { xs: 28, sm: 34 },
// // //                 mt: 2,
// // //                 color: '#111927',
// // //                 lineHeight: 1.15,
// // //                 mb: 1,
// // //               }}
// // //             >
// // //               Track. Remind. Stay Well!
// // //             </Typography>
// // //             <Typography
// // //               variant="h2"
// // //               sx={{
// // //                 fontWeight: 700,
// // //                 fontSize: { xs: 30, sm: 36 },
// // //                 mb: 1.5,
// // //                 lineHeight: 1.1,
// // //               }}
// // //             >
// // //               Your{" "}
// // //               <Box
// // //                 component="span"
// // //                 sx={{
// // //                   background: "linear-gradient(to right, #a78bfa, #60a5fa)",
// // //                   WebkitBackgroundClip: "text",
// // //                   WebkitTextFillColor: "transparent",
// // //                   fontWeight: 700,
// // //                   fontSize: { xs: 32, sm: 38 },
// // //                 }}
// // //               >
// // //                 Medico
// // //                 <br />
// // //                 Your health, on time...
// // //               </Box>
// // //             </Typography>
// // //             <Typography sx={{ color: '#64748b', fontSize: { xs: 16, md: 20 }, mb: 2 }}>
// // //               Smart software for smarter care.
// // //             </Typography>
// // //             <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 3 }}>
// // //               <Box sx={{ width: 60, height: 60, bgcolor: "linear-gradient(to br, #60a5fa, #2563eb)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                 <Typography sx={{ fontSize: 28 }}>🤖</Typography>
// // //               </Box>
// // //               <Box sx={{ width: 70, height: 70, bgcolor: "linear-gradient(to br, #fde68a, #fb923c)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", }}> <Typography sx={{ fontSize: 32 }}>😊</Typography> </Box>
// // //               <Box sx={{ width: 60, height: 60, bgcolor: "linear-gradient(to br, #4ade80, #16a34a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}> <Typography sx={{ fontSize: 28 }}>🎯</Typography> </Box>
// // //               <Box sx={{ width: 52, height: 52, bgcolor: "linear-gradient(to br, #9ca3af,#4b5563)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}> <Typography sx={{ fontSize: 20 }}>⚡</Typography> </Box>
// // //             </Box>
// // //           </Box>
// // //         </Grid>
// // //         {/* Login Form */}
// // //         <Grid
// // //           item
// // //           xs={12}
// // //           md={5}
// // //           order={{ xs: 1, md: 2 }}
// // //           sx={{
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             minHeight: "100vh",
// // //             bgcolor: { xs: "#f9fafb", md: "#fff" },
// // //             px: { xs: 2, sm: 4 },
// // //           }}
// // //         >
// // //           <Paper
// // //             elevation={3}
// // //             sx={{
// // //               width: "100%",
// // //               maxWidth: 396,
// // //               p: { xs: 3, sm: 5 },
// // //               mx: "auto"
// // //             }}
// // //           >
// // //             <Typography
// // //               variant="h5"
// // //               sx={{ fontWeight: 600, color: "#111927", mb: 4, textAlign: "center" }}
// // //             >
// // //               Welcome Back
// // //             </Typography>
// // //             <Typography align="center" sx={{ color: "#6b7280", mb: 3 }}>
// // //               Login with a registered account
// // //             </Typography>
// // //             <form
// // //               onSubmit={handleLoginAuth}
// // //               style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
// // //             >
// // //               <TextField
// // //                 type="email"
// // //                 placeholder="Email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 variant="outlined"
// // //                 required
// // //                 fullWidth
// // //                 sx={{ mb: 2, bgcolor: '#f9fafb' }}
// // //               />
// // //               <TextField
// // //                 type="password"
// // //                 placeholder="Password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 variant="outlined"
// // //                 required
// // //                 fullWidth
// // //                 sx={{ mb: 2, bgcolor: '#f9fafb' }}
// // //               />
// // //               {error && (
// // //                 <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
// // //                   {error}
// // //                 </Typography>
// // //               )}
// // //               <Typography align="center" sx={{ fontSize: 14, color: '#64748b', mb: 2 }}>
// // //                 Don't have an account?{' '}
// // //                 <a href="/register" style={{ color: '#111927', textDecoration: 'underline' }}>
// // //                   Create your account
// // //                 </a>
// // //               </Typography>
// // //               <Button
// // //                 type="submit"
// // //                 variant="contained"
// // //                 sx={{
// // //                   width: '100%',
// // //                   height: 48,
// // //                   bgcolor: '#000',
// // //                   color: '#fff',
// // //                   fontWeight: 500,
// // //                   '&:hover': { bgcolor: '#111827' },
// // //                 }}
// // //               >
// // //                 Login
// // //               </Button>
// // //             </form>
// // //           </Paper>
// // //         </Grid>
// // //       </Grid>
// // //     </Box>
// // //   );
// // // }





















// // // import { useState, useContext } from 'react';
// // // import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
// // // import { AuthContext } from '../contexts/AuthContext';

// // // export default function Login() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const { login } = useContext(AuthContext);

// // //   const handleLoginAuth = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     if (password.length < 6) {
// // //       setError("Password must be at least 6 characters long");
// // //       return;
// // //     }
// // //     try {
// // //       await login(email, password);
// // //     } catch (err) {
// // //       let message = "Login failed. Please try again.";
// // //       if (err.response?.data?.message) message = err.response.data.message;
// // //       else if (err.message) message = err.message;
// // //       setError(message);
// // //     }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         bgcolor: 'black',
// // //         minHeight: '100vh',
// // //         width: '100vw',
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         justifyContent: 'center'
// // //       }}
// // //     >
// // //       <Grid
// // //         container
// // //         alignItems="center"
// // //         justifyContent="center"
// // //         sx={{
// // //           flexDirection: { xs: "column-reverse", md: "row" },
// // //           minHeight: "100vh",
// // //           maxWidth: 1400
// // //         }}
// // //       >
// // //         {/* Login Form */}
// // //         <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //           <Paper elevation={6} sx={{
// // //             width: "100%",
// // //             maxWidth: 400,
// // //             p: { xs: 3, md: 5 },
// // //             bgcolor: "#18181b",
// // //             color: "#fff",
// // //             border: "1px solid #FFD70044",
// // //             boxShadow: "0 0 40px #FFD70033"
// // //           }}>
// // //             <Typography variant="h5" fontWeight={700} mb={3} textAlign="center" color="gold">Welcome Back</Typography>
// // //             <Typography align="center" sx={{ color: "#FFD700bb", mb: 3 }}>Login with your account</Typography>
// // //             <form onSubmit={handleLoginAuth} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
// // //               <TextField
// // //                 label="Email"
// // //                 type="email"
// // //                 value={email}
// // //                 required
// // //                 autoComplete="username"
// // //                 onChange={e => setEmail(e.target.value)}
// // //                 sx={{
// // //                   mb: 2, bgcolor: "#18181b", border: "1px solid #FFD70055",
// // //                   input: { color: "#FFD700" }
// // //                 }}
// // //                 InputLabelProps={{ style: { color: "#FFD700bb" } }}
// // //               />
// // //               <TextField
// // //                 label="Password"
// // //                 type="password"
// // //                 value={password}
// // //                 required
// // //                 autoComplete="current-password"
// // //                 onChange={e => setPassword(e.target.value)}
// // //                 sx={{
// // //                   mb: 2, bgcolor: "#18181b", border: "1px solid #FFD70055",
// // //                   input: { color: "#FFD700" }
// // //                 }}
// // //                 InputLabelProps={{ style: { color: "#FFD700bb" } }}
// // //               />
// // //               {error && (
// // //                 <Typography color="error" textAlign="center">{error}</Typography>
// // //               )}
// // //               <Typography align="center" sx={{ fontSize: 14, color: "#FFD70088" }}>
// // //                 Don't have an account?{" "}
// // //                 <a href="/register" style={{ color: "#FFD700", textDecoration: 'underline' }}>Create your account</a>
// // //               </Typography>
// // //               <Button type="submit" variant="contained" sx={{
// // //                 width: "100%", height: 48, mt: 1,
// // //                 background: "linear-gradient(90deg, #FFD700 0%, #B87333 100%)",
// // //                 color: "#18181b", fontWeight: 700,
// // //                 "&:hover": { background: "#FFD700", color: "#0a0a0a" }
// // //               }}>
// // //                 Login
// // //               </Button>
// // //             </form>
// // //           </Paper>
// // //         </Grid>
// // //         {/* Information/Hero Section */}
// // //         <Grid item xs={12} md={7} sx={{
// // //           display: 'flex', flexDirection: 'column',
// // //           justifyContent: 'center', alignItems: { xs: "center", md: "flex-start" },
// // //           px: { xs: 2, md: 8 }, py: { xs: 4, md: 0 }, minHeight: { xs: "auto", md: "80vh" }
// // //         }}>
// // //           <Box sx={{ maxWidth: 590, p: { xs: 0, md: 2 } }}>
// // //             <Typography sx={{ color: '#FFD700', fontWeight: 500, fontSize: { xs: 26, md: 32 } }}>
// // //               Alchemist Grimoire
// // //             </Typography>
// // //             <Typography
// // //               variant="h2"
// // //               sx={{
// // //                 fontWeight: 700,
// // //                 fontSize: { xs: 28, sm: 34, md: 40 },
// // //                 mt: 1,
// // //                 color: "#fff",
// // //                 lineHeight: 1.13,
// // //                 mb: 2
// // //               }}
// // //             >
// // //               Medicine Reminder For Performers
// // //             </Typography>
// // //             <Typography sx={{ color: "#FFD700", fontSize: { xs: 18, md: 22 }, mb: 2, fontWeight: 700 }}>
// // //               Track. Remind. Stay Well!
// // //             </Typography>
// // //             <Typography sx={{ color: '#bbb', fontSize: { xs: 14, md: 18 }, mb: 3 }}>
// // //               Alchemist’s Grimoire is a smart wellness platform offering medicine reminders, dashboards, and holistic health tracking for improved lifestyle balance.
// // //             </Typography>
// // //             <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
// // //               <Button variant="contained" sx={{
// // //                 background: "linear-gradient(90deg, #FFD700 0%, #B87333 100%)",
// // //                 color: "#18181b", fontWeight: 700, px: 4, borderRadius: 100
// // //               }}>
// // //                 Get Started
// // //               </Button>
// // //               <Button variant="outlined" sx={{
// // //                 color: "#FFD700", borderColor: "#FFD700", ml: 2, fontWeight: 700, px: 4, borderRadius: 100,
// // //                 "&:hover": { background: "#FFD70022", borderColor: "#FFD700" }
// // //               }}>
// // //                 Documentation
// // //               </Button>
// // //             </Box>
// // //           </Box>
// // //         </Grid>
// // //       </Grid>
// // //     </Box>
// // //   );
// // // }










// // import { useState, useContext } from 'react';
// // import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
// // import { AuthContext } from '../contexts/AuthContext';

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const { login } = useContext(AuthContext);

// //   const handleLoginAuth = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     if (password.length < 6) {
// //       setError("Password must be at least 6 characters long");
// //       return;
// //     }
// //     try {
// //       await login(email, password);
// //     } catch (err) {
// //       let message = "Login failed. Please try again.";
// //       if (err.response?.data?.message) message = err.response.data.message;
// //       else if (err.message) message = err.message;
// //       setError(message);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '80vh',
// //         width: '100vw',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         position: 'relative',
// //         background: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.96)),url('/gradient.jpg') center/cover no-repeat fixed`
// //       }}
// //     >
// //       <Grid
// //         container
// //         alignItems="center"
// //         justifyContent="center"
// //         sx={{
// //           flexDirection: { xs: 'column-reverse', md: 'row' },
// //           minHeight: "80vh",
// //           maxWidth: 1850
// //         }}
// //         spacing={4}
// //       >
// //         {/* Login Form */}
// //         <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //           <Paper elevation={6} sx={{
// //             width: "100%",
// //             maxWidth: 600,
// //             p: { xs: 4, md: 8 },
// //             bgcolor: "#18181bfa",
// //             color: "#fff",
// //             border: "1.5px solid #FFD70044",
// //             boxShadow: "0 0 60px #FFD70033"
// //           }}>
// //             <Typography variant="h4" fontWeight={900} mb={4} textAlign="center" color="gold" sx={{ fontSize: { xs: 30, md: 40 } }}>
// //               Welcome Back
// //             </Typography>
// //             <Typography align="center" sx={{ color: "#FFD700bb", mb: 4, fontSize: { xs: 18, md: 22 } }}>
// //               Login with your account
// //             </Typography>
// //             <form onSubmit={handleLoginAuth} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
// //               <TextField
// //                 label="Email"
// //                 type="email"
// //                 value={email}
// //                 required
// //                 autoComplete="username"
// //                 onChange={e => setEmail(e.target.value)}
// //                 sx={{
// //                   mb: 2,
// //                   bgcolor: "#23232b",
// //                   border: "1.5px solid #FFD70099",
// //                   input: { color: "#FFD700", fontSize: 22, height: "32px", padding: "18px 12px" }
// //                 }}
// //                 InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 20 } }}
// //                 fullWidth
// //                 size="medium"
// //               />
// //               <TextField
// //                 label="Password"
// //                 type="password"
// //                 value={password}
// //                 required
// //                 autoComplete="current-password"
// //                 onChange={e => setPassword(e.target.value)}
// //                 sx={{
// //                   mb: 2,
// //                   bgcolor: "#23232b",
// //                   border: "1.5px solid #FFD70099",
// //                   input: { color: "#FFD700", fontSize: 22, height: "32px", padding: "18px 12px" }
// //                 }}
// //                 InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 20 } }}
// //                 fullWidth
// //                 size="medium"
// //               />
// //               {error && (
// //                 <Typography color="error" textAlign="center" fontSize={18}>{error}</Typography>
// //               )}
// //               <Typography align="center" sx={{ fontSize: 18, color: "#FFD70088" }}>
// //                 Don't have an account?{" "}
// //                 <a href="/register" style={{ color: "#FFD700", textDecoration: 'underline' }}>Create your account</a>
// //               </Typography>
// //               <Button type="submit" variant="contained" sx={{
// //                 width: "100%", height: 58, mt: 2,
// //                 background: "linear-gradient(90deg, #FFD700 0%, #B87333 100%)",
// //                 color: "#18181b", fontWeight: 800, fontSize: 22,
// //                 boxShadow: "0 0 16px #FFD700a3",
// //                 "&:hover": { background: "#FFD700", color: "#0a0a0a" }
// //               }}>
// //                 Login
// //               </Button>
// //             </form>
// //           </Paper>
// //         </Grid>
// //         {/* Information/Hero Section */}
// //         <Grid item xs={12} md={6} sx={{
// //           display: 'flex', flexDirection: 'column',
// //           justifyContent: 'center', alignItems: { xs: "center", md: "flex-start" },
// //           px: { xs: 2, md: 6 }, py: { xs: 4, md: 2 },
// //           minHeight: { xs: "auto", md: 740 }
// //         }}>
// //           <Box sx={{ width: "100%", maxWidth: 760, p: { xs: 0, md: 2 } }}>
// //             <Typography sx={{
// //               color: '#FFD700', fontWeight: 700, fontSize: { xs: 32, md: 52 }, mb: 2, lineHeight: 1.2
// //             }}>
// //               MEDICO
// //             </Typography>
// //             <Typography
// //               variant="h2"
// //               sx={{
// //                 fontWeight: 900,
// //                 fontSize: { xs: 28, md: 50 },
// //                 color: "#fff",
// //                 lineHeight: 1.1,
// //                 mb: 2
// //               }}
// //             >
// //                Your health, on time...
// //             </Typography>
// //             <Typography sx={{
// //               color: "#FFD700", fontSize: { xs: 22, md: 34 }, mb: 3, fontWeight: 800,
// //               letterSpacing: 0.5
// //             }}>
// //               Track. Remind. Stay Well!
// //             </Typography>
// //             <Typography sx={{
// //               color: '#bbb', fontSize: { xs: 17, md: 23 }, mb: 6, fontWeight: 500
// //             }}>
// //               Medico empowers your health journey with timely medicine reminders, personalized dashboards, and holistic tools for everyday well-being and balance.
// //             </Typography>
           
// //           </Box>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // }



// import { useState, useContext } from 'react';
// import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';
// import { AuthContext } from '../contexts/AuthContext';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useContext(AuthContext);

//   const handleLoginAuth = async (e) => {
//     e.preventDefault();
//     setError('');
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       return;
//     }
//     try {
//       await login(email, password);
//     } catch (err) {
//       let message = "Login failed. Please try again.";
//       if (err.response?.data?.message) message = err.response.data.message;
//       else if (err.message) message = err.message;
//       setError(message);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '80vh',
//         width: '100vw',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative',
//         background: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.96)),url('/gradient.jpg') center/cover no-repeat fixed`
//       }}
//     >
//       <Grid
//         container
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           flexDirection: { xs: 'column-reverse', md: 'row' },
//           minHeight: "80vh",
//           maxWidth: 1400
//         }}
//         spacing={4}
//       >
//         {/* Login Form */}
//         <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Paper elevation={6} sx={{
//             width: "100%",
//             maxWidth: 340,
//             p: { xs: 2, md: 3 },
//             bgcolor: "#18181bfa",
//             color: "#fff",
//             border: "1.5px solid #FFD70044",
//             boxShadow: "0 0 32px #FFD70033"
//           }}>
//             <Typography variant="h6" fontWeight={800} mb={2} textAlign="center" color="gold" sx={{ fontSize: { xs: 20, md: 24 } }}>
//               Welcome Back
//             </Typography>
//             <Typography align="center" sx={{ color: "#FFD700bb", mb: 2, fontSize: { xs: 13, md: 15 } }}>
//               Login with your account
//             </Typography>
//             <form onSubmit={handleLoginAuth} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//               <TextField
//                 label="Email"
//                 type="email"
//                 value={email}
//                 required
//                 autoComplete="username"
//                 onChange={e => setEmail(e.target.value)}
//                 sx={{
//                   mb: 1,
//                   bgcolor: "#23232b",
//                   border: "1.5px solid #FFD70088",
//                   input: { color: "#FFD700", fontSize: 15, height: "12px", padding: "10px 10px" }
//                 }}
//                 InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 14 } }}
//                 fullWidth
//                 size="small"
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 value={password}
//                 required
//                 autoComplete="current-password"
//                 onChange={e => setPassword(e.target.value)}
//                 sx={{
//                   mb: 1,
//                   bgcolor: "#23232b",
//                   border: "1.5px solid #FFD70088",
//                   input: { color: "#FFD700", fontSize: 15, height: "12px", padding: "10px 10px" }
//                 }}
//                 InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 14 } }}
//                 fullWidth
//                 size="small"
//               />
//               {error && (
//                 <Typography color="error" textAlign="center" fontSize={13}>{error}</Typography>
//               )}
//               <Typography align="center" sx={{ fontSize: 13, color: "#FFD70088", mt: 1 }}>
//                 Don't have an account?{" "}
//                 <a href="/register" style={{ color: "#FFD700", textDecoration: 'underline' }}>Create your account</a>
//               </Typography>
//               <Button type="submit" variant="contained" sx={{
//                 width: "100%", height: 36, mt: 1,
//                 background: "linear-gradient(90deg, #FFD700 0%, #B87333 100%)",
//                 color: "#18181b", fontWeight: 700, fontSize: 15,
//                 boxShadow: "0 0 8px #FFD70081",
//                 "&:hover": { background: "#FFD700", color: "#0a0a0a" }
//               }}>
//                 Login
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//         {/* Information/Hero Section */}
//         <Grid item xs={12} md={7} sx={{
//           display: 'flex', flexDirection: 'column',
//           justifyContent: 'center', alignItems: { xs: "center", md: "flex-start" },
//           px: { xs: 2, md: 6 }, py: { xs: 4, md: 2 },
//           minHeight: { xs: "auto", md: 740 }
//         }}>
//           <Box sx={{ width: "100%", maxWidth: 530, p: { xs: 0, md: 2 } }}>
//             <Typography sx={{
//               color: '#FFD700', fontWeight: 700, fontSize: { xs: 22, md: 28 }, mb: 1.5, lineHeight: 1.2
//             }}>
//               MEDICO
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontWeight: 900,
//                 fontSize: { xs: 16, md: 30 },
//                 color: "#fff",
//                 lineHeight: 1.1,
//                 mb: 1
//               }}
//             >
//               Your health, on time...
//             </Typography>
//             <Typography sx={{
//               color: "#FFD700", fontSize: { xs: 14, md: 18 }, mb: 1.5, fontWeight: 700,
//               letterSpacing: 0.5
//             }}>
//               Track. Remind. Stay Well!
//             </Typography>
//             <Typography sx={{
//               color: '#bbb', fontSize: { xs: 13, md: 13 }, mb: 3, fontWeight: 500
//             }}>
//               Medico empowers your health journey with timely medicine reminders, personalized dashboards, and holistic tools for everyday well-being and balance.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



import { useState, useContext } from 'react';
import { Button, TextField, Box, Typography, Paper, Grid } from '@mui/material';



import { AuthContext } from '../contexts/AuthContext';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const [error, setError] = useState('');
   const [message, setMessage] =useState('');




   const { login } = useContext(AuthContext);

  let handleLoginAuth =async (e)  => {
    e.preventDefault();
    console.log('Login in with:', { email, password });

   


      setError('');
      setMessage('');

       if (password.length < 6) {
    setError("Password must be at least 6 characters long");
    return;
  }

      try {
            let result = await login(email, password)
  

            }
          catch (err) {
            console.log(err);

  let message = "Login failed. Please try again.";

  if (err.response && err.response.data && err.response.data.message) {
    message = err.response.data.message;
  } else if (err.message) {
    message = err.message;
  }

  setError(message);
}


  };


  return (
    <Box
      sx={{
        minHeight: '80vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.96)),url('/gradient.jpg') center/cover no-repeat fixed`
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: 'column-reverse', md: 'row' },
          minHeight: "80vh",
          maxWidth: 1850
        }}
        spacing={4}
      >
        {/* Login Form */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
         <Paper elevation={6} sx={{
  width: "100%",
  maxWidth: 450, // smaller box
  p: { xs: 3, md: 5 }, // reduced padding
  bgcolor: "#18181bfa",
  color: "#fff",
  border: "1.5px solid #FFD70044",
  boxShadow: "0 0 40px #FFD70033" // lighter shadow
}}>
  <Typography variant="h4" fontWeight={900} mb={3} textAlign="center" color="gold" 
    sx={{ fontSize: { xs: 24, md: 32 } }}>
    Welcome Back
  </Typography>
  <Typography align="center" sx={{ color: "#FFD700bb", mb: 3, fontSize: { xs: 16, md: 18 } }}>
    Login with your account
  </Typography>

  <form   onSubmit={handleLoginAuth} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <TextField
      label="Email"
      type="email"
      value={email}
      required
      onChange={e => setEmail(e.target.value)}
      sx={{
        mb: 2,
        bgcolor: "#23232b",
        border: "1.5px solid #FFD70099",
        input: { color: "#FFD700", fontSize: 18, height: "26px", padding: "14px 10px" }
      }}
      InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 16 } }}
      fullWidth
    />
    <TextField
      label="Password"
      type="password"
      value={password}
      required
      onChange={e => setPassword(e.target.value)}
      sx={{
        mb: 2,
        bgcolor: "#23232b",
        border: "1.5px solid #FFD70099",
        input: { color: "#FFD700", fontSize: 18, height: "26px", padding: "14px 10px" }
      }}
      InputLabelProps={{ style: { color: "#FFD700bb", fontSize: 16 } }}
      fullWidth
    />
    {error && <Typography color="error" textAlign="center" fontSize={16}>{error}</Typography>}
    
    <Typography align="center" sx={{ fontSize: 16, color: "#FFD70088" }}>
      Don't have an account?{" "}
      <a href="/register" style={{ color: "#FFD700", textDecoration: 'underline' }}>Create your account</a>
    </Typography>

    <Button type="submit" variant="contained" sx={{
      width: "100%", height: 48, mt: 2,
      background: "linear-gradient(90deg, #FFD700 0%, #B87333 100%)",
      color: "#18181b", fontWeight: 700, fontSize: 18,
      boxShadow: "0 0 12px #FFD700a3",
      "&:hover": { background: "#FFD700", color: "#0a0a0a" }
    }}>
      Login
    </Button>
  </form>
</Paper>

        </Grid>
        {/* Information/Hero Section */}
        <Grid item xs={12} md={6} sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: { xs: "center", md: "flex-start" },
          px: { xs: 2, md: 6 }, py: { xs: 4, md: 2 },
          minHeight: { xs: "auto", md: 740 }
        }}>
          <Box sx={{ width: "100%", maxWidth: 760, p: { xs: 0, md: 2 } }}>
            <Typography sx={{
              color: '#FFD700', fontWeight: 700, fontSize: { xs: 32, md: 52 }, mb: 2, lineHeight: 1.2
            }}>
              MEDICO
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: 34, md: 58 },
                color: "#fff",
                lineHeight: 1.1,
                mb: 2
              }}
            >
              Your health, on time...
            </Typography>
            <Typography sx={{
              color: "#FFD700", fontSize: { xs: 22, md: 34 }, mb: 3, fontWeight: 800,
              letterSpacing: 0.5
            }}>
              Track. Remind. Stay Well!
            </Typography>
            <Typography sx={{
              color: '#bbb', fontSize: { xs: 17, md: 23 }, mb: 6, fontWeight: 500
            }}>
              Medico empowers your health journey with timely medicine reminders, personalized dashboards, and holistic tools for everyday well-being and balance.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
