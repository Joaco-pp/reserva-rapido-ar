import { paramsGetAll } from '../../lib/types'

export type categoryParams = paramsGetAll & {
    includePosts?:  boolean;
}