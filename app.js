const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT;
const localPort = 3000;
var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options)



  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
})

app.post("/", (req, res) => {
  var item = req.body.newItem

  items.push(item);

  res.redirect("/");
  console.log(item);
});




app.listen(port || localPort, () => {
  console.log(`Example app listening on port ${localPort}`)
})


// Not used anymore just for refrence
// var currentDay = today.getDay();
// var day = "";
//
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wendnesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//   console.log("Error: Current day is equal to: " + currentDay);
// }
