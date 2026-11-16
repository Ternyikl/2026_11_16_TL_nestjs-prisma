import { Module } from '@nestjs/common';
import { CakeService } from './cake.service.js';
import { CakeController } from './cake.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [CakeController],
  providers: [CakeService],
})
export class CakeModule {}
