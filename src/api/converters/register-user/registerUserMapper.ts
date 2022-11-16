import type { RegisterUserDto } from "@/api/converters/register-user/RegisterUser.dto";

export const mapRegisterUserDtoToDao = (registerUserDto: RegisterUserDto) => ({
  first_name: registerUserDto.firstName,
  last_name: registerUserDto.lastName,
  email: registerUserDto.email,
  password: registerUserDto.password,
});
