import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('mensagens')
export class Mensagem {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	descricao: string

	@Column({ type: 'text' })
	celular: string
}
