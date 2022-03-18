export class CreateUserDto {
  email: string;
  password: string;
  isAdmin: boolean;
  favorites: object;
  my_events: object;
}
