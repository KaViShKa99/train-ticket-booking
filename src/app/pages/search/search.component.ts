import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Search, TrainObject } from "../../model/station";
import { TrainService } from "../../train/train.service";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  activatedRoute = inject(ActivatedRoute);
  trainService = inject(TrainService);
  searchData: Search = new Search();
  trainList: TrainObject[] = [];

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res);

      this.searchData = res;
      this.getSearchTrains();
    });
  }

  getSearchTrains() {
    this.trainService
      .getTrainsSearch(
        this.searchData.fromStationId,
        this.searchData.toStationId,
        this.searchData.dateOfTravel
      )
      .subscribe((res: any) => {
        console.log(res.data);
        // this.trainList = res.data;
        this.trainList = res.data.map((train: any) => {
          return {
            ...train,
            departureDate: train.departureDate.split("T")[0],
          };
        });
      });
  }
}
