<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculadora - Processar</title>
</head>
<body>
<?php
require("calculadora.php");
$numero1 = intval($_POST["numero1"]);
$numero2 = intval($_POST["numero2"]);
$operador = $_POST["operador"];
$calculadora = new Calculadora($numero1, $numero2, $operador);
$calculadora->gravar();
echo "<h1>Operação realizada com sucesso!</h1>";
?>
<p>
<a href="index.php">Voltar</a>
</p>
</body>
</html>

