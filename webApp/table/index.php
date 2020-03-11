<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="..\css\reset.css" />
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />
    <!-- <link rel="stylesheet" type="text/css" href="..\css\table.css" /> -->
    <link rel="stylesheet" type="text/css" href="css\index.css" />
    <title> Адреса мест хранения </title>

</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <div class="local-grid">

            <header class="header-top">
                <!-- TOP - Панель с заголовком -->
                <div class="wide-100">
                    <label class="" for="selCode"> Тип </label>

                    <!-- Поисковая строка с выпадающим списком -->
                    <div class="dropdown wide-100" tabindex="0">
                        <input class="wide-100" type="text" placeholder="Поиск.." id="myInput">
                        <ul id="packList" class="dropdown-content hidden" tabindex="0">
                        </ul>
                        <button class="dropbtn">&#9013</button>
                    </div>

                    <!-- END Выпадающий список элементов -->
                    <!-- Кнопка справа  -->
                    <div>
                        <button class="" id="btnEdit"> Редактировать </button>
                    </div>
                </div>
            </header>
            <main class="table">
            <div class=""> 
            <table>
            <caption> Адреса мест хранения </caption>
            <thead>
                <tr>
                    <th>id</th>
                    <th>refId</th>
                    <th>addr</th>
                    <th>code</th>
                    <th>name</th>
                    <th>payload</th>
                    <th>x</th>
                    <th>y</th>
                    <th>wx</th>
                    <th>wy</th>
                    <th>wz</th>
                    <th>iwx</th>
                    <th>iwy</th>
                    <th>iwz</th>
                    <th>color</th>
                    <th>created</th>
                    <th>updated</th>
                    <th>deleted</th>
                    <th>place_type_id</th>
                    <th>place_status_id</th>
                    <th>place_purpose_id</th>
                    <th>picture</th>
                    <th>item</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>84</td>
                    <td>--</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Склад 5</td>
                    <td>1000000000</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5500</td>
                    <td>17700</td>
                    <td>2970</td>
                    <td>5500</td>
                    <td>17700</td>
                    <td>2970</td>
                    <td>#97A1AA</td>
                    <td>2020-03-10 15:33:26</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>--</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Линия 1</td>
                    <td>100000000</td>
                    <td>--</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>4</td>
                    <td>A</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>B</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>4</td>
                    <td>C</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>4</td>
                    <td>D</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>4</td>
                    <td>E</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>4</td>
                    <td>F</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>4</td>
                    <td>G</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                                        <td>Array</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>4</td>
                    <td>H</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                                        <td>Array</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>4</td>
                    <td>I</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>4</td>
                    <td>K</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>4</td>
                    <td>L</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>4</td>
                    <td>M</td>
                    <td>500.1</td>
                    <td>Стеллаж с наполнением</td>
                    <td>900000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>1000</td>
                    <td>2262</td>
                    <td>498</td>
                    <td>006d8f</td>
                    <td>2020-03-10 15:27:01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>--</td>
                    <td>511.2</td>
                    <td>--</td>
                    <td>Линия 511.2</td>
                    <td>100000000</td>
                    <td>1414</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>--</td>
                    <td>511.2A</td>
                    <td>--</td>
                    <td>Стеллаж 2A.01</td>
                    <td>100000000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>--</td>
                    <td>511.2B</td>
                    <td>--</td>
                    <td>Стеллаж 2A.02</td>
                    <td>100000000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>--</td>
                    <td>511.2C</td>
                    <td>--</td>
                    <td>Стеллаж 2A.03</td>
                    <td>100000000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>--</td>
                    <td>511.2D</td>
                    <td>--</td>
                    <td>Стеллаж 2A.04</td>
                    <td>100000000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>--</td>
                    <td>511.2E</td>
                    <td>--</td>
                    <td>Стеллаж 2A.05</td>
                    <td>100000000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>--</td>
                    <td>511.2F</td>
                    <td>--</td>
                    <td>Стеллаж 2A.06</td>
                    <td>100000000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>--</td>
                    <td>511.2G</td>
                    <td>--</td>
                    <td>Стеллаж 2A.07</td>
                    <td>100000000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>--</td>
                    <td>511.2H</td>
                    <td>--</td>
                    <td>Стеллаж 2A.08</td>
                    <td>100000000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>--</td>
                    <td>511.2J</td>
                    <td>--</td>
                    <td>Стеллаж 2A.09</td>
                    <td>100000000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>--</td>
                    <td>511.2K</td>
                    <td>--</td>
                    <td>Стеллаж 2A.10</td>
                    <td>100000000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>--</td>
                    <td>511.2L</td>
                    <td>--</td>
                    <td>Стеллаж 2A.11</td>
                    <td>100000000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>--</td>
                    <td>511.2M</td>
                    <td>--</td>
                    <td>Стеллаж 2A.12</td>
                    <td>100000000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:19</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>--</td>
                    <td>511.3</td>
                    <td>--</td>
                    <td>Линия 511.3</td>
                    <td>100000000</td>
                    <td>1844</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>--</td>
                    <td>511.3A</td>
                    <td>--</td>
                    <td>Стеллаж 3A.01</td>
                    <td>100000000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>--</td>
                    <td>511.3В</td>
                    <td>--</td>
                    <td>Стеллаж 3A.02</td>
                    <td>100000000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>--</td>
                    <td>511.3C</td>
                    <td>--</td>
                    <td>Стеллаж 3A.03</td>
                    <td>100000000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>--</td>
                    <td>511.3D</td>
                    <td>--</td>
                    <td>Стеллаж 3A.04</td>
                    <td>100000000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>--</td>
                    <td>511.3E</td>
                    <td>--</td>
                    <td>Стеллаж 3A.05</td>
                    <td>100000000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>--</td>
                    <td>511.3F</td>
                    <td>--</td>
                    <td>Стеллаж 3A.06</td>
                    <td>100000000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>--</td>
                    <td>511.3G</td>
                    <td>--</td>
                    <td>Стеллаж 3A.07</td>
                    <td>100000000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>35</td>
                    <td>--</td>
                    <td>511.3H</td>
                    <td>--</td>
                    <td>Стеллаж 3A.08</td>
                    <td>100000000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>--</td>
                    <td>511.3J</td>
                    <td>--</td>
                    <td>Стеллаж 3A.09</td>
                    <td>100000000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>37</td>
                    <td>--</td>
                    <td>511.3K</td>
                    <td>--</td>
                    <td>Стеллаж 3A.10</td>
                    <td>100000000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>38</td>
                    <td>--</td>
                    <td>511.3L</td>
                    <td>--</td>
                    <td>Стеллаж 3A.11</td>
                    <td>100000000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>39</td>
                    <td>--</td>
                    <td>511.3M</td>
                    <td>--</td>
                    <td>Стеллаж 3A.12</td>
                    <td>100000000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:24</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>40</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Линия 511.4</td>
                    <td>100000000</td>
                    <td>3257</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>41</td>
                    <td>--</td>
                    <td>511.4A</td>
                    <td>--</td>
                    <td>Стеллаж 4A.01</td>
                    <td>100000000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>42</td>
                    <td>--</td>
                    <td>511.4B</td>
                    <td>--</td>
                    <td>Стеллаж 4A.02</td>
                    <td>100000000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>43</td>
                    <td>--</td>
                    <td>511.4C</td>
                    <td>--</td>
                    <td>Стеллаж 4A.03</td>
                    <td>100000000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>44</td>
                    <td>--</td>
                    <td>511.4D</td>
                    <td>--</td>
                    <td>Стеллаж 4A.04</td>
                    <td>100000000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>45</td>
                    <td>--</td>
                    <td>511.4E</td>
                    <td>--</td>
                    <td>Стеллаж 4A.05</td>
                    <td>100000000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>46</td>
                    <td>--</td>
                    <td>511.4F</td>
                    <td>--</td>
                    <td>Стеллаж 4A.06</td>
                    <td>100000000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>47</td>
                    <td>--</td>
                    <td>511.4G</td>
                    <td>--</td>
                    <td>Стеллаж 4A.07</td>
                    <td>100000000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>48</td>
                    <td>--</td>
                    <td>511.4H</td>
                    <td>--</td>
                    <td>Стеллаж 4A.08</td>
                    <td>100000000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>49</td>
                    <td>--</td>
                    <td>511.4J</td>
                    <td>--</td>
                    <td>Стеллаж 4A.09</td>
                    <td>100000000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>50</td>
                    <td>--</td>
                    <td>511.4K</td>
                    <td>--</td>
                    <td>Стеллаж 4A.10</td>
                    <td>100000000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>51</td>
                    <td>--</td>
                    <td>511.4L</td>
                    <td>--</td>
                    <td>Стеллаж 4A.11</td>
                    <td>100000000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>52</td>
                    <td>--</td>
                    <td>511.4M</td>
                    <td>--</td>
                    <td>Стеллаж 4A.12</td>
                    <td>100000000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:28</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>53</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Линия 511.5</td>
                    <td>100000000</td>
                    <td>3687</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>54</td>
                    <td>--</td>
                    <td>511.5A</td>
                    <td>--</td>
                    <td>Стеллаж 5A.01</td>
                    <td>100000000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>55</td>
                    <td>--</td>
                    <td>511.5B</td>
                    <td>--</td>
                    <td>Стеллаж 5A.02</td>
                    <td>100000000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>56</td>
                    <td>--</td>
                    <td>511.5C</td>
                    <td>--</td>
                    <td>Стеллаж 5A.03</td>
                    <td>100000000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>57</td>
                    <td>--</td>
                    <td>511.5D</td>
                    <td>--</td>
                    <td>Стеллаж 5A.04</td>
                    <td>100000000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>58</td>
                    <td>--</td>
                    <td>511.5E</td>
                    <td>--</td>
                    <td>Стеллаж 5A.05</td>
                    <td>100000000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>59</td>
                    <td>--</td>
                    <td>511.5F</td>
                    <td>--</td>
                    <td>Стеллаж 5A.06</td>
                    <td>100000000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>60</td>
                    <td>--</td>
                    <td>511.5G</td>
                    <td>--</td>
                    <td>Стеллаж 5A.07</td>
                    <td>100000000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>61</td>
                    <td>--</td>
                    <td>511.5H</td>
                    <td>--</td>
                    <td>Стеллаж 5A.08</td>
                    <td>100000000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>62</td>
                    <td>--</td>
                    <td>511.5J</td>
                    <td>--</td>
                    <td>Стеллаж 5A.09</td>
                    <td>100000000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>63</td>
                    <td>--</td>
                    <td>511.5K</td>
                    <td>--</td>
                    <td>Стеллаж 5A.10</td>
                    <td>100000000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>64</td>
                    <td>--</td>
                    <td>511.5L</td>
                    <td>--</td>
                    <td>Стеллаж 5A.11</td>
                    <td>100000000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>65</td>
                    <td>--</td>
                    <td>511.5M</td>
                    <td>--</td>
                    <td>Стеллаж 5A.12</td>
                    <td>100000000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>500</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:32</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>66</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Линия 511.6</td>
                    <td>100000000</td>
                    <td>5100</td>
                    <td>--</td>
                    <td>12384</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>67</td>
                    <td>--</td>
                    <td>511.6A</td>
                    <td>--</td>
                    <td>Стеллаж 6A.01</td>
                    <td>100000000</td>
                    <td>11384</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>68</td>
                    <td>--</td>
                    <td>511.6B</td>
                    <td>--</td>
                    <td>Стеллаж 6A.02</td>
                    <td>100000000</td>
                    <td>10352</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>69</td>
                    <td>--</td>
                    <td>511.6C</td>
                    <td>--</td>
                    <td>Стеллаж 6A.03</td>
                    <td>100000000</td>
                    <td>9320</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>70</td>
                    <td>--</td>
                    <td>511.6D</td>
                    <td>--</td>
                    <td>Стеллаж 6A.04</td>
                    <td>100000000</td>
                    <td>8288</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>71</td>
                    <td>--</td>
                    <td>511.6E</td>
                    <td>--</td>
                    <td>Стеллаж 6A.05</td>
                    <td>100000000</td>
                    <td>7256</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>72</td>
                    <td>--</td>
                    <td>511.6F</td>
                    <td>--</td>
                    <td>Стеллаж 6A.06</td>
                    <td>100000000</td>
                    <td>6224</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>73</td>
                    <td>--</td>
                    <td>511.6G</td>
                    <td>--</td>
                    <td>Стеллаж 6A.07</td>
                    <td>100000000</td>
                    <td>5192</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>74</td>
                    <td>--</td>
                    <td>511.6H</td>
                    <td>--</td>
                    <td>Стеллаж 6A.08</td>
                    <td>100000000</td>
                    <td>4160</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>75</td>
                    <td>--</td>
                    <td>511.6J</td>
                    <td>--</td>
                    <td>Стеллаж 6A.09</td>
                    <td>100000000</td>
                    <td>3128</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>76</td>
                    <td>--</td>
                    <td>511.6K</td>
                    <td>--</td>
                    <td>Стеллаж 6A.10</td>
                    <td>100000000</td>
                    <td>2096</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>77</td>
                    <td>--</td>
                    <td>511.6L</td>
                    <td>--</td>
                    <td>Стеллаж 6A.11</td>
                    <td>100000000</td>
                    <td>1064</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>78</td>
                    <td>--</td>
                    <td>511.6M</td>
                    <td>--</td>
                    <td>Стеллаж 6A.12</td>
                    <td>100000000</td>
                    <td>26</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:37</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>79</td>
                    <td>--</td>
                    <td>511.7</td>
                    <td>--</td>
                    <td>Линия 511.7</td>
                    <td>100000000</td>
                    <td>--</td>
                    <td>12768</td>
                    <td>2032</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:27:45</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>80</td>
                    <td>--</td>
                    <td>511.7A</td>
                    <td>--</td>
                    <td>Стеллаж 1A.401</td>
                    <td>100000000</td>
                    <td>1032</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:45</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>81</td>
                    <td>--</td>
                    <td>511.7B</td>
                    <td>--</td>
                    <td>Стеллаж 1A.402</td>
                    <td>100000000</td>
                    <td>--</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:27:45</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>82</td>
                    <td>--</td>
                    <td>511.8</td>
                    <td>--</td>
                    <td>Линия 511.8</td>
                    <td>100000000</td>
                    <td>5100</td>
                    <td>12696</td>
                    <td>1200</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#bbbbbb</td>
                    <td>2020-03-10 15:28:45</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                    <td>--</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>83</td>
                    <td>--</td>
                    <td>511.8N</td>
                    <td>--</td>
                    <td>Стеллаж 1A.401</td>
                    <td>100000000</td>
                    <td>100</td>
                    <td>--</td>
                    <td>1000</td>
                    <td>2970</td>
                    <td>400</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>#253D0E</td>
                    <td>2020-03-10 15:28:45</td>
                    <td>--</td>
                    <td>--</td>
                    <td>5</td>
                    <td>1</td>
                    <td>1</td>
                                       <td>--</td>
                    <td>Array</td>
                </tr>
            </tbody>
        </table>


            </main>

        </div>



    <!-- Строка статуса -->
    <!-- <section class="status-bar">
        <div class="">
            <label class="status-label" id="lblStatusEdit"> </label>
            <label class="status-label"> | </label>
            <label class="status-label-changed" id="lblStatusChanged"> </label>
            <label class="status-label"> | </label>
            <label class="status-label" id="lblStatus"> </label>
            <label class="status-label"> | </label>
            <label class="status-label" id="lblStatusInfo"> </label>
            <label hidden class="status-label"> | </label>
        </div>
    </section> -->
    </div></div>

    <!--скрипты для стилей -->
    <script src="../jquery/jquery-3.4.1.min.js"></script>
    <script src="../jquery/jquery.validate.js"></script>
    <script src="settings.js?n=1"></script>
    <script src="package.js?n=1"></script>
    <script src="subblock.js?n=1"></script>
    <script src="../searchList/searchList.js?n=1"></script>
    <script src="main.js?n=1"></script>
</body>

<footer>
</footer>

<!-- <dialog class="dialog-modal" id="dialog_modal">

    <div class="gridContainer__modal">
        <header class="header-top__modal">


            <div id="title" class=""> </div>

        </header>



            <header class="header__modal">
                <div id="header" class="label-heading"> Подзаголовок id="header" </div>
            </header>

            <section id="mess" class="section-modal">
                <div>
                    <p id="" class=""><span style="font-weight: bold;">id="mess"</span> - Сообщение на одну строчку</p>
                </div>
            </section>


            <section class="right-block__buttons--modal">

                <button class="button-right" id="btnOk_modal"> OK </button>
                <button class="button-right" id="btnCancel_modal"> Cancel </button>
                <button class="button-right" id="btnClose_modal"> Close </button>

            </section>

    </div>
</dialog> -->


</html>