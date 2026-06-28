import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { CategoriaEntity } from "../categoria/categoria.entity";

@Entity("movimientos")
export class MovimientoEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        nullable:true
    })
    titulo?: string;

    @Column("decimal")
    monto?: number;

    @Column()
    tipo?: string;

    @ManyToOne(() => CategoriaEntity,{
        nullable:true
    })
    @JoinColumn({
        name:"categoriaId"
    })
    categoria?: CategoriaEntity;

    @Column({
        nullable:true
    })
    descripcion?: string;

    @Column()
    fecha?: Date;

    @Column({
        default:false
    })
    completado?: boolean;

}