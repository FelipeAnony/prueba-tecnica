import { HttpResponse } from '@/domain/protocols';

// Para cada método, deberíamos tener una interface para respetar el ISP -
// Interface Segregation Principle, y luego los juntamos en el wrapper que
// será utilizado mas adelante, para implementar el httpClient en infra layer. Hice unicamente
// el método get, por qué los demás métodos no serán utilizados. Haciéndolo de esta manera,
// se nos facilita mucho en el momento de testear.

export interface HttpGetClient {
  get(url: string): Promise<HttpResponse>;
}

export interface HttpClient extends HttpGetClient {}
