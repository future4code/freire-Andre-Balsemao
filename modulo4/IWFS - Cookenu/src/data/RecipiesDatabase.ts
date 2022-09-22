import { Recipies } from "../types/Recipies";
import { BaseDatabase } from "./BaseDatabase";

export class RecipiesDatabase extends BaseDatabase {
  public async createRecipie(recipies: Recipies) {
    try {
      await BaseDatabase.connection("cookenu_recipies").insert({
        id: recipies.getId(),
        title: recipies.getTitle(),
        description: recipies.getDescription(),
        date: recipies.getDate(),
        user_id: recipies.getUser_id(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getRecipiesById(id: string): Promise<Recipies> {
    try {
      const recipie = await BaseDatabase.connection('cookenu_recipies')
        .select("*")
        .where({ id });

      return recipie[0] && Recipies.toRecipieModel(recipie[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
