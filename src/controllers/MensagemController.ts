import { Request, Response } from 'express'
import { mensagemRepository } from '../repositories/mensagemRepository'
import { ALL } from 'dns'
import { BadRequestError } from '../helpers/api-erros'

export class MensagemController {

	async create(req: Request, res: Response) {
		
		const { descricao, celular } = req.body

		if (!descricao) {
			throw new BadRequestError('Falta a descrição da mensagem')
		}
		if (!celular) {
			throw new BadRequestError('Falta o celular da mensagem')
		}

		const newMensagem = mensagemRepository.create({ descricao, celular })

		await mensagemRepository.save(newMensagem)

		return res.status(201).json(newMensagem)

	}

	async list(req: Request, res: Response) {
		const mensagens = await mensagemRepository.find();

		return res.json(mensagens)
	}

	
}
