import { redirect } from "next/navigation";

import { getCurrentUserServer } from "@/lib/api/server-auth.api";

import { headers } from "next/headers";

export default async function AuthLayout({

  children,

}: {

  children: React.ReactNode

}) {

  const cookie = (await headers()).get("cookie");

  const user = cookie
    ? await getCurrentUserServer(cookie)
    : null;

  if (user) {

    redirect("/explore");

  }

  return (

    <main
      className="
        flex

        min-h-screen

        items-center
        justify-center

        bg-white

        px-4
        py-6

        sm:px-6
      "
    >

      <div
        className="
          w-full

          max-w-md
        "
      >

        {children}

      </div>

    </main>

  );

}