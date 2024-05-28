import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
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
      </ul>
    </div>
  );
};

export default HomePage;
