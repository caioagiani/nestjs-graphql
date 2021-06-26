import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailsService } from './emails.service';
import { Email } from './entities/email.entity';
import { CreateEmailInput } from './dto/create-email.input';
import { UpdateEmailInput } from './dto/update-email.input';

@Resolver(() => Email)
export class EmailsResolver {
  constructor(private readonly emailsService: EmailsService) {}

  @Mutation(() => Email)
  createEmail(@Args('createEmailInput') createEmailInput: CreateEmailInput) {
    return this.emailsService.create(createEmailInput);
  }

  @Query(() => [Email], { name: 'emails' })
  findAll() {
    return this.emailsService.findAll();
  }

  @Query(() => Email, { name: 'email' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.emailsService.findOne(id);
  }

  @Mutation(() => Email)
  updateEmail(@Args('updateEmailInput') updateEmailInput: UpdateEmailInput) {
    return this.emailsService.update(updateEmailInput.id, updateEmailInput);
  }

  @Mutation(() => Email)
  removeEmail(@Args('id', { type: () => Int }) id: number) {
    return this.emailsService.remove(id);
  }
}
