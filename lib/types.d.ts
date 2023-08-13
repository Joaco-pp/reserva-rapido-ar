import {HandleChangeInterface} from "@/lib/types"
import { RefObject } from "react";


export type paramsGetAll = {  
    includeDeleted?: boolean;
}

export type inputParams = {id:string, label:string, type:string, pattern?:string, handle?:(evt:HandleChangeInterface)=>void, refe?:RefObject<HTMLInputElement>, focus:Dispatch<SetStateAction<boolean>>}

export interface HandleChangeInterface {
    target: HTMLInputElement;
  }