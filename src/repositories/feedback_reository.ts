
import { PrismaClient } from '@prisma/client'
import LoggerService from '../logger/LoggerService';
import {IResponse} from '../model/index';
const prisma = new PrismaClient({
	errorFormat: 'minimal',
	log: [
		{
		  emit: 'event',
		  level: 'query',
		},
	  ],
  })
  prisma.$on('query', e => {
	e.query,LoggerService.writeErrorLog(e.query);
  })

export class PieceRepository {
	async createFeedback(req: any) {
		try {
			const result = await prisma.feedback.create({
				data: req.body
			})
			const iResponse: IResponse = {
				statusCode:"201",
				message:"Data created successfully",
				data: result,
				error:""
			}
			return iResponse;
		} catch (error) {
			console.error(error);
			LoggerService.writeInfoLog("============ Error During  Create Feed back==============="+error.Data);
			const iResponse: IResponse = {
				statusCode:"500",
				message:"Something went worng",
				data:"",
				error:error
			}
			return iResponse;
		}finally{
			async () => await prisma.$disconnect()
		}		
	}
}