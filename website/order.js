import { foodItem } from "./order/fooditem.js";
console.log(foodItem);
import "./amongus.js";

function displayItems() {
  var starters = document.getElementById("starters");
  var mainDish = document.getElementById("main-dish");
  var salads = document.getElementById("salads");
  var soups = document.getElementById("soups");
  var desserts = document.getElementById("desserts");
  var drinks = document.getElementById("drinks");
  var vipOnly = document.getElementById("vip-only");

  const startersData = foodItem.filter((item) => item.category == "starters");
  console.log(startersData);
  const mainDishData = foodItem.filter((item) => item.category == "main-dish");
  console.log(mainDishData);
  const saladsData = foodItem.filter((item) => item.category == "salads");
  console.log(saladsData);
  const soupsData = foodItem.filter((item) => item.category == "soups");
  console.log(soupsData);
  const dessertsData = foodItem.filter((item) => item.category == "desserts");
  console.log(dessertsData);
  const drinksData = foodItem.filter((item) => item.category == "drinks");
  console.log(drinksData);
  const vipOnlyData = foodItem.filter((item) => item.category == "vip-only");
  console.log(vipOnlyData);

  startersData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    starters.appendChild(itemCard);
  });

  mainDishData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    mainDish.appendChild(itemCard);
  });

  saladsData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    salads.appendChild(itemCard);
  });

  soupsData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    soups.appendChild(itemCard);
  });

  dessertsData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    desserts.appendChild(itemCard);
  });

  drinksData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var heart = document.createElement("i");
    heart.setAttribute("class", "fa fa-heart-o add-to-cart");
    heart.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    drinks.appendChild(itemCard);
  });

  vipOnlyData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var gem = document.createElement("i");
    gem.setAttribute("class", "fa fa-gem add-to-cart");
    gem.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(gem);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price: $" + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    vipOnly.appendChild(itemCard);
  });
  starters.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  mainDish.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  salads.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  soups.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  desserts.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  drinks.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  vipOnly.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCartVipOnly);
  });
}
displayItems();

var cartData = [];

function addToCart() {
  var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  console.log(this.parentNode.nextSibling.nextSibling.innerText);
  var itemObj = foodItem.find((element) => element.name == itemToAdd);

  console.log(itemObj);

  var index = cartData.indexOf(itemObj);
  if (index === -1) {
    document.getElementById(itemObj.id).classList.add("toggle-heart");
    cartData = [...cartData, itemObj];
    console.log(cartData);
    alert("Added to cart.");
  } else if (index > -1) {
    alert("Already in the cart!");
  }

  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " Items";
  totalAmount();
  cartItems();
}

function addToCartVipOnly() {
  var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  console.log(this.parentNode.nextSibling.nextSibling.innerText);
  var itemObj = foodItem.find((element) => element.name == itemToAdd);

  console.log(itemObj);
  if (isVip()) {
    var index = cartData.indexOf(itemObj);
    if (index === -1) {
      document.getElementById(itemObj.id).classList.add("toggle-heart");
      cartData = [...cartData, itemObj];
      console.log(cartData);
      alert("Added to cart.");
    } else if (index > -1) {
      alert("Already in the cart!");
    }
  } else {
    alert("For VIP only!");
  }
  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " Items";
  totalAmount();
  cartItems();
}

function cartItems() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  cartData.map((item) => {
    var tableRow = document.createElement("tr");

    var rowData1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement("td");
    rowData2.innerText = item.name;

    var rowData3 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "decrease-item");
    btn1.innerHTML = "-";
    var span = document.createElement("span");
    span.innerText = item.quantity;
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "increase-item");
    btn2.innerText = "+";

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement("td");
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });
  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}

var currPrice = 0;

function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log(itemToInc);

  var incObj = cartData.find((element) => element.name == itemToInc);
  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);

  incObj.price = currPrice * incObj.quantity;
  totalAmount();
  cartItems();
}

var flag = false;

function decrementItem() {
  let itemToDec = this.parentNode.previousSibling.innerText;
  let decObj = cartData.find((element) => element.name == itemToDec);
  let ind = cartData.indexOf(decObj);
  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
  } else {
    document.getElementById(decObj.id).classList.remove("toggle-heart");
    cartData.splice(ind, 1);
    document.getElementById("cart-plus").innerHTML =
      " " + cartData.length + " Items";

    if (cartData.length < 1 && flag) {
      document.getElementById("food-items").classList.toggle("food-items");
      document.getElementById("cart-page").classList.toggle("cart-toggle");
      document.getElementById("checkout").classList.toggle("cart-toggle");
      flag = false;
      alert("Currently no item in cart!");
    }
  }
  totalAmount();
  cartItems();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText =
    "Total Item: " + cartData.length;
  document.getElementById("total-price").innerText = "Total Amount: $" + sum;
  document.getElementById("total-price").value = sum;

  return sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);

function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById("food-items").classList.toggle("food-items");
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    document.getElementById("checkout").classList.toggle("cart-toggle");
    flag = true;
  } else {
    alert("Currently no items in cart!");
  }
}

document.getElementById("add-address").addEventListener("click", addAddress);

function addAddress() {
  var address = prompt("Enter your Address.");
  if (address) {
    document.getElementById("add-address").innerText = " " + address;
  } else {
    document.getElementById("add-address").innerText = " Your Address ";
    alert("Address not added!");
  }
}

const foodItems_grid = document.getElementById("food-items");


function createFoodItem(name, item) {
  var itemCard = document.createElement("div");
  itemCard.setAttribute("id", "item-card");

  var cardTop = document.createElement("div");
  cardTop.setAttribute("id", "card-top");

  var star = document.createElement("i");
  star.setAttribute("class", "fa fa-star");
  star.setAttribute("id", "rating");
  star.innerText = " " + item.rating;

  var heart = document.createElement("i");
  heart.setAttribute("class", "fa fa-heart-o add-to-cart");
  heart.setAttribute("id", item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement("img");
  img.src = item.img;

  var itemName = document.createElement("p");
  itemName.setAttribute("id", "item-name");
  itemName.innerText = item.name;

  var itemPrice = document.createElement("p");
  itemPrice.setAttribute("id", "item-price");
  itemPrice.innerText = "Price: $" + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  itemCard.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  
  return itemCard;
}

function createFoodItemVIP(name, item) {
  var itemCard = document.createElement("div");
  itemCard.setAttribute("id", "item-card");

  var cardTop = document.createElement("div");
  cardTop.setAttribute("id", "card-top");

  var star = document.createElement("i");
  star.setAttribute("class", "fa fa-star");
  star.setAttribute("id", "rating");
  star.innerText = " " + item.rating;

  var heart = document.createElement("i");
  heart.setAttribute("class", "fa fa-gem add-to-cart");
  heart.setAttribute("id", item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement("img");
  img.src = item.img;

  var itemName = document.createElement("p");
  itemName.setAttribute("id", "item-name");
  itemName.innerText = item.name;

  var itemPrice = document.createElement("p");
  itemPrice.setAttribute("id", "item-price");
  itemPrice.innerText = "Price: $" + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  itemCard.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCartVipOnly);
  });
  return itemCard;
}

function renderItems(objArray) {
  objArray.map((item) => {
    if (item.category !== "vip-only") {
      const foodItemToFind = createFoodItem(item.name, item);
      foodItems_grid.appendChild(foodItemToFind);
    }
  });
  objArray.map((item) => {
    if (item.category === "vip-only") {
      const foodItemToFind = createFoodItemVIP(item.name, item);
      foodItems_grid.appendChild(foodItemToFind);
    }
  });
}

function searchByName(name, objArray) {
  return objArray.filter((obj) => {
    if(obj["name"].indexOf(name)!=-1)
      return obj["name"];
  });
}

document.getElementById("search-dish").addEventListener("click", () => {
  var searchRequest = prompt("Search Zabegalovka...");
  console.log(searchRequest);
  if (searchRequest) {
    const searchResult = searchByName(searchRequest, foodItem);
    console.log(searchRequest);
    if (searchResult.length !== 0) {
      foodItems_grid.innerHTML = '';
      renderItems(searchResult);
    } else {
      alert("Not on the menu!");
    }
  } else {
    alert("Type to search...");
  }
});
