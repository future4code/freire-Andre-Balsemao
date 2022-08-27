import { Request, Response } from "express"


export default async function createUser(req,res){
    try {
        
    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}