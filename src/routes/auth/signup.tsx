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
  PersonAdd as SignupIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export const Route = createFileRoute('/auth/signup')({
  component: SignupPage,
});

// Validation schema with Yup
const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignupPage() {
  const handleSubmit = (values: SignupFormValues) => {
    // As specified in the guide - just console.log for now
    console.log('Signup form values:', values);
    
    // Show success message for demo
    alert('Account created successfully! (Demo mode - check console for values)');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <SignupIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Join MoodRecommender
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Create your account to start discovering personalized content
        </Typography>
      </Box>

      {/* Signup Card */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Name Field */}
                  <Box>
                    <TextField
                      fullWidth
                      name="name"
                      label="Full Name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      InputProps={{
                        startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />,
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          paddingLeft: 1,
                        }
                      }}
                    />
                  </Box>

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

                  {/* Confirm Password Field */}
                  <Box>
                    <TextField
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
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
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>

      {/* Sign In Link */}
      <Paper 
        sx={{ 
          p: 3, 
          mt: 3, 
          textAlign: 'center',
          bgcolor: 'background.default'
        }}
      >
        <Typography variant="body1">
          Already have an account?{' '}
          <Link 
            href="/auth/login"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >
            Sign in here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
