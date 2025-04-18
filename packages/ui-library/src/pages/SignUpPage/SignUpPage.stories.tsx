import { action, type Story, type StoryDefault } from '@ladle/react';
import { Stack, Typography } from '@mui/material';

import { SignUpPage } from './SignUpPage';

export default {
  title: 'Pages',
} satisfies StoryDefault;

export const SignUpPageStory: Story = () => (
  <SignUpPage
    addUser={action('Add User')}
    onSignUp={async (email: string, password: string) => {
      action('Sign Up');
      return Promise.resolve({
        success: true,
        user: { email, uid: 'generated-uid' },
        error: null,
      });
    }}
    signInLink=""
  />
);

SignUpPageStory.storyName = 'Sign Up Page';
