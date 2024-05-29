//pages/indx.tsx

import React from "react";
import Link from "next/link";
import Head from "next/head";
import SignInButton from "../components/SignInButton"

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>NextAuth.js Example</title>
        <meta name="description" content="NextAuth.js example with Google OAuth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Choose your overlay</h1>
      <ul>
        <li>
          <Link href="/Screenshot_1.png">Overlay 1</Link>
        </li>
        <li>
          <Link href="/Screenshot_2.png">Overlay 2</Link>
        </li>
        <li>
          <Link href="/overlay">Overlay page</Link>
        </li>
        <li>
          <Link href="/overlay2">Overlay2 page</Link>
        </li>
        <div>
          <h1>Welcome to NextAuth.js Example</h1>
          <SignInButton />
        </div>
      </ul>
    </div>
  );
};

export default HomePage;
