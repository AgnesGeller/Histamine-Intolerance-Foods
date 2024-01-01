const foods = [
    { name: "Aged meats (e.g. salami, pepperoni)", histamineLevel: "High" },
    { name: "Alcohol (e.g. red wine, beer)", histamineLevel: "High" },
    { name: "Bacon", histamineLevel: "High" },
    { name: "Bananas", histamineLevel: "Medium" },
    { name: "Canned foods", histamineLevel: "High" },
    { name: "Cheese", histamineLevel: "Medium" },
    { name: "Certain types of fish (e.g. tuna, mackerel)", histamineLevel: "High" },
    { name: "Citrus fruits", histamineLevel: "Medium" },
    { name: "Cocoa", histamineLevel: "Medium" },
    { name: "Coffee", histamineLevel: "Medium" },
    { name: "Dried fruits", histamineLevel: "High" },
    { name: "Fermented foods", histamineLevel: "High" },
    { name: "Fermented vegetables (e.g. sauerkraut)", histamineLevel: "High" },
    { name: "Hotdog", histamineLevel: "High" },
    { name: "Kefir", histamineLevel: "High" },
    { name: "Kombucha", histamineLevel: "High" },
    { name: "Legumes", histamineLevel: "Medium" },
    { name: "Miso", histamineLevel: "High" },
    { name: "Nuts", histamineLevel: "Medium" },
    { name: "Papaya", histamineLevel: "Medium" },
    { name: "Pepperoni", histamineLevel: "High" },
    { name: "Pineapple", histamineLevel: "Medium" },
    { name: "Processed meats", histamineLevel: "High" },
    { name: "Salami", histamineLevel: "High" },
    { name: "Sauerkraut", histamineLevel: "High" },
    { name: "Soy sauce", histamineLevel: "High" },
    { name: "Tempeh", histamineLevel: "High" },
    { name: "Vinegar", histamineLevel: "High" },
    { name: "Wine", histamineLevel: "High" },
    { name: "Yogurt", histamineLevel: "High" }
  ]
  

const foodList = document.getElementById("foodList");

foods.forEach(food => {
  const item = document.createElement("li");
  item.textContent = food.name;
  item.addEventListener("click", () => {
    showHistamineLevel(food);
  });
  foodList.appendChild(item);
});

function showHistamineLevel(food) {
  let level = "";
  switch (food.histamineLevel) {
    case "High":
      level = "High";
      break;
    case "Medium":
      level = "Medium";
      break;
    case "Low":
      level = "Low";
      break;
    default:
      level = "Information not available";
  }
  alert(`Histamine level of ${food.name}: ${level}`);
}
