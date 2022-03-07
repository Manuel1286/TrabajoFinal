import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config/config';



@Injectable({
    providedIn: 'root'
})
export class JugadorService {

    config = config
    constructor(
        private http: HttpClient) //para llamar el endpoind
    {
    }


    crear(data: any) {
        return this.http.post(this.config.url + '/api/jugador', data)
    }
}