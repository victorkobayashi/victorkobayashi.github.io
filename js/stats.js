var highGoalAuton = [15,35,64,54,12,76,46,120];
var avgHighGoalAuton = 0;


for(var i = 0; i < highGoalAuton.length; i++) {
  avgHighGoalAuton += highGoalAuton[i];
}
avgHighGoalAuton/=highGoalAuton.length;

var highGoalAutonSD = 0;
for(var i = 0; i < highGoalAuton.length; i++) {
  highGoalAutonSD += Math.pow(highGoalAuton[i]-avgHighGoalAuton,2);
}

highGoalAutonSD/=highGoalAuton.length;
highGoalAutonSD= Math.sqrt(highGoalAutonSD);






$highGoalAuton = array(15,35,64,54,12,76,46,120);
$avgHighGoalAuton = array_sum($highGoalAuton);
$avgHighGoalAuton /= count($highGoalAuton);


$highGoalAutonSD =0;
for($i=0; $i<count($highGoalAuton); $i++)
{
	 $highGoalAutonSD += ($highGoalAuton[$i]-$avgHighGoalAuton)**2;
}
$highGoalAutonSD/=count($highGoalAuton);
$highGoalAutonSD = sqrt(floatval($highGoalAutonSD));
echo $avgHighGoalAuton;
echo ",";
echo $highGoalAutonSD;
