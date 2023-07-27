import { paramsGetAll } from "../../lib/types";

export type userParams = paramsGetAll & {
    includePosts?:  boolean;
    includeRole?: boolean
}
