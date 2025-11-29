import { Injectable } from "@nestjs/common"
import { Person } from "./Person";

@Injectable()
export class PersonService {
  getPeople(): Person[] {
    const person = new Person();
    person.id = 1;
    person.name = 'John Doe';
    return [person];
  }
}