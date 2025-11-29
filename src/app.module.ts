import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './activities/PersonActivity/person.controller';
import { PersonService } from './activities/PersonActivity/person.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}
