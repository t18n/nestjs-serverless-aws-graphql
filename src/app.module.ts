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
      tracing: true,
      engine: {
        apiKey: process.env.APOLLO_ENGINE_API_KEY,
      },
    }),
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
