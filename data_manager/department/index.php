<!DOCTYPE html>
<html>
<head lang="ja">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="shortcut icon" href="../favicon.ico">
	<title>Department Management</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href="../tools/global.css" rel="stylesheet">
</head>
<body>
	<?php
		require_once '../tools/globalUi/loader.php';
		require_once '../tools/globalUi/navbar.php';
		require_once '../tools/globalUi/modal.php';
	?>
	<div class="panel panel-primary dash-board">
		<div class="panel-heading">
			<h3 class="panel-title">Department Management</h3>
		</div>
		<div class="panel-body">
			<?php require_once 'ui/table.php';?>
		</div>
		<div class="panel-footer">
			<button id="dept-add" class="btn btn-primary">Add New</button>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="../tools/global.js"></script>
	<script src="js/main.js"></script>
</body>
</html>