import {Controller, Post, Body, Get, Param } from "@nestjs/common";

@Controller ('users')
export class UserController{

@Post()
async create(@Body() body) {
    return {body};
}

@Get()
async list() {
    return{users:[]}
}

@Get(':id')
    async show(@Param() params) {
        return{user:{}, params}
    }

}