import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import {CrearMovimientoDto} from './CrearMovimientoDto';
import { ParseIntPipe } from '@nestjs/common';
import { CompletarMovimientoDto } from './CompletarMovimientoDto';
@Controller('movimiento')
export class MovimientoController {

    constructor(
        private readonly movimientoService: MovimientoService
    ) {}

    @Post()
    registrarMovimiento(
        @Body() dto: CrearMovimientoDto
    ) {
        return this.movimientoService.registrarMovimiento(dto);
    }

    @Get()
    obtenerMovimientos() {
        return this.movimientoService.obtenerMovimientos();
    }

    @Get(":id")
    obtenerMovimiento(
        @Param("id", ParseIntPipe) id:number
    ) {
        return this.movimientoService.obtenerMovimiento(id);
    }

    @Put(":id/completar")
    completarMovimiento(
        @Param("id", ParseIntPipe) id:number,
        @Body() dto: CompletarMovimientoDto
    ){
        return this.movimientoService.completarMovimiento(id,dto);
    }

    @Delete(":id")
    eliminarMovimiento(
        @Param("id", ParseIntPipe) id:number
    ){
        return this.movimientoService.eliminarMovimiento(id);
    }
}
