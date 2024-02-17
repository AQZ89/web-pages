<!DOCTYPE html>
<html>
<head>
    <title>title</title>
</head>
<body>

<h1>
<?php

$var1 = "первая созданная переменная";
$var2 = "вторая созданная переменная";
$var3 = "третья созданная переменная";

echo "Переменная 1: " . $var1 . "<br>";
echo "Переменная 2: " . $var2 . "<br>";
echo "Переменная 3: " . $var3 . "<br>";

?>

</h1>
    <h1>
        <?php
        
        $newTitle = "добавил h1 на страничку";
        echo $newTitle;
        ?>
    </h1>

    <script>
        
        window.addEventListener('DOMContentLoaded', function() {
            let h2 = document.createElement('h2');
            h2.textContent = 'а это в js и добавил на страничку как h2';
            document.body.appendChild(h2);
        });
</script>



</body>
</html>
