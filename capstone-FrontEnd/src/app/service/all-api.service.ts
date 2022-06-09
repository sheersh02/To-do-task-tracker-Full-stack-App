import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {
 
  username: any
  notificationCount: number = 0;
  dataOfTask: any

  constructor(private httpClient: HttpClient) { }

  register(data: any) {
    console.log("posting " + data);
    return this.httpClient.post(`http://localhost:8083/api/v1/register`, data);
  }


  loginUser(data: any) {
    this.username = data.username;
    localStorage.setItem("username", this.username)
    this.username = localStorage.getItem("username")
    return this.httpClient.post(`http://localhost:8083/api/v1/login`, data);
  }

  savetask(data: any) {
    const url2 = `http://localhost:8083/api/v1/tasks/` + localStorage.getItem("username")
    let header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    return this.httpClient.post(url2, data, { headers: header })
  }


  gettask() {
    let header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    const url3 = `http://localhost:8083/api/v1/tasks/` + localStorage.getItem("username")
    return this.httpClient.get(url3, { headers: header })
  }


  delete(id: any) {
    const url4 = `http://localhost:8083/api/v1/tasks/` + localStorage.getItem("username") + `/` + id
    let header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    return this.httpClient.delete(url4, { headers: header })
  }

  updateTask(data: any, id: any) {
    const url5 = `http://localhost:8083/api/v1/task/` + localStorage.getItem("username") + `/` + id
    return this.httpClient.put<any>(url5, data)

  }

  getTaskById(id: any) {
    const url6 = `http://localhost:8083/api/v1/task/` + localStorage.getItem("username") + `/` + id
    return this.httpClient.get<any>(url6)
  }

  getArchive() {
    return this.httpClient.get<any>(`http://localhost:8083/api/v1/archive/` + localStorage.getItem("username"))
  }

  moveToArchive(data: any) {
    return this.httpClient.post<any>(`http://localhost:8083/api/v1/archiveTask/` + localStorage.getItem("username"), data)
  }

  deleteArchive(id: any) {
    return this.httpClient.delete<any>(`http://localhost:8083/api/v1/archive/` + localStorage.getItem("username") + `/` + id)
  }

  getNotification(id: any) {
    return this.httpClient.get(`http://localhost:8083/api/v1/notifications/` + id)
  }

  uploadImage(data: any) {
    return this.httpClient.post<any>(`http://localhost:8085/api/image/addImage/` + localStorage.getItem("username"), data)
  }
  
  
  pendingTasks() {
    return this.httpClient.get<any>(`http://localhost:8083/api/v1/pending/` + localStorage.getItem("username"))
  }
  
  completedTasks() {
    return this.httpClient.get<any>(`http://localhost:8083/api/v1/completed/` + localStorage.getItem("username"))
  }
  
  markComplete(id: any) {
    return this.httpClient.put<any>(`http://localhost:8083/api/v1/mark-complete/` + localStorage.getItem("username") + `/` + id, '')
  }
  
  
  updateUser(data: any) {
    return this.httpClient.post(`http://localhost:8083/api/v1/register`, data);
  }
  getUser() {
    return this.httpClient.get(`http://localhost:8081/api/user/users/` + localStorage.getItem("username"))
  }
  
  getImage() {
    return this.httpClient.get<any>(`http://localhost:8085/api/image/getImages/` + localStorage.getItem("username"))
  }
}

