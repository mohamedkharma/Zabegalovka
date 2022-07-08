//logistics
var currentUser = "";
var currentBalance = 0;
var totalOrders = 0;
var totalSpent = 0;
var vipStatus = "Regular";

function setUser(username) {
  sessionStorage.setItem("currentUser", username);
}
function getUser() {
  return sessionStorage.getItem("currentUser");
}
function logOut() {
  alert("You have been logged out...Come back soon!");
  sessionStorage.setItem("currentUser", "");
  sessionStorage.setItem("currentBalance", 0);
  sessionStorage.setItem("orders", 0);
  sessionStorage.setItem("totalSpent", 0);
  sessionStorage.setItem("vipStatus", "Regular");
}
function getBalance() {
  return sessionStorage.getItem("currentBalance");
}
async function setBalance(balance) {
  sessionStorage.setItem("currentBalance", balance);
}
function setOrders(orders) {
  sessionStorage.setItem("orders", orders);
}
function getOrders() {
  return sessionStorage.getItem("orders");
}
function setTotalSpent(spent) {
  sessionStorage.setItem("totalSpent", spent);
}
function getTotalSpent() {
  return sessionStorage.getItem("totalSpent");
}
function makeVip() {
  sessionStorage.setItem("vipStatus", "VIP");
}
function isVip() {
  if (sessionStorage.getItem("vipStatus") === "VIP") return true;
  return false;
}
