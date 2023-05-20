<?php
//creating a connetion to our CTF 
$conn=new mysqli("127.0.0.1","root","","CTF");
//checking whether the connection was succesfull
if($conn==True){
echo("ok!");
}else{
	echo("connection failed!");
}
?>