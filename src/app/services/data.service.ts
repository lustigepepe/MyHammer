import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
// import { Data } from '../data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DataService {
    private dataUrl = './assets/data.json';  // URL to web api

    private updataJSONData = new BehaviorSubject('null');
    currentData = this.updataJSONData.asObservable();
  
    constructor(private http: HttpClient) {}
    
    updataData(message: string) {
        this.updataJSONData.next(message)
      }
    
    public getJSON(): Observable<any> {
        return this.http.get(this.dataUrl).pipe(
            tap(_=> console.log('fetched data')),
            catchError(this.handleError('getJSON'))
            // catchError((error => of(`Bad Request: ${error.message}`)))
        );
    }
    
    public updateJSON(data: any): Observable<any> {
        return this.http.put(this.dataUrl, data, httpOptions).pipe(
            tap(_ => console.log(`update data: success`),
            catchError(this.handleError('updateJSON'))
            )
        );
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}

// class Test {
//     private url = '';
//     constructor(private http:HttpClient);

//     public getJson() {
//         this.http.get(url).pipe(
//             .tap(_=> console.log(), catchError(this.handleError('handler')))
//         )

//     }

//     public getJson() {
//         this.http.get(url).toPromise().then(...).
//         catch();

//     }


//     private handleErrorT(error:any){
//         return (error:any):Observable<T>  => {
//             console.log(`${operation} failed: ${error.message}`);
//             return Promise.reject(error.message || error);
//         }
//     }

//     private handleError(operation = 'operation' result?: T){
//         return (error:any):Observable<T>  => {

//             console.log(`${operation} failed: ${error.message}`);

//             return of (result as T);
//         }
//     }
// }