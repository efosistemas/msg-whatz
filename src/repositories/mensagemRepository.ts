import { AppDataSource } from '../data-source'
import { Mensagem } from '../entities/Mensagem'

export const mensagemRepository = AppDataSource.getRepository(Mensagem)
