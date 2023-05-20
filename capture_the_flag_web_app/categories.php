<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>chalenges categories</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <center>
        <div id="categories">
            <h1 id="guide">Challenges fall in one of the following categories!</h1>
            <table>
                <thead>
                    <th>Category Id</th>
                    <th>Category Name</th>
                </thead>
                <tbody>
                    <?php
                    //include connect.php
                    include "connect.php";
                    $sql="select * from challenges_categories";
                    $result=mysqli_query($conn,$sql);
                    if($result){
                        while($row=mysqli_fetch_assoc($result)){
                            $category_id=$row['cat_id'];
                            $category_name=$row['category_name'];

                            echo"
                            <tr>
                            <td>$category_id.</td>
                            <td>$category_name</td>
                        </tr>
                            ".mysqli_error($conn);
                        }
                    }
                    ?>
                   
                </tbody>
            </table>
        </div>
    </center>
</body>
</html>