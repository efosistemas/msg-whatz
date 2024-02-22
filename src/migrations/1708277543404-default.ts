import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1708277543404 implements MigrationInterface {
    name = 'Default1708277543404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mensagens" ("id" SERIAL NOT NULL, "descricao" text NOT NULL, "celular" text NOT NULL, CONSTRAINT "PK_c2ba5218f1bff3363548479d2f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "mensagens"`);
    }

}
