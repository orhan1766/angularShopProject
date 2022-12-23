import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/products/"

  getProducts(categoryId: number): Observable<Product[]> {
    
    return this.http
      .get<Product[]>(this.path+"?categoryId="+categoryId).pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata olustu " + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata."
    }
    return throwError(errorMessage);
  }
}
