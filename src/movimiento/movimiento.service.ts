import { Injectable } from '@nestjs/common';
import { CrearMovimientoDto } from './CrearMovimientoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimientoEntity } from './movimiento.entity';
import { Repository } from 'typeorm';
import { CategoriaEntity } from 'src/categoria/categoria.entity';
import { CompletarMovimientoDto } from './CompletarMovimientoDto';

@Injectable()
export class MovimientoService {

    constructor(

        @InjectRepository(MovimientoEntity)
        private readonly movimientoRepository: Repository<MovimientoEntity>,

        @InjectRepository(CategoriaEntity)
        private readonly categoriaRepository: Repository<CategoriaEntity>
    ) {}

    async registrarMovimiento(dto: CrearMovimientoDto) {

        const movimiento = this.movimientoRepository.create({
            titulo: undefined,
            monto: dto.monto,
            tipo: dto.tipo,   
            categoria: undefined,
            descripcion: undefined,
            fecha: dto.fecha,
            completado: false
        })

        return this.movimientoRepository.save(movimiento);
    }

    async obtenerMovimientos() {

        return this.movimientoRepository.find({
            relations: {
                categoria: true
            },
            order: {
                fecha: "DESC"
            }
        });

    }

    async obtenerMovimiento(id:number){

        return this.movimientoRepository.findOne({

            where:{id},

            relations:{
                categoria:true
            }

        });

    }

    async completarMovimiento(
        id:number,
        dto:CompletarMovimientoDto
    ){
        const movimiento = await this.movimientoRepository.findOne({
            where:{id},
            relations:{
                categoria:true
            }
        });

        if(!movimiento)
            return null;

        if(dto.categoriaId){

            const categoria = await this.categoriaRepository.findOneBy({
                id:dto.categoriaId
            });

            movimiento.categoria = categoria ?? undefined;
        }

        movimiento.titulo = dto.titulo;
        movimiento.descripcion = dto.descripcion;
        movimiento.completado = true;

        return this.movimientoRepository.save(movimiento);
    }

    async eliminarMovimiento(id: number) {

        await this.movimientoRepository.delete(id);
        return {
            mensaje: "Movimiento eliminado"
        };

    }

}