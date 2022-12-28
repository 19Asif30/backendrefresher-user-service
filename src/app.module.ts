import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './submodules/backend-refresher-1.0-entities/src/entities/user.entity';
import { UserModule } from './modules/user/user.module';
import { Content } from './submodules/backend-refresher-1.0-entities/src/entities/content.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '19asifani30',
      database: 'backend-social-media',
      entities: [User, Content],
      synchronize: true,
      logging: false
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
