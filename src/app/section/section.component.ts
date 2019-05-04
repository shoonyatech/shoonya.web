import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "shn-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.css"]
})
export class SectionComponent implements OnInit {
  @Input() title;
  constructor() {}

  ngOnInit() {}
}
