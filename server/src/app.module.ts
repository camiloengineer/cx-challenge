import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { SECRET_KEY } from './config/config';
import { ResolverModule } from './resolvers/resolver.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: SECRET_KEY,
      signOptions: { expiresIn: '10h' },
    }),
    ResolverModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
