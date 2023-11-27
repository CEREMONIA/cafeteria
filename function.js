var foodData = [
    {
      name: "양식",
     
      foods: ["피자", "스테이크", "파스타"]
    },
    {
      name: "중식",
      foods: ["짜장면", "짬뽕", "탕수육"]
    },
    {
      name: "일식",
      foods: ["초밥", "라멘", "돈부리"]
    },
    {
      name: "한식",
      foods: ["떡볶이", "불고기", "김치찌개"]
    },
    {
      name: "패스트푸드",
      foods: ["햄버거", "치킨", "핫도그"]
    }
  ];

  function showFoodInfo(index) {
    var food = foodData[index];
    var foodInfoElement = document.getElementById("foodInfo");
    var foodListHTML = "<h2>" + food.name + "</h2>";

    if (food.foods && food.foods.length > 0) {
      foodListHTML += "<ul>";
      food.foods.forEach(function (item, itemIndex) {
        foodListHTML += "<li class='food-item' onclick='handleFoodItemClick(\"" + item + "\", \"" + food.name + "\")'>" + item + "</li>";
      });
      foodListHTML += "</ul>";
    }

    foodInfoElement.innerHTML = foodListHTML;
  }

  function handleFoodItemClick(food, category) {
    alert("You clicked on " + food + " in the " + category + " category!");
    // Add your desired action here
  }

    let id = $('#id');
    let pw = $('#pw');
    let btn = $('#btn');

    $(btn).on('click', function () {
        if ($(id).val() == "your_username" && $(pw).val() == "your_password") {
            window.location.href = 'work.html'; // Redirects to work.html on successful login
        } else if ($(id).val() == "") {
            $(id).next('label').addClass('warning');
            setTimeout(function () {
                $('label').removeClass('warning');
            }, 1500);
        } else if ($(pw).val() == "") {
            $(pw).next('label').addClass('warning');
            setTimeout(function () {
                $('label').removeClass('warning');
            }, 1500);
        } else {
            // Handle incorrect username/password scenario if needed
        }
    });