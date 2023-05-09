import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { AppService } from './app.service';
import { GetByIntIdDto } from './dto/get-by-int-id.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Get('/test')
  getTest(): string {
    return 'test12356';
  }
  @Get('/products/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  // @ApiParam({ name: 'id', type: Number })
  getProduct(@Param() dto: GetByIntIdDto): number {
    console.log('dto', dto);
    const id = +dto.id;
    // if (isNaN(id)) return 0;
    // return +dto.id * 2;
    return id * 2;
  }
}
