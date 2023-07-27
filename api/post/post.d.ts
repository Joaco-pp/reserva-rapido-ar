import { paramsGetAll } from '../../lib/types'

export type postParams = paramsGetAll & {
    includeCategories?:  boolean;
}