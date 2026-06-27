import {CrearMovimientoDto} from './CrearMovimientoDto';
import { PartialType } from '@nestjs/mapped-types';

export class ActualizarMovimientoDto extends PartialType(
    CrearMovimientoDto
) {}