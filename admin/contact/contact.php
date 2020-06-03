<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/head.php";
?>

<!-- 글쓰기 -->
<article class="request">
    <h2>CONTACT US</h2>
    <form name="pofol" action="contact_res.php" method="post">

        <!--
            1. 썸네일
            2. 제목
            3. 날짜
            4. 프로젝트 링크
            5. 상세 설명(에디터)
        -->    

        <ul>
            <li><input type="text" placeholder="글쓴이" name="name"></li>
            <li><input type="text" placeholder="제목" name="subject"></li>
            <li><input type="email" placeholder="이메일" name="email"></li>
            <li><textarea name="content" id="ir1"></textarea>
            </li>
            <!-- 프로젝트를 공개하시겠습니까? -->
            <li><input type="submit" value="SAVE" class="btn"></li>
        </ul>
    </form>
</article>


<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/foot.php";
?>