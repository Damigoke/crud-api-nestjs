interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
}