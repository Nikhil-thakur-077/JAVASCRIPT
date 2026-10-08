console.log(score); // ??
var score = 50;
console.log(score); // ??

console.log(city);
var city ='Haridwar';
console.log(city);

console.log("task 1.2");

function showMessage() {
    console.log(message);
    var message = 'Hello';
    console.log(message);
    }
    showMessage();


console.log("task 1.3");

var name = "global";
function test() {
console.log(name);
var name = 'local';
}
test();