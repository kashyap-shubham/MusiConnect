export async function getCurrentUser() {
  const res = await fetch("http://localhost:3001/api/auth/me", {
    credentials: "include",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.data;
}

export async function logout() {
  await fetch("http://localhost:3001/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}