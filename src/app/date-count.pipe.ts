import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any{
    let today: any = new Date() //gets current date and time
    let dateDifference = Math.abs(value-today) /1000
    const secondsInDay = 86400
    var days = Math.floor(dateDifference/secondsInDay) //gets the number of days
    var hrs = Math.floor(dateDifference/3600) % 24 // gets the number of hours
    var mints = Math.floor(dateDifference/60)% 60 // gets the number of minutes
    var secs = dateDifference%60  // gets the number of seconds

    function vals(days:number,hrs:number,mints:number,secs:number){
      return `${days} days ${hrs} hours ${mints} minutes and ${secs} ago`
    }
    if(secs>=1 && value < today){
      // vals(days,hrs,mints,secs)
      return vals(days,hrs,mints,secs)
    }else{
      return 0
        }

  }

}
