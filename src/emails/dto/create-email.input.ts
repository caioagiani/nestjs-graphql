import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
