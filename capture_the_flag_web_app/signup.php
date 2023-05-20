<?php
//including connect.php file in our file to avoid making new connection to our db
include "connect.php";

if(isset($_POST['register'])){
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    //before creating an account ,let's ensure that the password to be created has characters ranging between 6 and 10 characters
   
        //it's among the best password practice to hash passwords before storing them into the database
           $hashed_password=md5($password);
        //in this project i am using md5 algorithm . but there are more stronger algorithms such a bycrypt
       //let's confirm whether another account with the same credentials already before creating another account
          $sql1="select * from player where username='$username' and password='$hashed_password'";
          $result1=mysqli_query($conn,$sql1);
         if($result1->num_rows>0){
               echo("Another player with that username already exists!");
        }else{
                //let's create a player account
        $sql="insert into player(username,email,password)values('$username','$email','$hashed_password')";
        $result=mysqli_query($conn,$sql);
        if($result){
            echo("Account created succesfull!");
        }else{
            echo("Account creation failed!!");
        }
    }

    
    }
    
   


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account creation</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <center>
        <div id="signup">
            <h1>Create player Account</h1>
            <form action="" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="...username..." autocomplete="off" autofocus required> <br> <br>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="...E-mail..." autocomplete="off" autofocus required> <br> <br>
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="...Password..." autocomplete="off" autofocus required> <br> <br>
                <button id="submit" name="register">Register</button>
            </form>
           <h5>you already have an Account?  <a href="login.php">Login</a></h5>
        </div>
    </center>
</body>
</html>