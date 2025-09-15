import { createFileRoute } from '@tanstack/react-router';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  Alert,
  Paper,
} from '@mui/material';
import {
  Login as LoginIcon,
  Email as EmailIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
});

// Validation schema with Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function LoginPage() {
  const handleSubmit = (values: { email: string; password: string }) => {
    // As specified in the guide - just console.log for now
    console.log('Login form values:', values);
    
    // Show success message for demo
    alert('Login successful! (Demo mode - check console for values)');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <LoginIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Welcome Back
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Sign in to your MoodRecommender account
        </Typography>
      </Box>

      {/* Login Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Email Field */}
                  <Box>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email Address"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      InputProps={{
                        startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          paddingLeft: 1,
                        }
                      }}
                    />
                  </Box>

                  {/* Password Field */}
                  <Box>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          paddingLeft: 1,
                        }
                      }}
                    />
                  </Box>

                  {/* Demo Notice */}
                  <Alert severity="info" sx={{ mt: 2 }}>
                    <Typography variant="body2">
                      <strong>Demo Mode:</strong> This is a demonstration. Form values will be logged to console.
                    </Typography>
                  </Alert>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #7B68EE 0%, #98D8C8 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5A4FCF 0%, #7BC4B4 100%)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                  </Button>

                  {/* Forgot Password Link */}
                  <Box sx={{ textAlign: 'center' }}>
                    <Link 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset functionality coming soon!');
                      }}
                      sx={{ 
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        }
                      }}
                    >
                      Forgot your password?
                    </Link>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>

      {/* Sign Up Link */}
      <Paper 
        sx={{ 
          p: 3, 
          mt: 3, 
          textAlign: 'center',
          bgcolor: 'background.default'
        }}
      >
        <Typography variant="body1">
          Don't have an account?{' '}
          <Link 
            href="/auth/signup"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >
            Sign up here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
