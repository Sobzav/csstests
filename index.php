<?php

header("Content-type: text/html; charset=utf-8");
error_reporting(-1);

$mysqli = new mysqli("localhost", "sbus", "eAwNRYiofwMFD4lg", "sobzav");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$query = "SELECT id, name FROM `sobzav`.`category`";
$result = $mysqli->query($query);

/* associative and numeric array */
$row = $result->fetch_array(MYSQLI_BOTH);
printf ("%s (%s)\n", $row['id'], $row["name"]);

/* free result set */
$result->free();

/* close connection */
$mysqli->close();

mysqli_fetch_array($result, MYSQLI_ASSOC);

$link = mysqli_connect("localhost", "sbus", "eAwNRYiofwMFD4lg", "sobzav") or die ('Нет связи с Базой Данных');

/* проверка соединения */
if (mysqli_connect_errno()) {
printf("Соединение не удалось: %s\n", mysqli_connect_error());
exit();
}

$query = "SELECT id, name FROM `sobzav`.`category`";

if ($result = mysqli_query(mysqli_connect("localhost", "sbus", "eAwNRYiofwMFD4lg", "sobzav") or die ('Нет связи с Базой Данных'), "SELECT id, name FROM `sobzav`.`category`;")) {

/* извлечение ассоциативного массива */
while ($row = mysqli_fetch_assoc($result)) {
    var_dump($row);
    echo "{$row['id']}: {$row['name']} <br>";
}

/* удаление выборки */
mysqli_free_result($result);
}

/* закрытие соединения */
mysqli_close($link);


class Animal
{
    public $name = "No-name animal";

    public function __construct($name)
    {
        $this->name = $name;
    }
}

$animal = new Animal("Bob the Dog");
echo '<br /><br />Animal: ' . $animal->name;
$animal = new Animal("Cat The Cat");
echo '<br /><br />Animal: ' . $animal->name . "<br /><br />";

class foo
{
     function do_foo()
     {
         echo "Don't Doing foo."; 
     }
}

$bar = new foo;
$bar->do_foo();

// Показываем все ошибки
error_reporting(E_ALL);

class beers {
    const softdrink = 'rootbeer';
    public static $ale = 'ipa';
}

$rootbeer = 'A & W';
$ipa = 'Alexander Keith\'s';

// Это работает, выводит: Я бы хотел A & W
echo "Я бы хотел {${beers::softdrink}}";

// Это тоже работает, выводит: Я бы хотел Alexander Keith's
echo "<br /><br />Я бы хотел {${beers::$ale}}";
?>



<!-- mysqli_connect() - Открыть новое соединение с MySQL сервером. Возвращает объект, представляющий подключение к серверу MySQL.

mysqli_connect_error() - Возвращает описание последней ошибки подключения. Сообщение об ошибке. NULL, если ошибка отсутствует.

mysqli_set_charset() - Устанавливает кодировку

mysqli_query() - Выполняет запрос к базе данных. Возвращает FALSE в случае неудачи. В случае успешного выполнения запросов SELECT mysqli_query() вернет объект mysqli_result. Для остальных успешных запросов mysqli_query() вернет TRUE.

mysqli_fetch_all() - Выбирает все строки из результирующего набора и помещает их в ассоциативный массив, обычный массив или в оба

mysqli_fetch_assoc() - Извлекает результирующий ряд в виде ассоциативного массива. Возвращает ассоциативный массив, соответствующий результирующей выборке или NULL, если других рядов не существует.

mysqli_num_rows() - Получает число рядов в результирующей выборке.

mysqli_affected_rows() - Получает число строк, затронутых предыдущей операцией MySQL. Возвращает число строк, затронутых последним INSERT, UPDATE, REPLACE или DELETE запросом. Целое число, большее нуля, означает количество затронутых или полученных строк. Ноль означает, что запросом вида UPDATE не обновлено ни одной записи, или что ни одна строка не соответствует условию WHERE в запросе, или что запрос еще не был выполнен. Значение -1 указывает на то, что запрос вернул ошибку.

mysqli_error() - Возвращает строку с описанием последней ошибки.
*/

$db = @mysqli_connect('localhost', 'root', '', 'gb') or die('Ошибка соединения с БД');
if(!$db) die(mysqli_connect_error());

mysqli_set_charset($db, "utf8") or die('Не установлена кодировка');

/*$insert = "INSERT INTO gb (name, text) VALUES ('Оля', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')";
$res_insert = mysqli_query($db, $insert);
if($res_insert) echo 'OK';
else echo 'Error';
echo mysqli_error($db);*/

/*$update = "UPDATE gb SET text = CONCAT(text, '|||') WHERE id > 4";
$res_update = mysqli_query($db, $update) or die(mysqli_error($db));*/

/*$delete = "DELETE FROM gb WHERE id > 4";
$res_delete = mysqli_query($db, $delete);
echo mysqli_affected_rows($db);*/

$res = mysqli_query($db, "SELECT * FROM gb");
var_dump($res); -->