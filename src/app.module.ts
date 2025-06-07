import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { NotificationsModule } from './notifications/notifications.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: true,
  }),
  NotificationsModule,


  ],
controllers: [AppController],
providers: [AppService],

})


export class AppModule {}



