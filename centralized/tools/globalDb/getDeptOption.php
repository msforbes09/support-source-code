<?php
require_once '../../tools/config.php';

try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $pdo->prepare(
		"SELECT * FROM department ORDER BY deptId;"
	);
	$stmt->execute();
	$dept = '';
	while( $data = $stmt->fetch(PDO::FETCH_ASSOC) ){
			$dept .= '<option value="' . $data["deptId"] . '">' . $data["deptName"] . '</option>';
		}

	echo $dept;

} catch ( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>