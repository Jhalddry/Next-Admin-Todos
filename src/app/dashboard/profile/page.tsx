'use client'

import { useSession } from "next-auth/react";

export default function ProfilePage() {

  const { data: session } = useSession()

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />

      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Avatar"}</span>
        <span>{session?.user?.id ?? "No UUID"}</span>
        <span>{session?.user?.roles ?? "No Roles"}</span>
      </div>
    </div>
  );
}