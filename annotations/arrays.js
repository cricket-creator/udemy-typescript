var colors = ["red", "green", "yellow"];
var dates = [new Date(), new Date()];
var fruitsByColor = [
    ["tomato"],
    ["apple"],
    ["lemon"]
];
var fruitsByColor1 = [];
// Help with inference when extracting values
var color = colors[0];
var color1 = colors.pop();
// Prevent incompatible values
// colors.push(true); // error incompatible value
// Help with 'map'
colors.map(function (color) {
    return color.toUpperCase();
});
// Flexible types
var importantDates = [new Date()];
importantDates.push("2021-11-11");
importantDates.push(new Date());
// importantDates.push(10); // error cause type number isn't allowed
