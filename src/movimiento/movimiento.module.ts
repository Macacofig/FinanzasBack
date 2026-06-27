import { Module } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoEntity } from './movimiento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MovimientoEntity
    ])
  ],
  providers: [MovimientoService],
  controllers: [MovimientoController]
})
export class MovimientoModule {}
