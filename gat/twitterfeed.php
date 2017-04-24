
<head>
<meta http-equiv="refresh" content="60">
<style>
.twoPercent{
  float:left;
  background: transparent;
  width: 100%;
  padding: 0;
  margin: 0;
  height: .625% !important;
}
</style>
</head>
<?php
require_once('twitter-api-php-master/TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "762788202650427392-VYuOSXl6br3a43I8eCWbKm3YX9Wu6Bc",
    'oauth_access_token_secret' => "WCCmVL7uZozaOtefUjljkRAY034NSxvVSgidCehPiXrVr",
    'consumer_key' => "zq86dcqHOVfPT3yzgxMnZRJI7",
    'consumer_secret' => "RbmU823x0EWhzNpn1RHxLXN7kIueCMADHehGRLUY5WOYzJKEf6"
);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=Reuters&count=5';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
     $lol = json_decode($twitter->setGetfield($getfield)
->buildOauth($url, $requestMethod)
->performRequest(), true);
             //define arrays to store tweets and time of tweets
             $alltexts = [];
foreach($lol as $items)
    {
        //echo "Time and Date of Tweet: ".$items['created_at']."<br />";
        $texts = ( $items['text']);
        $goodtexts = filter_var($texts, FILTER_SANITIZE_STRING);
        $alltexts[] = $goodtexts;
        //echo "Tweeted by: ". $items['user']['name']."<br />";
        //echo "Screen name: ". $items['user']['screen_name']."<br />";
        //echo "Followers: ". $items['user']['followers_count']."<br />";
        //echo "Friends: ". $items['user']['friends_count']."<br />";
        //echo "Listed: ". $items['user']['listed_count']."<br /><hr />";
    }
?>
<link rel="stylesheet" href="index.css">

  <body>
     <div id="tweetContainer">

     </div>
 </body>

<script type="text/javascript">
$(document).ready(function(){
     var jArray= JSON.parse('<?php echo json_encode($alltexts); ?>');
     var name = /^[A-Z][a-z]{0,20}$/;
     for(var i=0;i<5;i++){
         console.log(jArray[i]);

        if(jArray.test() != true){
        //change();
        incomplete += "Please enter a valid first name \n";
        document.getElementById("fname").style.borderColor = "red";
        }

         jArray[i]
         document.getElementById('tweetContainer').innerHTML += "<div class=\"twoPercent\"></div>";
         document.getElementById('tweetContainer').innerHTML += "<div class=\"tweet\">"+"<div>"+jArray[i]+"</div>"+      "<img src=\"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100\" alt=\"\" title=\"\" />"      +"</div>";
         document.getElementById('tweetContainer').innerHTML += "<div class=\"twoPercent\"></div>";
     }
   });

  </script>
