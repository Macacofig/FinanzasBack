import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity("movimientos")
export class MovimientoEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    titulo?: string;

    @Column("decimal")
    monto?: number;

    @Column()
    tipo?: string;

    @Column()
    categoriaId?: number;

    @Column({
        nullable: true
    })
    descripcion?: string;

    @Column()
    fecha?: Date;

}