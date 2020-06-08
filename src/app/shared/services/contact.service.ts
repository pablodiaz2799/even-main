import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { sendMailURL } from '../routes/server.routes';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ContactService{
    constructor(private http: HttpClient) {}

    handleError(error) {
        const errorMessage = error.error.errors[0];
        return throwError(errorMessage);
    }

    sendEmail(name: string, email: string, message: string, tel: string){
        const URL = sendMailURL + '?name=' + name + '&email=' + email + '&tel=' + tel + '&message=' + message;
        return this.http.get(URL)
        .pipe(
            catchError(this.handleError)
        );
    }
}