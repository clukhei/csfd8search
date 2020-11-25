import Dexie from 'dexie'
import {Injectable} from '@angular/core'

@Injectable()
export class SearchDatabase extends Dexie {
    constructor(){
        super ('searchdb')
        this.version(1).stores({
            
        })
    }
}