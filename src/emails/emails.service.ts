import { Email } from './entities/email.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';
import { Repository } from 'typeorm';
import { validateOrReject } from 'class-validator';

@Injectable()
export class EmailsService {
  constructor(
    @InjectRepository(Email) private emailRepository: Repository<Email>,
  ) {}

  async create(createEmailInput: CreateEmailInput): Promise<Email> {
    const createEmail = new Email();
    Object.assign(createEmail, createEmailInput);
    await validateOrReject(createEmail);
    return await this.emailRepository.save(createEmail);
  }

  async findAll(): Promise<Email[]> {
    return await this.emailRepository.find();
  }

  async findOne(email: string): Promise<Email> {
    return await this.emailRepository.findOne({ email });
  }

  async update({ email, name }: UpdateEmailInput): Promise<Email> {
    const updateEmail = await this.findOne(email);
    updateEmail.name = name;
    await validateOrReject(updateEmail);
    return await this.emailRepository.save(updateEmail);
  }

  async remove(email: string): Promise<void> {
    await this.emailRepository.delete({ email });
  }
}
