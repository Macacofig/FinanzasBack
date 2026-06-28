import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly repository: Repository<CategoriaEntity>
    ) {}

    async obtenerCategorias() {
        return this.repository.find({
            order: {
                nombre: "ASC"
            }
        });
    }

}
