import { Component, inject, OnInit } from "@angular/core";
import { IStation, ResponseModel } from "../../model/station";
import { StationsService } from "../../service/stations.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  stationService = inject(StationsService);
  stationList: IStation[] = [];

  constructor(private stationSrv: StationsService) {}

  ngOnInit(): void {
    this.loadAllStations();
  }

  loadAllStations() {
    this.stationService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }
}
