import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'task.sqlite',
      entities: [Task],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
