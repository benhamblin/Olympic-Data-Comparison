$(document).ready(function(){
    $("#tableBtn").click(function(){
        let country1 = $("#country1").val();
        let country2 = $("#country2").val();
        $.post("searchcompare.php", {country1: country1, country2: country2}, function(responseData){
            if (responseData) {
            const result_obj = JSON.parse(responseData);
            let len = result_obj.length;
            let  insertedHtml = '<tr><th>Country</th><th class="gold">Gold</th><th class="silver">Silver</th><th class="bronze">Bronze</th><th>Total</th><th>Cyclists</th></tr>';
            if (len>0){
            for(let i=0; i<len; i++){
                let country_name = result_obj[i].country_name;
                let gold = result_obj[i].gold;
                let silver = result_obj[i].silver;
                let bronze = result_obj[i].bronze;
                let total = result_obj[i].total;
                let cyclist_names = result_obj[i].cyclist_names;

                if (cyclist_names == null){
                    cyclist_names = "No names available";
                }

                let namesArray = cyclist_names.split(',');
                let button = document.createElement("button");
                button.innerHTML = "Show Names";
                button.className = "showNamesBtn";
                button.setAttribute("data-names", namesArray.join(', ')); //setting the names as an attribute of the button
                let tr = document.createElement('tr');
                tr.innerHTML = "<td align='center'>" + country_name + "</td>" +
                    "<td align='center'>" + gold + "</td>" +
                    "<td align='center'>" + silver + "</td>" +
                    "<td align='center'>" + bronze + "</td>" +
                    "<td align='center'>" + total + "</td>";
                let td = document.createElement('td');
                td.appendChild(button);
                tr.appendChild(td);
                insertedHtml += tr.outerHTML;
            }

            $("#myTable").html(insertedHtml);
            } 
            $("#myTable").on('click', '.showNamesBtn', function() { //on the button specifically
                let namesString = $(this).attr('data-names');
                $(this).replaceWith(namesString);
            });
                
                $("#country1").html(country1); //for extra tables
                $("#country2").html(country2);
                let element = document.getElementById("extra");
                let element2 = document.getElementById("extratables");
                let hidden = element.getAttribute("hidden");
                if (hidden) {
                    element.removeAttribute("hidden");
                    element2.removeAttribute("hidden");
                    }
                } 
            
            else {
            alert('Invalid Country ISO Code.');
            }
            });
        });

    $("#goldButton").click(function(){
        $.post("goldcompare.php", function(responseData){
            const result_obj = JSON.parse(responseData);
            let len = result_obj.length;
            let    insertedHtml = '<tr><th>Country</th><th class="gold">Number of Golds</th></tr>';
            let country1 = document.getElementById("country1").value;
            let country2 = document.getElementById("country2").value;
            var countryString = country1.toString();
            var countryString2 = country2.toString();
            if (len>0){
                for(let i=0; i<len; i++){
                    let country_name = result_obj[i].iso_id;
                    let gold = result_obj[i].gold;
                    if (country_name == countryString.toUpperCase()){
                       insertedHtml += "<tr>" +
                        "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                        "<td align='center'>" + gold + "</td>" 
                        "</tr>";
                    }
                    else if (country_name == countryString2.toUpperCase()){
                       insertedHtml += "<tr>" +
                        "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                        "<td align='center'>" + gold + "</td>" 
                        "</tr>";
                    }
                    else{
                    insertedHtml += "<tr>" +
                        "<td align='center'>" + country_name + "</td>" +
                        "<td align='center'>" + gold + "</td>" 
                        "</tr>";
                    }

            }
            $("#goldTable").html(insertedHtml);
            $("#goldTable").slideToggle("slow");
                }   
            });
        });
    
    $("#cyclistButton").click(function(){
            $.post("cyclistcompare.php", function(responseData){
                const result_obj = JSON.parse(responseData);
                let len = result_obj.length;
                let country1 = document.getElementById("country1").value;
                let country2 = document.getElementById("country2").value;
                var countryString = country1.toString();
                var countryString2 = country2.toString();
                let insertedHtml = '<tr><th>Country</th><th>Number of Cyclists</th></tr>';
                if (len>0){
                    for (let i = 0; i < len; i++) {
                        let country_name = result_obj[i].iso_id;
                        let cyclist_count = result_obj[i].cyclist_count;
                        if (country_name == countryString.toUpperCase()) {
                            insertedHtml += "<tr>" +
                                "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                                "<td align='center'>" + cyclist_count + "</td>" +
                                "</tr>";
                        } else if (country_name == countryString2.toUpperCase()) {
                            insertedHtml += "<tr>" +
                                "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                                "<td align='center'>" + cyclist_count + "</td>" +
                                "</tr>";
                        } else {
                            insertedHtml += "<tr>" +
                                "<td align='center'>" + country_name + "</td>" +
                                "<td align='center'>" + cyclist_count + "</td>" +
                                "</tr>";
                        }
                    }
        
                    $("#cyclistTable").html(insertedHtml);
                    $("#cyclistTable").slideToggle("slow");
                    $("#cyclistChart").slideToggle("slow");
                    createTable(responseData);
                }   
            });
        });
    
    $("#ageButton").click(function(){
         $.post("agecompare.php", function(responseData){
            const result_obj = JSON.parse(responseData);
            let len = result_obj.length;
            let country1 = document.getElementById("country1").value;
            let country2 = document.getElementById("country2").value;
            var countryString = country1.toString();
            var countryString2 = country2.toString();
            let insertedHtml = '<tr><th>Country</th><th>Avg. Age</th></tr>';
            if (len>0){
            for (let i = 0; i < len; i++) {
                let country_name = result_obj[i].iso_id;
                let age = Math.round(result_obj[i].avg_age, 1);
                if (country_name == countryString.toUpperCase()) {
                    insertedHtml += "<tr>" +
                        "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                        "<td align='center'>" + age + "</td>" +
                        "</tr>";
                } else if (country_name == countryString2.toUpperCase()) {
                    insertedHtml += "<tr>" +
                        "<td align='center' style='background-color: mediumpurple; color: white;'>" + country_name + "</td>" +
                        "<td align='center'>" + age + "</td>" +
                        "</tr>";
                } else {
                    insertedHtml += "<tr>" +
                        "<td align='center'>" + country_name + "</td>" +
                        "<td align='center'>" + age + "</td>" +
                        "</tr>";
                }
            }
                $("#ageTable").html(insertedHtml);
                $("#ageTable").slideToggle("slow");
                }   
            });
        });

});

function createTable(responseData) {
  const result_obj = JSON.parse(responseData);
  const country_names = [];
  const cyclist_counts = [];

  const len = result_obj.length;
  for (let i = 0; i < len; i++) {
    if (result_obj[i].cyclist_count > 0) {
      country_names.push(result_obj[i].iso_id);
      cyclist_counts.push(result_obj[i].cyclist_count);
    }
  }

  const ctx = document.getElementById("cyclistChart");

  const barColors = country_names.map(() => getRandomColor());
  const bookingBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: country_names,
    datasets: [
      {
        backgroundColor: barColors,
        data: cyclist_counts,
      },
    ],
  },
  options: {
//    responsive: true,
//    maintainAspectRatio: false,
    scales: {
    yAxes: [
      {
        ticks: {
          fontColor: "white",
          beginAtZero: true,
          stepSize: 5,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "white", 
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Number of Cyclists per Country",
    fontColor: "white",
  },
  legend: {
    display: false,
  },
  },
});
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
