
import { NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const provider = url.searchParams.get('provider');
  const site_id = url.searchParams.get('site_id');
  const scope = url.searchParams.get('scope');

  if (provider === 'github' && code) {
    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.access_token) {
        // Redirect back to Decap CMS with the access token
        const redirectUrl = `/#access_token=${tokenData.access_token}&provider=github`;
        return NextResponse.redirect(new URL(redirectUrl, url.origin));
      } else {
        console.error('GitHub token exchange failed:', tokenData);
        return new NextResponse('GitHub authentication failed.', { status: 400 });
      }
    } catch (error) {
      console.error('Error during GitHub authentication:', error);
      return new NextResponse('Internal server error during authentication.', { status: 500 });
    }
  } else if (provider === 'github') {
    // Initial redirect to GitHub for authorization
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo`;
    return NextResponse.redirect(githubAuthUrl);
  }

  return new NextResponse('Invalid authentication request.', { status: 400 });
}
