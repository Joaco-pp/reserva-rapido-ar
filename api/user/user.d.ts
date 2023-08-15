import { paramsGetAll } from "../../lib/types";

export type userParams = paramsGetAll & {
    includePosts?:  boolean;
    includeRole?: boolean
}

export type userRegister = {
    name: String;
    lastname: String;
    username: String;
    password: String;
    matchPassword:String;
    email:String;
    matchEmail:String;
}