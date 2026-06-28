import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CrearCategoriaDto } from './CrearCategoriaDto';

@Controller("categoria")
export class CategoriaController {

    constructor(
        private readonly categoriaService: CategoriaService
    ) {}

    @Get()
    obtenerCategorias(){
        return this.categoriaService.obtenerCategorias();
    }

    @Post()
    crearCategoria(
        @Body() dto: CrearCategoriaDto
    ){
        return this.categoriaService.crearCategoria(dto);
    }


}
