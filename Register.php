<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link href= "CSS/Layout.css" rel = "stylesheet" type = "text/css" />
<link href= "CSS/Menu.css" rel = "stylesheet" type = "text/css" />
<title>Untitled Document</title>
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
<h1>Page heading</h1>
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
          <td><label for="textfield3">Username:</label>
          <input name="textfield3" type="text" required="required" id="textfield3"></td>
        </tr>
        <tr>
          <td><label for="password">Password:</label>
          <input name="password" type="password" required="required" id="password"></td>
        </tr>
        <tr>
          <td><input type="submit" name="submit" id="submit" value="Submit"></td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
<div id="Footer"> </div>
</div>
</body>
</html>