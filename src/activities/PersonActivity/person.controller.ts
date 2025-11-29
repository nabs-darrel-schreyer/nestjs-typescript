import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './Person';

@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get("people")
  getPeople(): Person[] {
    return this.personService.getPeople();
  }
}



