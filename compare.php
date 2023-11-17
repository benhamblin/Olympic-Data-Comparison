<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <script src="myscript.js"></script>
    <title>Medal Comparison</title>
</head>
<body>
    
    <header>
        <p class="logo">Country Comparison</p>
        <img src="rings.png">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#firstTable">Results</a></li>
            <li><a href="#extra">More Analysis</a></li>
        </ul>
    </header>  
    
    <br><br><br><br>
    
    <form onsubmit="return false">
        <div  style ="text-align:center;">
		  <label for="country1">Country 1 ISO CODE:</label>
        </div>
		<input type="text" name="country1" id="country1" placeholder="e.g. USA"><br>
        <div  style ="text-align:center;">
		  <label for="country2">Country 2 ISO CODE:</label>
        </div>
		<input type="text" name="country2" id="country2" placeholder="e.g. GBR"><br>
		<input type="submit" id="tableBtn" value="Compare" onclick="location.href='#firstTable'">
    </form>
    
    <br>
        
    <div id="firstTable">
        <p id="country1" hidden></p>
        <p id="country2" hidden></p>
        <table id="myTable"></table>  
    </div>  
    
    <div id="extra" hidden="hidden">
        <input type="submit" id="goldButton" value="Golds">
        <input type="submit" id="cyclistButton" value="Cyclists">
        <input type="submit" id="ageButton" value="Ages">      
    </div>
    
    <div id="extratables" hidden="hidden">  
        <table id="goldTable" class="extraTable" style="display: none;"></table>  
        <table id="cyclistTable" class="extraTable" style="display: none;"></table> 
        <table id="ageTable" class="extraTable" style="display: none;"></table>      
    </div>
    
    <div id="chartdiv" class="graph" style="width: 100%; max-width: 600px;">
        <canvas id="cyclistChart" style="display: none;"></canvas>
    </div>
</body>
</html>

