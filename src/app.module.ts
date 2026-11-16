import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { CakeModule } from './cake/cake.module.js';
import { DrinksModule } from './drinks/drinks.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CakeModule, DrinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
