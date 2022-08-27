import { connection } from "..";

export default async function inserUser(
  id: string,
  name: string,
  nickname: string,
  email: string
) {
  await connection
    .insert({
      id,
      name,
      nickname,
      email,
    })
    .into(`TodoListUser`);
}
