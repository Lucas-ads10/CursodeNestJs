import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateUserDTO) {

        return await this.prisma.user.create({
            data,
        });

    }

    async list() {
        
        return this.prisma.user.findMany();

    }

    async show(id: number){

        return this.prisma.user.findUnique({
            where: {
                id
            }
        })

    }

    async update(id: number, {email, name, password, birthAt}: UpdatePutUserDTO) {
        
        await this.exist(id);
        
        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date (birthAt): null},
            where: {
                id
            }
        })
    }



    async updatePartial(id: number, {email, name, password, birthAt}: UpdatePatchUserDTO) {

        await this.exist(id);
        
        const data: any = {};

        if (birthAt){
            data.birthAt = new Date (birthAt)
        }

        if (email){
            data.email = email
        }

        if (name){
            data.name = name
        }

        if (password){
            data.password = password
        }

        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number) {

        await this.exist(id);

        return this.prisma.user.delete({
            where: {
                id
            }
        })
    }


    async exist(id: number){
        if(!(await this.show(id))){
            throw new NotFoundException(`O usuário ${id} não existe`);
        }
    }

}

