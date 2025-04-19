import { useMemo, useState } from 'react';

import { Box, Container, Link, Paper, Stack, Typography } from '@mui/material';

import { SignInPageProps } from './SignInPage.types';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';

export function SignInPage({
  onSignIn,
  onSubmit,
  signInLink,
}: SignInPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = () => {
    setSubmitted(false);
    setError(null);
  };

  const isFormValid = useMemo(() => {
    if (!email || !password) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
    return true;
  }, [email, password]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isFormValid) {
      return;
    }

    setSubmitted(true);
    setLoading(true);

    try {
      const { success, error, user } = await onSignIn(email, password);
      if (!success) {
        setError(error);
      }

      if (success && !!user && !!user.email) {
        onSubmit({
          email: user.email,
          uid: user.uid,
        });
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
              Sign In
            </Typography>
            <Typography variant="body2">
              Welcome back, please sign in below
            </Typography>
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
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              <Stack pt={1} spacing={2}>
                <Button
                  label="Sign In"
                  variant="contained"
                  type="submit"
                  disabled={loading || !isFormValid}
                />
                <Typography variant="body2" align="center">
                  Don&apos;t have an account yet?
                  <Link
                    component="span"
                    variant="body2"
                    sx={{ display: 'block' }}>
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
