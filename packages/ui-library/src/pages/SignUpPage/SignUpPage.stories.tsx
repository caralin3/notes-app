import { action, type Story, type StoryDefault } from '@ladle/react';
import Link from '@mui/material/Link';

import { SignUpPage } from './SignUpPage';

export default {
  title: 'Pages',
} satisfies StoryDefault;

export const SignUpPageStory: Story = () => (
  <SignUpPage
    addUser={action('Add User')}
    onSignUp={async (email: string) => {
      action('Sign Up');
      return Promise.resolve({
        success: true,
        user: { email, uid: 'generated-uid' },
        error: null,
      });
    }}
    signInLink={<Link href="/sign-in">Sign In</Link>}
  />
);

SignUpPageStory.storyName = 'Sign Up Page';
