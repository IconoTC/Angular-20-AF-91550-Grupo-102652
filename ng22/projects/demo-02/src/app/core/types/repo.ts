import { Observable } from "rxjs";

export interface Repo<T extends { id: string | number | symbol }> {
  getAll(): Promise<T[]>;
  getById(id: T['id']): Promise<T>; //throw Error if not found
  add(item: Omit<T, 'id'>): Promise<T>;
  update(id: T['id'], item: Partial<Omit<T, 'id'>>): Promise<T>; //throw Error if not found
  delete(id: T['id']): Promise<void>; //throw Error if not found
}

export interface RepoRx<T extends { id: string | number | symbol }> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>; //throw Error if not found
  add(item: Omit<T, 'id'>): Observable<T>;
  update(id: T['id'], item: Partial<Omit<T, 'id'>>): Observable<T>; //throw Error if not found
  delete(id: T['id']): Observable<void>; //throw Error if not found
}