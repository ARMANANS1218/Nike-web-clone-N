import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="my-10">
          <Image src="/assets/logo.svg" alt="logo" width={300} height={200} />
        </div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="text-custom-lime  transition-all duration-300 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
