export class SingUpFrom {
  private name!: string;
  private email!: string;
  private avatar!: string;
  private username!: string;
  private password!: string;
  private roles!: string[];

  constructor(username: string, password: string, email: string, name: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.roles = ['user']
  }
}
