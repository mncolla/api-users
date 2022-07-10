import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("users")
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;
}