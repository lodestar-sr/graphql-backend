import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CarModule } from './modules/car/car.module';
import { OfficeModule } from './modules/office/office.module';
import { BookingModule } from './modules/booking/booking.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
      typePaths: ['./**/*.gql'],
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    UserModule,
    CarModule,
    OfficeModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
