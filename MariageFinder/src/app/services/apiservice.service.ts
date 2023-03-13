import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn : 'root'
})
export class HttpService {

  server: string = "http://localhost:8000/api/";
  constructor(private http : HttpClient) {

  }

  get<T>(endpoint : string ) {
    return this.http.get<T>(`${this.server}${endpoint}`,{headers : this.httpHeader()});
  }

  post<T>(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post<T>(`${this.server}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put<T>(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put<T>(`${this.server}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete<T>(endpoint : string) {
    return this.http.delete<T>(`${this.server}${endpoint}`,{headers : this.httpHeader()});
  }


  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }



  /*request(request : IHttpData) {
    if(request.request == EHttpRequest.POST) {
    }
  } */
}
