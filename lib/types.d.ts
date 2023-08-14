import { UUID } from "crypto";
import { Key } from "react";

export type paramsGetAll = {  
    includeDeleted?: boolean;
}

export type post = {
    id: UUID;
    title: Sttring;
    content: String;
    createdAt: String;
    updatedAt?: String;
    author: author;
    imagens: String[];
    ranking: Number | 1;
    rankingCuantity?: Number;
}

export type author = {
    age: Number;
    name: String;
}

export type links = {
  name: String;
  path: Key;
}
