<?
    include_once $_SERVER['DOCUMENT_ROOT'].'/asset/inc/db.php';

if(isset($_POST['mode'])){
     $company = $_POST['company'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $content = $_POST['content'];
    $date = date('y-m-d');

    $query = "insert into contact(
            company, name, tel, email, content, date
        ) values ( '$company','$name','$tel','$email','$content','$date'
        )";

    mq($query);
    echo '등록되었습니다.';

}else{
    $num = $_POST['num'];
    $query2 = "select * from project where num='$num'";
    $result2 = mq($query2);
    $row2 = mysqli_fetch_array($result2);

    $summary = "<figure>
                <figcaption>
                    <span>{$row2['type']}</span>
                    <h1>{$row2['title']}</h1>
                    <h2>{$row2['worktype']}</h2>
                    <div class='line'>
                        <span></span>
                    </div>
                    <p>{$row2['summary']}</p>
                    <a href='#'>view more<span>>></span></a>
                </figcaption>
                <div class='art_img'>
                    <img src={$row2['img']} alt={$row2['title']}>
                </div>
            </figure>";


    $detail = "<figure>
                <figcaption>
                    <span>{$row2['type']}</span>
                    <h1>{$row2['title']}</h1>
                    <h2>{$row2['worktype']}</h2>
                    <div class='line'>
                        <span></span>
                    </div>
                    <ul class='detail_text'>
                        <li>
                            <em>제작 기간 : </em>
                            <p>{$row2['date']}</p>
                        </li>
                        <li>
                            <em>기획 의도 : </em>
                            <p>{$row2['content']}</p>
                        </li>
                        <li>
                            <em>제작 스킬 : </em>
                            <p>{$row2['skill']}</p>
                        </li>
                        <li>
                            <p>{$row2['test']}</p>
                        </li>
                    </ul>
                    
                    <a href='#'>back to list</a>
                    <a href={$row2['url']} target='_blank'>view site</a>
                </figcaption>
                <div class='detail_img'>
                    <img src='asset/img/work_{$row2['mediatype']}.png'>
                    <video autoplay muted loop>
                        <source src={$row2['video']} type='video/mp4'>
                    </video>
                </div>
            </figure>";

    
    echo $summary, $detail;
}
?>