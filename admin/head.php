<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/admin_check.php";
    $session = $_SESSION['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta  http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>bluespade Portfolio</title>
    <link rel="stylesheet" href="/asset/css/admin_style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="/asset/js/common.js"></script>
</head>
<body>
    <header>
        <?=$session?>님 환영합니다.
        <a href="/admin/logout.php">[로그아웃]</a>
        <nav>
            <a href="/admin/work/list.php">PORTFOLIO</a>
            <a href="/admin/contact/list.php">CONTACT</a>
        </nav>
    </header>