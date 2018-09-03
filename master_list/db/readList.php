<?php
require_once 'config.php';
// //print_r ($_REQUEST);
// $filter = '';
// /*
// if ($_REQUEST["employment_stat_filter"] != 1){
// 	$filter .= ' and staff.employment_stat = ' . $_REQUEST["employment_stat_filter"];
// }
// if ($_REQUEST["job_cate_filter"] != 1){
// 	$filter .= ' and staff.job_cate = ' . $_REQUEST["job_cate_filter"];
// }
// if ($_REQUEST["job_desc_filter"] != 1){
// 	$filter .= ' and staff.job_desc = ' . $_REQUEST["job_desc_filter"];
// }
// */
// if ($_REQUEST["team_filter"] != 1){
// 	$filter .= ' and staff.team = ' . $_REQUEST["team_filter"];
// }
try {
	$pdo = new PDO( 'mysql:host=' . $hostname . ';dbname=' . $dbname . ';charset=utf8;', $username, $password );
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$stmt = $pdo->prepare("
		SELECT s.staffId, s.idNum, concat(s.firstName, ' ', s.lastName) as fullName, s.nickName, e.statDesc, j.jobName, t.teamName 
		FROM
		staff s
		JOIN empstatus e
		ON s.statId	= e.statId
		JOIN jobdesc j
		ON s.jobId = j.jobId
		JOIN team t
		ON s.teamId = t.teamId	
		");
	$stmt->execute();
// 	echo $stmt->rowCount() .' record/s found.';
	$content = '';
	$count = 1;
	while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ){
		$content .= '<tr>';
		$content .= '<td>'. $count .'.</td>';
		$content .= '<td>'. $row["idNum"] .'</td>';
		$content .= '<td>'. $row["fullName"] .'</td>';
		$content .= '<td>'. $row["nickName"] .'</td>';
		$content .= '<td>'. $row["statDesc"] .'</td>';
		$content .= '<td>'. $row["jobName"] .'</td>';
		$content .= '<td>'. $row["teamName"] .'</td>';
		$content .= '</tr>';
		$count += 1;
		}
} catch( PDOException $e ) {
	echo $e->getMessage();
}
$pdo = null;
?>
<table class="table table-bordered table-condensed table-striped table-hover">
	<thead class="bg-primary">
		<tr>
			<th>No.</th>
			<th>Id No.</th>
			<th>Full Name</th>
			<th>Nick Name</th>
			<th>Status</th>
			<th>Job Desc</th>
			<th>Team</th>
		</tr>
	</thead>
	<tbody>
		<?php echo $content; ?>
	</tbody>
</table>