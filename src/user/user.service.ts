import { Injectable } from '@nestjs/common';
import { CreateUserDto , LoginUserDto, UpdateUserDto } from './dto/user.dto';


@Injectable()
export class UserService {
  login(loginUserDto: LoginUserDto): Promise<string> {
    throw new Error('Method not implemented.');
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  delete(id: number) {
    return `This action removes a #${id} user`;
  }
}
