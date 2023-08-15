import { paramsGetAll } from "../../lib/types";

export type userParams = paramsGetAll & {
    includePosts?:  boolean;
    includeRole?: boolean
}
export type createUserParams = {
    password: String;
    user: String;
}