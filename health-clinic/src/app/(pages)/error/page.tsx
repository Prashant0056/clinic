"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const [errorCode, setErrorCode] = useState<string | null>(null);

  useEffect(() => {
    const code = searchParams.get('code');  // Extract the 'code' query parameter
    if (code) {
      setErrorCode(code);
    }
  }, [searchParams]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Error Page</h1>
      {errorCode ? (
        <>
          <p>An error occurred with code: <strong>{errorCode}</strong></p>
          <p>Please try again or contact support if the issue persists.</p>
        </>
      ) : (
        <p>No error code provided.</p>
      )}
    </div>
  );
};

export default ErrorPage;
