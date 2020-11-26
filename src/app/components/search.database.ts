import Dexie from 'dexie'
import { Injectable } from '@angular/core'
import { Search } from './models'

export const normalizeQ = (q: string) => q.trim().toLowerCase()
@Injectable()
export class SearchDatabase extends Dexie {
    private search: Dexie.Table<Search, number>
    constructor() {
        super('searchdb')
        this.version(1).stores({
            search: '++id, title'
        })
        this.search = this.table('search')
    }

   async saveSearch(s: Search): Promise<any> {
        s.title = normalizeQ(s.title)
        const resultCount = await this.search.where('title').equals(s.title)
            .and(doc => doc.genre == s.genre)
            .count()

        if (resultCount > 0) return 

      
       return this.search.add(s)
    }

    getSearchOptions(): Promise<Search[]> {
        return this.search.orderBy('title').toArray()
    }
}