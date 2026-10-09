import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RepoRx } from '../../../core/types/repo';
import { Course } from '../types/course';
import { delay, map, Observable } from 'rxjs';

@Service()
export class ApiRepoCourses implements RepoRx<Course> {
  readonly #url = environment.apiUrl + '/courses';
  readonly #http = inject(HttpClient);

  coursesFetch() {
    return fetch(this.#url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  }

  coursePost(data: unknown) {
    return fetch(this.#url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  }

  getAll(): Observable<Course[]> {
    return this.#http.get<Course[]>(this.#url).pipe(delay(2000));
  }
  getById(id: number): Observable<Course> {
    const url = `${this.#url}/${id}`;
    return this.#http.get<Course>(url);
  }
  add(item: Omit<Course, 'id'>): Observable<Course> {
    return this.#http.post<Course>(this.#url, item);
  }
  update(id: number, item: Partial<Omit<Course, 'id'>>): Observable<Course> {
    const url = `${this.#url}/${id}`;
    return this.#http.patch<Course>(url, item);
  }
  delete(id: number): Observable<void> {
    const url = `${this.#url}/${id}`;
    return this.#http.delete<Course>(url).pipe(map(() => undefined));
  }
}
