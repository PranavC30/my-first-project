let country = prompt("Enter country name:");
let state = prompt("Enter state name:");
let city = prompt("Enter city name:");

switch (country) {
  case "India":
    console.log(" Country: India");

    switch (state) {
      case "Rajasthan":
        console.log(" State: Rajasthan");

        switch (city) {
          case "Jaipur":
            console.log(" City: Jaipur - Pink City");
            break;
          case "Udaipur":
            console.log(" City: Udaipur - City of Lakes");
            break;
         
          default:
            console.log("City not found in Rajasthan");
        }
        break;

      case "Maharashtra":
        console.log(" State: Maharashtra");

        switch (city) {
          case "Mumbai":
            console.log("City: Mumbai - Financial Capital of India");
            break;
          case "Pune":
            console.log(" City: Pune - Oxford of the East");
            break;
         
          default:
            console.log("City not found in Maharashtra");
        }
        break;

      case "Uttar Pradesh":
        console.log(" State: Uttar Pradesh");

        switch (city) {
          
          case "Varanasi":
            console.log(" City: Varanasi - Spiritual Capital of India");
            break;
          case "Agra":
            console.log("City: Agra - Taj Mahal City");
            break;
          default:
            console.log(" City not found in Uttar Pradesh");
        }
        break;

      default:
        console.log(" State not found in India");
    }
    break;

  default:
    console.log(" Country not supported");
}
