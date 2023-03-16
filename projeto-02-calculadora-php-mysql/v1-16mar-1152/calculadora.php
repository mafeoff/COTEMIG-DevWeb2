<?php


class Calculadora {


private $numero1 = 0;
private $numero2 = 0;
private $operador = "";

public function __construct($numero1, $numero2, $operador) {
$this->numero1 = $numero1;
$this->numero2 = $numero2;
$this->operador = $operador;
}

private function somar() {
return $this->numero1 + $this->numero2;
}

private function subtrair() {
return $this->numero1 - $this->numero2;
}

private function multiplicar() {
return $this->numero1 * $this->numero2;
}

private function dividir() {
    return $this->numero1 / $this->numero2;
    }

    public function gravar() {
    $con = new mysqli("localhost", "root", "", "devwev2_projeto_02");
    $stmt = $con->prepare(
    "insert into operacoes(numero1, operador, numero2, resultado) values (?, ?, ?, ?)"
    );


   

    $resultado = 0;
    switch ($this->operador) {
    case "+":
    $resultado = $this->somar();
    break;
    case "-":
    $resultado = $this->subtrair();
    break;
    case "*":
    $resultado = $this->multiplicar();
    break;
    case "/":
    $resultado = $this->dividir();
    break;
    }
    

$stmt->bind_param("isii", $this->numero1, $this->operador, $this->numero2, $resultado);
$stmt->execute();
$stmt->close();
$con->close();
}
}
?>