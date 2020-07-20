export class Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  constructor(name: string, image: string, description: string) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}
