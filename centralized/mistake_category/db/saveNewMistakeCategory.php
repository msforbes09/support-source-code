<?php
require_once '../../tools/config.php';
$mistakeCategory = $_REQUEST;
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		
	$stmt = $pdo->prepare(
		"INSERT INTO mistake_category(deptId, mistakeDesc, mistakePoint)
		VALUES(:dept, :mistakeDesc, :mistakePoint);"
	);
	$stmt->bindValue(':dept', $mistakeCategory["dept"], PDO::PARAM_INT);
	$stmt->bindValue(':mistakeDesc', $mistakeCategory["mistakeDesc"], PDO::PARAM_STR);
	$stmt->bindValue(':mistakePoint', $mistakeCategory["mistakePoint"], PDO::PARAM_STR);
	$stmt->execute();

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>