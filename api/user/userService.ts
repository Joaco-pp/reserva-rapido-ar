import prismaClient from '../../lib/prisma';
import { type userParams, createUserParams } from './user';
import { User } from '@prisma/client';

export async function getAllUsers(params: userParams) {
    try{
        //Verificamos la conexión a la base de datos
        if(!prismaClient) throw new Error("Prisma is not initialized");

        // Determinar las opciones de filtrado
        const where = params.includeDeleted ? {} : { Deleted: false };

        // Obtener los usuarios de la base de datos

        return await prismaClient.user.findMany({ where });
    } catch (err) {
        throw new Error("Error al obtener los usuarios");
    }
}

export async function getUserById( Id: string ) {
    try{
        //Verificamos la conexión a la base de datos
        if(!prismaClient) throw new Error("Prisma is not initialized");

        // Obtener el usuario de la base de datos
        const user = await prismaClient.user.findUnique({ where: { Id } });

        // Verificar si el usuario existe
        if(!user) throw new Error("El usuario no existe");

        return user;
    } catch (err) {
        throw new Error("Error al obtener el usuario");
    }
}

export async function login({password, user}: createUserParams){

}


export async function createUser( data: User ) {}

export async function updateUser( Id: string, data: User ) {}

export async function deleteUser( Id: string ) {}