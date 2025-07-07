'use client'

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">500 - Internal Server Error</h1>
      <p className="text-lg">An error occurred while processing your request.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">Go back to the home page</Link>
    </div>
  );
}