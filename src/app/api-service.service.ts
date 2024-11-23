import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // private deployBase = '';
  private deployBase = '/api/api.php?endpoint=';
  private getAvailableSlotsResturantUrl = `${this.deployBase}slots&`;
  private getAvailableSlotsResturantSetingUrl = `${this.deployBase}slot&`;
  private getListingInfoUrl = `${this.deployBase}listing&id=`;
  private bookingsUrl = `${this.deployBase}bookings`;
  private bookingRoomUrl = `${this.deployBase}bookings-room`;

  private getAvailableRoomUrl = `${this.deployBase}rooms&check_in=`;





  private httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    .set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    .set('Cache-Control', 'no-cache');


  constructor(private http: HttpClient) {

  }

  private requestHeaders = {
    headers: this.httpHeaders
  };




  getAvailableSlotsResturant(date: any,seating_preference: any): any {
    return this.http.get(this.getAvailableSlotsResturantUrl + 'date=' + date + '&seating_preference=' + seating_preference);
  }


  getAvailableSlotsResturantSeting(seating_preference: any): any {
    return this.http.get(this.getAvailableSlotsResturantSetingUrl + 'seating_preference=' + seating_preference);
  }

  getListingInfo(id: any): any {
    return this.http.get(this.getListingInfoUrl + id);
  }

  booking(body: any): any {
    return this.http.post(this.bookingsUrl, JSON.stringify(body));
  }



  getAvailableRoom(checkIn: any, checkOut: any): any {
    return this.http.get(this.getAvailableRoomUrl + checkIn + '&check_out=' + checkOut);
  }



  bookingRoom(body: any): any {
    return this.http.post(this.bookingRoomUrl, JSON.stringify(body));
  }


}
