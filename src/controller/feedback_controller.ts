import express from 'express';
import { IFeedback } from '../model/index'
import { PieceRepository } from '../repositories/index'
import { isArray } from 'util';
import cors from 'cors';
import  LoggerService   from '../logger/LoggerService'
class FeedBackController {
    private pieceRepository = new PieceRepository();
    public path = '/feedback';
    public router = express.Router();
    public app = express();

    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        this.router.post(this.path,cors(), this.createFeedback);
    }
    createFeedback = async (request: express.Request, response: express.Response) => {
        LoggerService.writeInfoLog("============ Request For Create Feed back==============="+request.body);
        // if(request.body.message != null){

        // }

        // const feedBack:IFeedback = {
        //     message:request.body.message,
        //     email:request.body.message,
        //     firstName:

        // }

        const result = await this.pieceRepository.createFeedback(request)
        response.send(result);
    }

}

export default FeedBackController;