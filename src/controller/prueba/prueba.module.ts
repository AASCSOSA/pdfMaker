import { Module } from '@nestjs/common';
import { PruebaService } from './prueba.service';

@Module({
  providers: [PruebaService],
  exports: [PruebaService],
})
export class PruebaModule {}
