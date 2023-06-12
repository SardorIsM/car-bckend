import { Injectable } from '@nestjs/common';
import knex from 'knex';
import { dbConfig } from '../config/config_db' ;


@Injectable()
export class KnexConfig {
    instance: any;
    constructor(){
        this.instance =  knex(dbConfig);
    }
}