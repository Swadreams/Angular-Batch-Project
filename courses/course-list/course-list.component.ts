import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  pageTitle: string = "Course List";
  imageWidth: number = 50;
  imageVisible : boolean;
  filteredCourses: ICourse[];

  _listFilter: string;

  get listFilter() {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this._listFilter ? this.performFilter() : this.courses;
  }

  courses: ICourse[] = [
    {
      "courseId": 0,
      "courseName": "Angular",
      "trainer": "Ellis Hester",
      "courseCode": "ZIDOX-00",
      "nextBatchDate": "08-01-2019",
      "description": "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
      "price": 4679.0034,
      "starRating": 3.6,
      "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
    },
    {
      "courseId": 1,
      "courseName": "React",
      "trainer": "Lupe Estrada",
      "courseCode": "METROZ-11",
      "nextBatchDate": "08-01-2019",
      "description": "Quis slaboris in eu cillum ex minim. Veniam cupidatat pariatur pariatur officia in aliquip velit aliqua ullamco quis mollit. Dolore sint esse id duis ut laboris culpa pariatur consectetur aute amet eu in. Nostrud laboris commodo tempor Lorem sunt anim pariatur voluptate fugiat Lorem. Proident esse consequat dolor voluptate id ipsum exercitation mollit incididunt.\r\n",
      "price": 6595.71,
      "starRating": 3.9,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
    },
    {
      "courseId": 2,
      "courseName": "JavaScript",
      "trainer": "Farmer Maynard",
      "courseCode": "NEWCUBE-22",
      "nextBatchDate": "03-01-2019",
      "description": "Quis fugiat eiusmod excepteur dolore magna amet velit. Tempor mollit Lorem duis incididunt ex enim proident excepteur quis culpa nulla cillum dolore elit. Velit aliqua adipisicing ut consequat esse adipisicing est consequat reprehenderit do. Nostrud ex eu aliquip eiusmod ea qui elit eu elit aliqua ex eiusmod commodo et. Lorem consectetur quis consequat quis labore.\r\n",
      "price": 1398.45,
      "starRating": 4.5,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 3,
      "courseName": "PolymerJS",
      "trainer": "Melton Vasquez",
      "courseCode": "ENERSOL-33",
      "nextBatchDate": "05-01-2019",
      "description": "Id aliquip quis officia fugiat reprehenderit mollit nulla sint sunt. Aliquip amet in sunt excepteur amet ad. Irure exercitation incididunt magna nostrud commodo aliquip ullamco ullamco non reprehenderit. Magna fugiat sunt anim cupidatat excepteur elit sit qui laborum fugiat aliquip deserunt minim.\r\n",
      "price": 9656,
      "starRating": 1,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 4,
      "courseName": "Vue",
      "trainer": "Bird Clements",
      "courseCode": "BIOLIVE-44",
      "nextBatchDate": "07-01-2019",
      "description": "Cupidatat proident ullamco do exercitation nisi officia exercitation consequat reprehenderit culpa adipisicing incididunt. Dolore sunt duis non velit do Lorem ex magna consequat anim id deserunt. Ipsum qui do eiusmod laborum. Aute culpa irure exercitation ex dolore velit mollit deserunt irure excepteur ut velit ut aute. Enim quis labore ut pariatur tempor pariatur laboris veniam.\r\n",
      "price": 2496.31,
      "starRating": 2.4,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 5,
      "courseName": "React-Native",
      "trainer": "Hallie Frank",
      "courseCode": "EWAVES-55",
      "nextBatchDate": "07-01-2019",
      "description": "Reprehenderit mollit duis in anim adipisicing minim ut officia excepteur dolor pariatur. Ad eu magna cillum et aliquip et cillum commodo. Aliqua velit Lorem id sunt ea cupidatat fugiat mollit anim nulla ullamco reprehenderit dolore. Tempor quis officia irure aliquip voluptate ex dolore nostrud cillum. Sit laboris proident consectetur occaecat cupidatat ex quis eu deserunt fugiat sint elit amet. Minim nulla id veniam id ex minim dolor officia sit proident.\r\n",
      "price": 2342.58,
      "starRating": 3.6,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 6,
      "courseName": "Ionic",
      "trainer": "Mcconnell Flowers",
      "courseCode": "GREEKER-66",
      "nextBatchDate": "10-01-2019",
      "description": "Do est ut proident duis. Excepteur proident mollit cupidatat fugiat commodo. Sint amet et est amet officia est. In proident labore duis duis pariatur culpa ipsum velit ea et et enim minim. Proident tempor in sunt reprehenderit excepteur excepteur mollit. Excepteur ex deserunt reprehenderit est officia ex aute anim culpa. Aliquip magna consequat quis aute consectetur.\r\n",
      "price": 8760.94,
      "starRating": 2.9,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 7,
      "courseName": "native script",
      "trainer": "Frederick Beasley",
      "courseCode": "PHUEL-77",
      "nextBatchDate": "06-01-2019",
      "description": "Tempor dolore non reprehenderit duis ex irure. Ad sint elit exercitation occaecat nostrud ex esse Lorem laborum nisi ad ipsum ullamco. Fugiat duis laborum mollit duis eiusmod adipisicing occaecat elit laborum nulla exercitation eiusmod fugiat. Enim aliqua culpa quis dolor. Consectetur veniam sunt mollit commodo eiusmod tempor incididunt. Ad ex duis officia irure fugiat cupidatat aute minim ullamco nostrud. Est anim mollit irure in est occaecat nulla labore deserunt.\r\n",
      "price": 5901.66,
      "starRating": 4.4,
      "imageUrl": "http://placehold.it/32x32"
    },
    {
      "courseId": 8,
      "courseName": "jQuery",
      "trainer": "Porter Lyons",
      "courseCode": "PANZENT-88",
      "nextBatchDate": "04-01-2019",
      "description": "Magna nostrud Lorem consectetur ullamco esse nisi laborum incididunt reprehenderit velit. Tempor excepteur in culpa pariatur ex officia commodo amet ut aute sunt elit occaecat eiusmod. Consequat Lorem labore cupidatat excepteur velit anim minim sint amet. Ullamco elit ea cillum elit velit sint enim laborum.\r\n",
      "price": 2361.06,
      "starRating": 4.9,
      "imageUrl": "http://placehold.it/32x32"
    }
  ]
  

  constructor() {    
  }

  ngOnInit() {
    this.filteredCourses = this.courses;
  }

  showImage() {
    this.imageVisible = !this.imageVisible;
  }

  performFilter() : ICourse[] {
    let filterBy = this.listFilter.toLocaleLowerCase();
    return this.courses.filter((item) => (item.courseName.toLocaleLowerCase() == filterBy));    
  }

}
