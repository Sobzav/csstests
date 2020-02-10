<link rel="stylesheet" type="text/css" href="styles.css" />

<?php

print_r ('Product Type Editing 0004'. '<br />');
print_r ('Введите информацию о типе товара'. '<br />'. '<br />');

// класс работы с таблицей в базе данных
class myDbTable {
    // Подключение к базе данных
    public $dbLink;

    public $host = "127.0.0.1:3306"; // адрес сервера 
    public $db_user = 'admin'; // имя пользователя
    public $db_pass = 'admin'; // пароль
     
    // название базы данных
    public $database = 'sobzav'; // имя базы данных;

    // название таблицы
    public $tableName;

    // текст SQL запроса
    public $query;

    // поля (столбцы) таблицы выполненного запроса
    public $fields;

    // результат запроса к базе данных
    public $result;

    // язык в котором класс возвращает название полей таблицы
    public $tr = "";

    // номер ошибки
    public $errNo;

    // конструктор класса
    function __construct($tableName) {

        // инициализация имени таблицы
        $this->tableName = $tableName;
    }

    // деструктор класса
    function __destructor() {
        print "Destroying " . __CLASS__ . "\n";
        $this->result->free();
        $this->dbLink->close();
    }

    // метод
    // подключение к базе данных
    function connect() {
        // подключаемся к серверу
        $this->dbLink = new mysqli($this->host, $this->db_user, $this->db_pass);
 
        // проверяем ошибки подключения
        $errNo = $this->dbLink->connect_errno;
        if ($errNo) {
            printf("Connect failed: %s\n", $errNo);
            $this->errNo = $errNo;
            return $errNo;
        } 
    }

    // выполняем запрос в базу данных
    function fetch() {
        $this->result = $this->dbLink->query($this->query);
        $this->fields = $this->fetchFields($this->dbLink, $this->database, $this->tableName, 'field_name');
    }

    function fetchFields($mysqli, $database, $tableName, $fieldsTableName, $lng = 'db') {
        //$fields_ = array();
        $fields_ = mysqli_fetch_fields($this->result);
        
        foreach ($fields_ as $val) {
            print $val->table ."." .$val->name ." ";
        }

        $query = " 
                SELECT COLUMN_NAME
                FROM INFORMATION_SCHEMA.COLUMNS
                WHERE TABLE_SCHEMA = '$database' AND TABLE_NAME = '$tableName';
                ";

        // делаем запрос SELECT из базы данных
        // и сохраняем его в $result
        // если результат запросы не пуст
        // то заполняем таблицу
        if ($result = $mysqli->query($query)) {

            // читаем построчно результаты запроса
            // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
            // сохраняем строку в массив $row
            
            while ($row = $result->fetch_array(MYSQLI_NUM)) {
                $fields_[] = $row[0];
            }
            
            // освобождаем ресурсы
            return $fields_;//->fetch_array(MYSQLI_NUM);

            $result->free();

        } else {
            print_r ('Таблица пуста <br/>');
            print_r("Error: %s\n<br/>", $mysqli->error);
        }

        $mysqli->close();
    }
}

// создаем экземпляр класса myDbTable
$table = new myDbTable('product');

// подключаемся к базе данных
$errNo = $table->connect();

// сохраняем запрос SELECT в строку
$table->query = " 
    SELECT 
        product.id, 
        product.name, 
        product_type.product_type_name,
        pc.product_category_name,
        p.w,
        p.h,
        p.l
    FROM 
        sobzav.product AS p
    LEFT JOIN
        (sobzav.product_type AS pt,
        sobzav.product_category AS pc)
    ON 
        (p.product_type_id = pt.product_type_id AND
        p.product_category_id = pc.product_category_id)
    ";

// print_r ($query);
// print_r ('<br/>');
// print_r ('<br/>');

// рисуем шапку таблицы
$output = '';
$output .= '<div class="divTable">';
$output .=     '<div class="divTableBody">';
$output .=         '<div class="divTableRow">';

$table->fetch();

// выводим названия полей таблицы
$row = $table->fields;

foreach ($row as $key) {
    $output .=             '<div class="divTableCell", class="divTableHeading">'. $key. '</div>';
}
// закрываем строку в html
$output .= '</div>';
print $output;

$output = "";
reset($row);

// делаем запрос SELECT из базы данных
// и сохраняем его в $result
// если результат запросы не пуст
// то заполняем таблицу
if ($errNo == 0) {

    // читаем построчно результаты запроса
    // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
    // с параметром FBSQL_BOTH (ключи и значения вернутся в нумерованном массиве)
    // сохраняем строку в массив $row
    while ($row = $table->result->fetch_array(MYSQLI_NUM)) {

        // открываем строку в html
        $output .=         '<div class="divTableRow">';

        // перебираем значения из строки $row
        // сохраняем каждое в $val
        foreach ($row as $kay =>$val) {
            $output .=             '<div class="divTableCell">'. $val. '</div>';
        }
        // закрываем строку divTableRow
        $output .= '</div>';
    }
} else {
    print_r ('Таблица пуста <br/>');
    print_r("Error: %s\n<br/>", $table->errNo);
}

// закрываем TableBody
$output .= '</div>';

// закрываем Table
$output .= '</div>';

print $output;
print_r ('<br/>');

// закрываем подключение
$table = null;

if ($errNo == 0) {
    echo "Выполнение запроса прошло успешно<br/>";
}


?>