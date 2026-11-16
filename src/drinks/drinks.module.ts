import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service.js';
import { DrinksController } from './drinks.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [PrismaService],
  controllers: [DrinksController],
  providers: [DrinksService],
})
export class DrinksModule {}
