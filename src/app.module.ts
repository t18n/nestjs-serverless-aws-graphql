import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      definitions: {
        path: join(process.cwd(), '/src/schemas/graphql.schema.d.ts'),
      },
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
