import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/authservice.service';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {
  quiz: any;
  coverPicture: any;
  path: any;
  quiztitle: any;
  quizDescription: any;
  creationDate: any;
  imageUrl: any;
  docId: any;

  constructor(private router:Router,public firestore: Firestore,)
  {
    this.getData();
  }

  start(){
    this.router.navigate(['/login'])
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'quiz');
    collectionData(collectionInstance, { idField: 'id' })
      .subscribe(val => {
        console.log(val);
      })

    this.quiz = collectionData(collectionInstance, { idField: 'id' });
    console.log(this.quiz)
  }

  onFileSelected(event: any) {
    this.coverPicture = event.target.files[0];
  }
  upload($event: any) {
    this.path = $event.target.files[0];
  }
  uploadImage() {
    console.log(this.path)
    this.imageUpload()
  }

  onSubmit() {
    console.log('Title:', this.quiztitle)
    console.log('Description:', this.quizDescription);

    const docRef: any = collection(this.firestore, "quiz")
    let formData = {
      quizTitle: this.quiztitle,
      description: this.quizDescription,
      creationDate: this.creationDate,
      coverImageUrl: this.imageUrl,
      quizId: '',
    };
    addDoc(docRef, formData).then((doc) => {
      console.log('dataadd')
      console.log("Document written with ID: ", doc.id);
      this.docId = doc.id;
      formData.quizId = doc.id

      updateDoc(doc, formData).then(() => {
        console.log('Collection id update')
      }).catch((error) => {
        console.log('Error updating collection ID:', error)
      });
    })
  }

    // image 

  imageUpload() {
    const storage = getStorage();
    const storageRef = ref(storage, `image/${this.path.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.path);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (_error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.imageUrl = downloadURL
        });
      });
  }


}
