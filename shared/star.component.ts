import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: "star.component.html",
    styles: [`
        .crop {
            overflow: hidden;
        }
    `]
})

export class StarComponent implements OnInit {
    @Input() rating: number;
    @Output() ratingClicked = new EventEmitter();

    starWidth:number;

    ngOnInit() {
        this.starWidth = this.rating * 75 / 5;        
    }

    showRating() {
        this.ratingClicked.emit({rating: this.rating});        
    }
}