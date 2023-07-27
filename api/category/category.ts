import { Category } from '@prisma/client';
import prismaClient from '../../lib/prisma';
import { type categoryParams } from './category.d';

export async function getAllUsers(params: categoryParams) {
    try{
        var category =  new Array<Category>();

        //Verificamos la conexión a la base de datos
        if(!prismaClient) throw new Error("Prisma is not initialized");

        // Determinar las opciones de filtrado
        const where = params.includeDeleted ? {} : { Deleted: false };

        // Obtener los usuarios de la base de datos
        category = await prismaClient.category.findMany({ where });

        return { category };
    } catch (err) {
        throw new Error("Error al obtener las categorias");
    }
}