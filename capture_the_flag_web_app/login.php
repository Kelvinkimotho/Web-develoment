<?php
//include connect.php
include "connect.php";
if(isset($_POST['login'])){
    $username=$_POST['username'];
    $password=$_POST['password'];
    
           //hashing the password for succesfull login
    //using md5 algorithm
        $hashed_password=md5($password);
        $sql="select * from player where username='$username' and password='$hashed_password'";
        $result=mysqli_query($conn,$sql);
        if($result->num_rows>0){
            header("location:categories.php");
            echo("login succesfull!");
       }else{
           echo("wrong username or password!!");
         }
   
    
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>player login</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <center>
        <div id="sign_in">
            <h1>sign In!!</h1>
            <form action="" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="...username..." autocomplete="off" autofocus required> <br> <br>
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="...password..." autocomplete="off" autofocus required> <br> <br>
                <button id="submit" name="login">Login</button>
            </form>
            <h5>You don't have an account? <a href="signup.php">sign up</a></h5>
        </div>
    </center>
</body>
</html>