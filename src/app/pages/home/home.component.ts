import { Component, inject, OnInit } from "@angular/core";
import { IStation } from "../../model/station";
import { TrainService } from "../../train/train.service";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  trainService = inject(TrainService);
  router = inject(Router);

  stationList: IStation[] = [];
  fromStationId: number = 0;
  toStationId: number = 0;
  dateOfTravel: string = "";

  ngOnInit(): void {
    this.loadAllStations();
  }

  loadAllStations() {
    this.trainService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }
  onClick() {
    console.log(this.fromStationId);
    console.log(this.toStationId);
    console.log(this.dateOfTravel);

    if (
      this.fromStationId == 0 ||
      this.toStationId == 0 ||
      this.dateOfTravel == ""
    ) {
      alert("please select your journy details!!");
    } else {
      if (this.fromStationId == this.toStationId) {
        alert("from station & to station not be same!!");
      } else {
        this.router.navigate([
          "/search",
          this.fromStationId,
          this.toStationId,
          this.dateOfTravel,
        ]);
      }
    }
  }
}
