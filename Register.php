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
<h1>Register Now!</h1>
<div id="Content">
  <form id="RegisterForm" name="RegisterForm" method="post">
    <table width="400" border="1">
      <tbody>
        <tr>
          <td><table width="261" border="1">
            <tbody>
              <tr>
                <td width="220"><label for="textfield">First Name:</label>
                  <input name="textfield" type="text" required="required" id="textfield"></td>
                <td width="25"><label for="textfield2">Last Name:</label>
                  <input type="text" name="textfield2" id="textfield2"></td>
              </tr>
            </tbody>
          </table></td>
        </tr>
        <tr>
          <td><label for="email">Email:</label>
          <input name="email" type="email" required="required" id="email"></td>
        </tr>
        <tr>
          <td><label for="textfield3">Username (may only contain letters or numbers):</label>
          <input name="username" type="text" required="required" id="username"></td>
        </tr>
        <tr>
          <td><label for="password">Password (must be at least 8 characters long, contain at least one letter and one number):</label>
          <input name="password" type="password" required="required" id="password"></td>
        </tr>
        <tr>
          <td><input type="submit" value="Submit"></td><td><input type="reset" value="Reset">
        </tr>
      </tbody>
    </table>
  </form>
</div>
<div id="Footer"> </div>
<?php 
	$file = fopen("users.txt", "a+"); //opens users.txt file

	if (isset($_POST["username"])){
		$user = ($_POST["username"]); 
	}
	else {
		$user = null;
	}
		
	if (isset($_POST["password"])){
		$pass = ($_POST["password"]);
	}
	else {
		$pass = null;
	}
	$accounts = file("users.txt");

	if ((strlen($user) != 0) && (strlen($pass) != 0)){

		for ($line = 0; $line < sizeof($accounts); $line++){
			$userpass = preg_split("/:/", $accounts[$line]);

			if (strcmp($user, $userpass[0]) == 0){ //makes sure username isnt already in database
				echo '<script language="javascript">';
				echo 'alert("Error. Username already exists in database. Please try again.")';
				echo '</script>';
			}
			else if (preg_match("/[^A-Za-z0-9]/", $user)){ //makes sure only letters and numbers in username
					echo '<script language="javascript">';
					echo "alert('Error. Username may only contain letters and numbers. Please try again.')";
					echo '</script>';
			}
			else if (preg_match("/[^A-Za-z0-9]/", $pass)){ //makes sure only letters and numbers in password
					echo '<script language="javascript">';
					echo 'alert("Error. Password may only contain letters and numbers. Please try again.")';
					echo '</script>';
			}
			else if (strlen($pass) < 8){ //makes sure password is at least 8 characters long
					echo '<script language="javascript">';
					echo 'alert("Error. Password must contain at least four characters. Please try again.")';
					echo '</script>';
			}		
			else if ((preg_match("/[^0-9]/", $pass)) == false){//gives an error message if password contains no number
					echo '<script language="javascript">';
					echo 'alert("Error. Password must contain at least one letter and one number. Please try again.")';
					echo '</script>';
			}
			else if ((preg_match("/[^A-Za-z]/", $pass)) && (preg_match("/[^0-9]/", $pass))){ 
				$file = fopen("users.txt", "a");
				fwrite($file, $user); //adding user and password into databse
				fwrite($file, ":");
				fwrite($file, $pass);
				fwrite($file, "\n");
					echo '<script language="javascript">';
					echo 'alert("Account successfully created. You may now log in with your new account from the Login page.")'; //user notification that account has been made
					echo '</script>';
				header ("Location: Login.php"); //sends user to the login page to log in with their new account
			}
			else {
				echo '<script language="javascript">';
				echo 'alert("Unidentified Error. Something went wrong somewhere, contact site admin for maintenance.")'; //this error message should never come up. If it does, something went wrong somewhere and needs fixing.
				echo '</script>';
			
			}
		}
	}
	fclose($file); //closes users.txt file
?>
</body>
</html>
