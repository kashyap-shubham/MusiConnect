"use client";

export default function SignInPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="rounded-xl border border-neutral-800 p-8 text-center">
        <h1 className="mb-6 text-2xl font-semibold">
          Sign in to MusiConnect
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="rounded-md bg-white px-6 py-3 font-medium text-black hover:bg-neutral-200"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}