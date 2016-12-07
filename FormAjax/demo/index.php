
    <?php    
        if (isset($_POST['user'])){
            $user = $_POST['user'];
            if ($user == "ngochoang3"){
                echo "true";
            }	
            else{
                echo "false";
            }   
        }
    ?>
    