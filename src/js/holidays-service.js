export default class HolidaysService {
  static getHoliday(day, month) {
    return fetch(`https://holidays.abstractapi.com/v1/?api_key=13ba59c7685841cab92fc8e911f17c3f&country=US&month=${month}&day=${day}`)
      .then(function(response)  {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch (function(error) {
        return error;
      });
  }
}