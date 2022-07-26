import { http } from "../../../middelware/index";
export default class BaseService {
  getAll() {
    return http.get<any[]>("/example");
  }
  get(id: string) {
    return http.get<any>(`/example/${id}`);
  }
  add(data: any) {
    return http.post<any>("/example", data);
  }
  update(data: any, id: any) {
    return http.put<any>(`/example/${id}`, data);
  }
  delete(id: any) {
    return http.delete<any>(`/example/${id}`);
  }
}