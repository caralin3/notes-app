import { Box, Container, Link, Paper, Stack, Typography } from '@mui/material';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { SignUpPageProps } from './SignUpPage.types';
import { useMemo, useState } from 'react';

export function SignUpPage({ addUser, onSignUp, signInLink }: SignUpPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = () => {
    setSubmitted(false);
    setError(null);
  };

  const isFormValid = useMemo(() => {
    if (!email || !password || !confirmPassword) {
      return false;
    }
    if (password !== confirmPassword) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
    return true;
  }, [email, password, confirmPassword]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isFormValid) {
      return;
    }

    setSubmitted(true);
    setLoading(true);

    try {
      const { success, error, user } = await onSignUp(email, password);
      if (!success) {
        setError(error);
      }

      if (success && !!user && !!user.email) {
        addUser({ email: user.email, uid: user.uid });
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Stack spacing={2} alignItems="center">
            <Typography component="h1" variant="h5" fontWeight="bold">
              Sign Up
            </Typography>
            <Typography variant="body2">Create a new account below</Typography>
            <Stack
              spacing={2}
              component="form"
              width="100%"
              onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleChange();
                }}
                value={email}
              />
              <TextField
                label="Password"
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleChange();
                }}
                value={password}
                error={submitted && password.length < 6}
                helperText={
                  submitted && password.length < 6
                    ? 'Password must be at least 6 characters long'
                    : undefined
                }
              />
              <TextField
                label="Confirm Password"
                type="password"
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleChange();
                }}
                value={confirmPassword}
                error={password !== confirmPassword}
                helperText={
                  password !== confirmPassword
                    ? 'Passwords do not match'
                    : undefined
                }
              />
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              <Stack pt={1} spacing={2}>
                <Button
                  label="Sign Up"
                  variant="contained"
                  type="submit"
                  disabled={loading || !isFormValid}
                />
                <Typography variant="body2" align="center">
                  Already have an account?
                  <Link component="p" variant="body2">
                    {signInLink}
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
