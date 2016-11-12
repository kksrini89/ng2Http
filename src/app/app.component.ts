import { Component, OnInit } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  content: any;
  httpForm: NgForm; //Template driven approach
  users: any[] = [];
  //Sample data
  user: any = {
    username: '',
    email: ''
  }

  constructor(private dataService: DataService) { // private http: Http, 
    //Initializing values
    this.user = {
      username: 'Srinivasan',
      email: 'kksrini89@gmail.com'
    }
  }

  onGetData() {
    this.dataService.get().subscribe(result => {
      for (let key in result) {
        // this.users = [];
        this.users.push(result[key]);
      }
    });

    // this.http.get('https://ng2-course-http.firebaseio.com/data.json')
    //   .subscribe(data => {
    //     let results = data.json();
    //     console.log(results);
    //     for (let item in results) {
    //       console.log(item);
    //       this.users.push(results[item]);
    //     }
    //     console.log(this.users);
    //   });
  }

  //Posting data to firebase
  onSubmit(submittedForm: NgForm) {
    if (submittedForm.valid) {
      // console.log(submittedForm.value);
      let user = { name: submittedForm.value.username, email: submittedForm.value.email };
      let body = JSON.stringify(user);

      this.dataService.post(user).subscribe((response) => {
        console.log(response);
      });
      // this.http.post('https://ng2-course-http.firebaseio.com/data.json', body)
      //   .subscribe(data => console.log(data.json()));
    }
  }

  ngOnInit() {
    this.dataService.getSampleContent().subscribe(result => this.content = result);

    // this.http.get('https://ng2-course-http.firebaseio.com/title.json')
    //   .subscribe(data => this.content = data.json());
  }
}
