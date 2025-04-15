import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

export async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}

export async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
  } catch (err) {
    console.log(err);
  }
}

export const amplifyHubListener = (payload: { event: string }) => {
  switch (payload.event) {
    case 'signedIn':
      console.log('user have been signedIn successfully.');
      break;
    case 'signedOut':
      console.log('user have been signedOut successfully.');
      break;
    case 'tokenRefresh':
      console.log('auth tokens have been refreshed.');
      break;
    case 'tokenRefresh_failure':
      console.log('failure while refreshing auth tokens.');
      break;
    case 'signInWithRedirect':
      console.log('signInWithRedirect API has successfully been resolved.');
      break;
    case 'signInWithRedirect_failure':
      console.log('failure while trying to resolve signInWithRedirect API.');
      break;
    // case 'customOAuthState':
    //   logger.info('custom state returned from CognitoHosted UI');
    //   break;
  }
};
