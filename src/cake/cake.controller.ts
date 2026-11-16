import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CakeService } from './cake.service.js';
import { CreateCakeDto } from './dto/create-cake.dto.js';
import { UpdateCakeDto } from './dto/update-cake.dto.js';

@Controller('cake')
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @Post()
  create(@Body() createCakeDto: CreateCakeDto) {
    return this.cakeService.create(createCakeDto);
  }

  @Get()
  findAll() {
    return this.cakeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.cakeService.findOne(+id);
    } catch {
      throw new NotFoundException("No cake with this ID!")
  }
}

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    try{
      return await this.cakeService.update(+id, updateCakeDto);
    } catch {
      throw new NotFoundException("No cake with this ID!")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.cakeService.remove(+id);
    } catch {
      throw new NotFoundException("No cake with this ID!")
    }
    
  }
}
