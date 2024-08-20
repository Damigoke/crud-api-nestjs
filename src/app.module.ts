import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './schema/User.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crud_api_database',
      models: [User],
      retryAttempts: 4,
      // autoLoadModels:true,
      
      
    }),
    UsersModule

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';

// @Module({
//   imports: [
//     SequelizeModule.forRoot({
//       dialect: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'test',
//       models: [],
//     }),
//   ],
// })
// export class AppModule {}
