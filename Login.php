<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link href= "CSS/Layout.css" rel = "stylesheet" type = "text/css" />
<link href= "CSS/Menu.css" rel = "stylesheet" type = "text/css" />
<title>StudyRing</title>
</head>

<body>
<div id="Holder"> </div>
<div id="Header"> <h1>Study Ring</h1> </div>
<div id="Navbar">
	<nav>
    	<ul>
        	<li><a href="index.php">Home </a> </li>
            <li><a href="#">About us </a> </li>
            <li><a href="#">Documentation </a> </li>
            <li><a href="Login.php">Login </a> </li>
        </ul>
    </nav> 
</div>
<h1>Login Now!</h1>
<div id="Content"> 
<form>
						<fieldset = "Login Info">
								Enter Username
								<input type="text" name="user"><br>
								Enter Password
								<input type="text" name="password"><br>
						</fieldset>
						<input type="submit" value="Submit Form" onclick=""/>
						<input type="reset" value="Reset Form" />
	</form>

	<div id="ContentLeft"></div>
    <div id = "ContentRight"> </div>
</div>
<div id="Footer"> </div>
</div>
</body>
</html>