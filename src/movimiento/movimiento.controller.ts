import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import {CrearMovimientoDto} from './CrearMovimientoDto';
import { ParseIntPipe } from '@nestjs/common';
import {ActualizarMovimientoDto} from './ActualizarMovimientoDto';
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

    @Get(':id')
    obtenerMovimiento(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.movimientoService.obtenerMovimiento(id);
    }

    @Put(':id')
    actualizarMovimiento(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: ActualizarMovimientoDto
    ) {
        return this.movimientoService.actualizarMovimiento(id, dto);
    }

    @Delete(':id')
    eliminarMovimiento(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.movimientoService.eliminarMovimiento(id);
    }
}
