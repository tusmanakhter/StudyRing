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
<h1>You are now disconnected!</h1>
<div id="Content"> 
	<?php 
		session_start();
		$_SESSION['login'] = 0; //sets session login value to 0 (logged out)
	?>
	<div id="ContentLeft"></div>
    <div id = "ContentRight"> </div>
</div>
<div id="Footer"> </div>
</div>
</body>
</html>
