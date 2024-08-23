import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where
} from "@angular/fire/firestore";
import {Observable} from "rxjs";

export type Task = {// create a type calls Task
  _id: string,
  description: string,
  completed: boolean,
  user: string,
  timestamp: Timestamp
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly taskCollectionRef;
  constructor(private fireStore: Firestore) {
    this.taskCollectionRef = collection(fireStore, "task");//pass database and our collection

  }

  /*to filter currently logged-in users tasks*/
  getTasks(userEmail: string){
    const queryGetTasks = query(this.taskCollectionRef, where("user", "==", userEmail));
    return collectionData(queryGetTasks, {idField: "_id"}) as Observable<Task[]>;//should pass id with task
  }

  removeTask(task: Task){
    const docRef = doc(this.taskCollectionRef, task._id);
    deleteDoc(docRef);//To delete document from fire store(database) reference of the document (in database) that we have to delete, should be pass
    //into deleteDoc method
  }

  updateTaskStatus(task: Task){
    const docRef = doc(this.taskCollectionRef, task._id);//mention the field that need to be update
    updateDoc(docRef, {
      completed: !task.completed
    });
  }

  //create this as an async function, since it take some times to create a task
  async createTask (description: string, user: string){//we create this method as a async since it take some time to make a new task.
    const newTask = {
      //id will generate automatically (since we about to use addDock method)
      description,
      user,
      completed: false,
      timestamp: Timestamp.now()
    };
    await addDoc(this.taskCollectionRef, newTask);//collection where we want to add the new task and the task, will pass to the addDoc method
  }
}
