import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cidade } from "@cidades/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  model = 'cidades';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Cidade[]>(this.getUrl());
  };

  find(cidadeId: string) {
    return this.httpClient.get<Cidade>(this.getUrlById(cidadeId));
  };

  create(cidades: Cidade) {
    return this.httpClient.post<Cidade>(this.getUrl(), cidades);
  };

  update(cidades: Cidade) {
    return this.httpClient.patch<Cidade>(this.getUrlById(cidades.id), cidades);
  };

  delete({ id }: Cidade) {
    return this.httpClient.delete<Cidade>(this.getUrlById(id));
  };

  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
