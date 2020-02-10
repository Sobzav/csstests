<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../reset.css" />
        <link rel="stylesheet" type="text/css" href="../styles.css" />
        <link rel="stylesheet" type="text/css" href="../canvasStyles.css" />
        <title> Ячейка </title>
    <head>
    
    <h2 id="message" class="h2"> Mouse position </h2>
    <body style="border: 1px solid green; padding: 0; width: 100vw; height: 100vh;">
        <canvas id="canvas" width="1000px" height="500px" style="object-fit: contain;">
            Error: Browser does not support canvas element.
        </canvas>
        <script src="..\jquery-3.4.1.min.js"></script>
        <script src="..\jquery.validate.js"></script>
        <script src="cell.js"></script>
        <script src="container.js"></script>
        
        <!-- окошко с информацией о месте хранения -->
        <div 
            id="cellInfoWindow" 
            style='border: 2px solid #4CAF50;
                visibility: hidden;
                position: fixed;
                width: auto;
                height: auto; 
                right: 2%; 
                z-index: 10; 
                top: 5%; 
                /* transition: all 0.3s ease-in;
                transition: all 0.1s ease-out; */
                padding: 10px
            '>
            <p style='font-size: 14px;'> Место хранения: Ячейка </p>
            <div id="cellInfo" style='white-space: pre; font-size: 12px;'></div>
        </div>
    </body>

    <footer>
    </footer>
</html>