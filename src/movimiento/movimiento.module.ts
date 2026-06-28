import { Module } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { MovimientoController } from './movimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoEntity } from './movimiento.entity';
import { CategoriaEntity } from 'src/categoria/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MovimientoEntity,
      CategoriaEntity
    ])
  ],
  providers: [MovimientoService],
  controllers: [MovimientoController]
})
export class MovimientoModule {}
