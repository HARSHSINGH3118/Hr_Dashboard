// Server-shared in-memory users cache (avoids isolated worker reset)
if (!globalThis.users) globalThis.users = [];

export function addUser(user) {
  globalThis.users.push(user);
}

export function findUserByEmail(email) {
  return globalThis.users.find((u) => u.email === email);
}
