import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IDeleteUsersInputDTO, IEditUsersInputDTO, IGetUsersInputDTO, ILoginInputDTO, ISingUpInputDTO } from "../models/User";

export class UserController {

    constructor(
        private userBusiness: UserBusiness
        ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISingUpInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            //const userBusiness = new UserBusiness()
            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            //const userBusiness = new UserBusiness()
            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: IGetUsersInputDTO = {
                token: req.headers.authorization as string,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            //const userBusiness = new UserBusiness()
            const response = await this.userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: IDeleteUsersInputDTO = {
                token: req.headers.authorization as string,
                idToDelete: req.params.id
            }

            //const userBusiness = new UserBusiness()
            const response = await this.userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: IEditUsersInputDTO = {
                token: req.headers.authorization as string,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            //const userBusiness = new UserBusiness()
            const response = await this.userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }
}