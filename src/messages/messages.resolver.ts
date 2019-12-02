import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  // Get actual data from database
  messagesData = [
    { id: 1, description: 'Message number 1' },
    { id: 2, description: 'Message number 2' },
    { id: 3, description: 'Message number 3' },
    { id: 4, description: 'Message number 4' },
  ];

  @Query()
  messages() {
    return this.messagesData;
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    const id = this.messagesData.length;
    const newMessage = { id, description };
    this.messagesData.push(newMessage);
    return newMessage;
  }
}
