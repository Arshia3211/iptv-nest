import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { generateToken } from '../utils/token';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserDto.email },
      select: ['id', 'email', 'password'], 
    });

  if (!user) {
    throw new UnauthorizedException('Invalid credentials');
  }

  if (user.password !== loginUserDto.password) {
    throw new UnauthorizedException('Invalid credentials');
  }
  return generateToken(user);
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
     try {
    const users = await this.userRepository.find();
    console.log(users);
    return users;
  } catch (error) {
    console.error('ERROR:', error);
    throw error;
  }
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id }
    });
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }
  async delete(id: number) {
    await this.userRepository.delete(id);
    return { message: `User #${id} deleted` };
  }
}