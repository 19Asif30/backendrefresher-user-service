/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '19asifani30',
      database: 'backend-socialmedia',
      entities: [User] ,
      synchronize: false,
      logging: true
    }),
    UserModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
