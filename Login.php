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
	<div id="ContentLeft"></div>
		<form method="post">
			<fieldset>
				<legend>Please enter your username and password:</legend> <!--form for users to enter username and password for validation-->
				<label>Username:</label>
				<input type ="text" name="Username" id="Username"/><br />
				<label>Password:</label>
				<input type ="password" name="password" id="password"/>
			</fieldset>
				<input type = "submit" value = "Submit" />
				<input type = "reset" value = "Reset" />
		</form>

		<?php
		session_start(); //starts cookie session
		$accounts = file("users.txt"); //linking to users.txt
		$control = 0; //prevents page from going back to login page if proper username + password entered. Also prevents redirect loop.

			for ($line = 0; $line < sizeof($accounts); $line++){
				$userpass = preg_split("/:/", $accounts[$line]);

				if (($_POST["Username"] == $userpass[0]) && ($_POST["password"] == trim($userpass[1]))){ //checking that user and password data is correct

					echo '<script language="javascript">';
					echo 'alert("Sucessfully logged in")'; //alerts user that login was successful
					echo '</script>';
					$control = 1; //set control variable to 1 to indicate successful login
					setcookie("user", $_POST["Username"]); //sets a session cookie for the user, cookie is deleted automatically upon browser closing
					$_SESSION['login'] = 1; //sets session login value to 1 (logged in)
					header ("Location: template.php"); //sends user to template.php page after successful login. 
				}
			}

	if ($control = 0){ //unsuccessful login
		echo '<script language="javascript">';
		echo "alert('Error. Username or Password incorrect. Plesae try again.')"; //error message to the user
		echo '</script>';
		header ("Location: Login.php"); //redirect back to login page
	}
?>
    <div id = "ContentRight"> </div>
</div>
<div id="Footer"> </div>
</body>
</html>
