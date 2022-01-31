import { RoomService } from './../room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  id: number | undefined
  room: Room | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private RoomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];

    this.RoomService.getRoomList(this.id).subscribe((data: Room | undefined)=>{
      console.log(data)
      this.room = data;

    }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['rooms']);
  }

}
