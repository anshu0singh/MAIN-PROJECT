import { Component } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  title = 'crud';
  userData !: Observable<any>
  //for input data get 
  name: any;
  email: any;
  number: any;
  update_Id: any;
  formBuilder: any;
  form: any;

  ngOnInit(): void {
  
  }
  
    constructor(private firestore: Firestore) {
      this.getData();
    }
    addData(f: any) {
      console.log(f.value)
      if (this.update_Id) {
        const docInstance = doc(this.firestore, 'users', this.update_Id)
        
        updateDoc(docInstance, f.value)
        this.getData()
        this.update_Id=''
  
  
      }
      else {
        const id = Math.random().toString(36).substring(2, 10 + 2);
        f.value['id'] = id
        let taskRef: any = doc(this.firestore, 'users', f.value["id"]); //add
        setDoc(taskRef, f.value)
          .then(() => {
            console.log('Data saved Successfully')
          })
          .catch((err) => {
            console.log(err)
          })
          
        // clear the input fields
        this.name = '';
        this.email = '';
        this.number = '';
      }
      f.reset();
    }
  
    getData() {
      // this.userData=[]
      const collectionInstance = collection(this.firestore, 'users');
      collectionData(collectionInstance, { idField: 'id' })
        .subscribe(val => {
          console.log(val);
        })
  
      this.userData = collectionData(collectionInstance, { idField: 'id' });
      console.log(this.userData)
    }
  
    updateData(data: any, event: any = null) {
  
      this.update_Id = data.id
  
      this.name = data.name;
      this.email = data.email;
      this.number = data.number;
      console.log(event)
      // console.log(id)
      const docInstance = doc(this.firestore, 'users', data.id);
      const updateData = {
        // name: 'update '
  
      }
      this.getData()
      // updateDoc(docInstance, updateData)
      // .then(()=>{
      //   console.log('data uodated')
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
      // this.deleteData(data.id);
    }
    deleteData(id: any) {
      const docInstance = doc(this.firestore, 'users', id);
      deleteDoc(docInstance)
  
    }
  }
  

