import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });
  const url = request.nextUrl;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_CLIENT_API_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  if (url.pathname === '/forgot-password/update') {
    const code = url.searchParams.get('code');
    if (!code) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/login';
      return NextResponse.redirect(redirectUrl);
    }

    // Exchange the code for a session
    const { data: sessionData, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError) {
      console.error("Error while exchanging code for session: " + sessionError.message);
      // return NextResponse.redirect('/error'); // Redirect to an error page
    }

    // Check if session data exists
    if (!sessionData) {
      console.error("Session data is missing after code exchange.");
      // return NextResponse.redirect('/error'); // Redirect to an error page
    }
  }

  // Retrieve the user after ensuring session is set
  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData?.user;

  if (userError) {
    console.error('Error fetching user: ' + userError.message);
  } else {
    console.log("This is the user: ", user);
  }

  if (!user && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/auth')) {
    // No user, redirect to login page
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/login';
    return NextResponse.redirect(redirectUrl);
  }

  return supabaseResponse;
}
