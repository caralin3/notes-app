import { action, type Story, type StoryDefault } from '@ladle/react';

import { SignInPage } from './SignInPage';
import Link from '@mui/material/Link';

export default {
  title: 'Pages',
} satisfies StoryDefault;

export const SignInPageStory: Story = () => (
  <SignInPage
    onSignIn={async (email: string, password: string) => {
      action('Sign In');
      return Promise.resolve({
        success: true,
        user: { email, uid: 'generated-uid' },
        error: null,
      });
    }}
    onSubmit={action('Submit')}
    signInLink={<Link href="/sign-up">Sign Up</Link>}
  />
);

SignInPageStory.storyName = 'Sign In Page';
