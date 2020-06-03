<?
    include_once $_SERVER['DOCUMENT_ROOT'].'/asset/inc/db.php';


    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $query = "insert into reservation(
            name, tel, date, time
        ) values ( 
            '$name','$tel','$date','$time'
        )";

    mq($query);
    echo '등록되었습니다.';


?>