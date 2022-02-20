import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class Book {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field(Int)
  price: number;

  @Field()
  createdAt: Date;
}
