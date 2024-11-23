import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FindTableComponent } from '../find-table/find-table.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SelectSeatingTypeComponent } from '../select-seating-type/select-seating-type.component';
import { DetailsReservationFormComponent } from '../details-reservation-form/details-reservation-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../toast.service';
import { ToastsContainer } from '../toasts-container.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resturant-booking',
  standalone: true,
  imports: [NgbTooltipModule, ToastsContainer, FindTableComponent, CommonModule, FlexLayoutModule, SelectSeatingTypeComponent, DetailsReservationFormComponent, HttpClientModule],
  templateUrl: './resturant-booking.component.html',
  styleUrl: './resturant-booking.component.scss'
})
export class ResturantBookingComponent implements OnInit {
  toastService = inject(ToastService);

  @ViewChild('standardTpl', { static: true }) standardTpl!: TemplateRef<any>;

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, private router: Router) { }
  active = 0;
  loading = false
  seatingTimes = []
  tableInfo!: any
  seating = null
  unAvail = false
  customer = null



  ngOnInit(): void {

    this.showStandard(this.standardTpl)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }


  setNewIndex(event: any) {
    this.active = event
  }


  getSeatingAvailableTimes(seating: any) {
    this.loading = true
    this.seating = seating
    this.apiService.getAvailableSlotsResturantSeting(seating).subscribe((data: any) => {
      this.loading = false
      this.seatingTimes = data
      console.log(data)
    })

  }

  getTableInfo(info: any) {
    this.unAvail = false
    this.tableInfo = info
    const date = info.date.year + '-' + info.date.month + '-' + info.date.day;

    this.loading = true
    this.apiService.getAvailableSlotsResturant(date, this.seating).subscribe((data: any) => {
      this.loading = false
      const slots = data
      const checkSlotAvailability = (slotId: string): boolean => {
        return slots.some((slot: any) => slot.id === slotId);
      };

      console.log(info.slotId)

      const isAvailable = checkSlotAvailability(info.slotId);

      if (isAvailable) {
        this.active = 2
      } else {
        this.unAvail = true
        this.seatingTimes = slots
      }
    })



  }


  showStandard(template: TemplateRef<any>) {
    this.toastService.show({ template });
  }

  getCustomerInfo(info: any) {
    this.loading = true
    const body = {
      "date": this.tableInfo?.date?.year + '-' + this.tableInfo.date.month + '-' + this.tableInfo.date.day,
      "slot_id": this.tableInfo.slotId,
      "num_people": 4,
      "seating_preference": "indoor",
      "customer_name": info.customerName,
      "customer_email": info.customerEmail,
      "customer_phone": info.customerPhone
    }

    this.apiService.booking(body).subscribe((data: any) => {
      this.loading = false
      this.router.navigate(['/home'])
    })
  }


}
