import { Test, TestingModule } from '@nestjs/testing';
import { CakeController } from './cake.controller.js';
import { CakeService } from './cake.service.js';

describe('CakeController', () => {
  let controller: CakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CakeController],
      providers: [CakeService],
    }).compile();

    controller = module.get<CakeController>(CakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
