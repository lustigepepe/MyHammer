import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JsonClass } from '../json';

@Injectable({ providedIn: 'root' })
export class DataPromiseService {
   
    private dataUrl = './assets/jobs.jso';  // URL to web api

    constructor(private http: HttpClient) {}

    async getJsonData(): Promise<JsonClass> {
        return this.http
            .get(this.dataUrl)
            .toPromise()
            .catch(error => this.handleError(error));
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred within getJsonData(): ', error);
        return Promise.reject(error.message || error);
    }
}