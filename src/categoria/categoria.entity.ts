import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categorias")
export class CategoriaEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre?: string;

}