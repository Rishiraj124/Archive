'use client';

import { Button } from '@/components/Button';
import Input from '@/components/Input';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();

  async function handleLogin(e: any) {
    e.preventDefault();
    setIsSigningIn(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log({ error, data });
    if (!error) {
      router.push('/pages/events/create');
    } else {
      setIsSigningIn(false);
    }
  }

  async function handleSignUp(e: any) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) {
      setIsSigningUp(true);
    }
    console.log({ data, error });
  }

  let signInMessage = 'Sign In';

  if (isSigningIn) {
    signInMessage = 'Signing In';
  } else if (isNewUser) {
    signInMessage = 'Sign Up';
  }

  const signUpMessage = <p>Email sent! Check your email to confirm sign up.</p>;

  return (
    <form onSubmit={isNewUser ? handleSignUp : handleLogin} className="">
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
        placeholder="Email"
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        placeholder="Password"
      />
      <Button type="submit">{signInMessage}</Button>
      <div>
        {isNewUser ? (
          <span style={{ color: 'black' }}>
            Already have an account?{' '}
            <h3
              style={{ cursor: 'pointer', display: 'inline', color: 'blue' }}
              onClick={() => setIsNewUser(false)}
            >
              Sign In
            </h3>
          </span>
        ) : (
          <>
            <span style={{ color: 'black' }}>
              Don&apos;t have an account?
              <h3
                style={{ cursor: 'pointer', display: 'inline', color: 'blue' }}
                onClick={() => setIsNewUser(true)}
              >
                Sign Up
              </h3>
            </span>
          </>
        )}
      </div>
      {isSigningUp && signUpMessage}
    </form>
  );
}
