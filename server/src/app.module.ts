import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { ResolverModule } from './resolvers/resolver.module';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    ResolverModule,
    AppResolver,
    GraphQLModule.forRoot({
      driver: ApolloDriver, 
      autoSchemaFile: 'schema.gql',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}