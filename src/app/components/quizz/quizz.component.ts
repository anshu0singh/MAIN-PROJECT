import { Component, OnInit } from '@angular/core';
import { collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent  {
//   title: any;
//   discription: any;
//   date: any;
//   quiz!: Observable<any>;
//   coverPicture!: File;
//   $event: any;
// questions: any[] = [];
// docId: any;
//   imageurl:any;
//   creationDate: any;
//   constructor(private firestore:Firestore,private router: Router)
//   {this.getData()}
//   ngOnInit(): void {
    
//   }

//   getData() {
//     // this.userData=[]
//     const collectionInstance = collection(this.firestore, 'quiz');
    
//     collectionData(collectionInstance, { idField: 'id' })
//       .subscribe(val => {
//         console.log(val);
//       })

//     this.quiz= collectionData(collectionInstance, { idField: 'id' });
//     console.log(this.quiz)
//     // this.getData()
   
//   }

//   goToplaypage(docId:any) {
//     console.log("Play document with ID:", docId);
   
//     // this.router.navigateByUrl(['/previewpage']);

//     let url = '/play?docId='+docId
//     this.router.navigateByUrl(url);
//     console.log( this.goToplaypage)
//   }
}
