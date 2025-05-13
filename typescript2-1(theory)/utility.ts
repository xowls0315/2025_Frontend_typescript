type User2 = { name: string; age: number; gender: "male" | "female" };
type User3 = { name?: string; age?: number; gender?: "male" | "female" };

type A1 = Partial<User2>;
type B1 = Required<User3>;
type C1 = Pick<User2, "name">;
type D1 = Omit<User2, "name">; //

type Role = "admin" | "user" | "superuser"; // "admin" | "user" | "superuser"
type E1 = Record<Role, boolean>; // { admin: boolean; user: boolean; superuser: boolean }
