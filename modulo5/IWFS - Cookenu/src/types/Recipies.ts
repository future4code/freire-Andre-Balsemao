export class Recipies {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private date: Date,
      private user_id: string
    ) {}
    public getId() {
      return this.id;
    }
    public getTitle() {
      return this.title;
    }
    public getDescription() {
      return this.description;
    }
    public getDate() {
      return this.date;
    }

    public getUser_id(){
      return this.user_id;
    }
  
    static toRecipieModel(data: any): Recipies {
      return new Recipies(data.id, data.title, data.description, data.date, data.user_id);
    }
  }