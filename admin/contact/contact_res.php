<?
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/inc/db.php";

//글 정보 수정

    $company = $_POST['company'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $content = $_POST['content'];
    $date = date('y-m-d');

    $query = "insert into contact(
            company, name, tel, email, content, date
        ) values (
            '$company','$name','$tel','$email','$content','$date'
        )";

    mq($query);

    back('등록되었습니다.');
        
?>