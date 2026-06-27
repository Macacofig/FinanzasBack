import { Injectable } from '@nestjs/common';
import { CrearMovimientoDto } from './CrearMovimientoDto';
import { ActualizarMovimientoDto } from './ActualizarMovimientoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimientoEntity } from './movimiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovimientoService {

    constructor(

        @InjectRepository(MovimientoEntity)

        private readonly repository: Repository<MovimientoEntity>

    ) {}

    async registrarMovimiento(dto: CrearMovimientoDto) {

        const movimiento = this.repository.create(dto);

        return await this.repository.save(movimiento);

    }

    async obtenerMovimientos() {

        return await this.repository.find({
            order: {
                fecha: "DESC"
            }
        });

    }

    async obtenerMovimiento(id: number) {

        return await this.repository.findOneBy({
            id
        });

    }

    async actualizarMovimiento(id: number,dto: ActualizarMovimientoDto) {

        await this.repository.update(id, dto);
        return this.obtenerMovimiento(id);
    }

    async eliminarMovimiento(id: number) {

        await this.repository.delete(id);
        return {
            mensaje: "Movimiento eliminado"
        };

    }

}