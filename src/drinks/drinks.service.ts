import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto.js';
import { UpdateDrinkDto } from './dto/update-drink.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DrinksService {

  constructor (private readonly db: PrismaService){
    
  }

  create(createDrinkDto: CreateDrinkDto) {
    return this.db.drinks.create({
      data: createDrinkDto
    })
  }

  findAll() {
    return this.db.drinks.findMany();
  }

  findOne(id: number) {
    return this.db.drinks.findFirstOrThrow({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return this.db.drinks.update({
      data: updateDrinkDto,
      where: {id}
    })
  }

  remove(id: number) {
    return this.db.drinks.delete({
      where: {
        id: id
      }
    });
  }
}
