import { connection } from "..";

export default async function selectUserById(id: string) {
  const result = await connection(`ToDoListUser`).select("*").where({ id });

  return result[0];
}
