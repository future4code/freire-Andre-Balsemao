import { connection } from "..";

export default async function updateUser(
  id: string,
  name?: string,
  nickname?: string,
  email?: string
) {
  if (name) {
    await connection.raw(`
            UPDATE TodoListUser
            SET name = '${name}'
            WHERE id = '${id}';
        `);
  }
  if (nickname) {
    await connection.raw(`
            UPDATE TodoListUser
            SET name = '${nickname}'
            WHERE id = '${id}';
        `);
  }
  if (email) {
    await connection.raw(`
            UPDATE TodoListUser
            SET name = '${email}'
            WHERE id = '${id}';
        `);
  }
}
