$("#mobileBody").hide();
$("#deskBody").hide();

getDimensions = function(){
  screenHeight = $(window).height();
  screenWidth = $(window).width();
}
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
if(isMobile === true){
  $("#mobileBody").show();
  document.getElementById("insertFormMobile").innerHTML = '<form class="theForm" onsubmit="return validateRecaptcha();"><input id="name" name="Name" placeholder="Your Name" required><input id="package" name="Package" placeholder="Desired Service" required><h2 class="fitMiddle big allFields">Fill Out All Fields</h2><input id="email" name="Email" placeholder="Your E-Mail Address" required><input id="video" name="Video" placeholder="Your Website URL" required><h2 class="fitMiddle big success">Success!<br>You&#39;ll be hearing from us</h2><div class="text-xs-center"><div class="g-recaptcha" data-sitekey="6Lct2swUAAAAAKvncYjzXIUXTuyIPuTDYAhS_LE9"></div></div><h2 class="fitMiddle big recap">Validate Re-Captcha</h2><button onclick="getter()" type="submit" value="Submit" id="submit">Submit</button></form>';
}else{
  $("#deskBody").show();
  document.getElementById("insertFormDesktop").innerHTML = '<form class="theForm" onsubmit="return validateRecaptcha();"><input id="name" name="Name" placeholder="Your Name" required><input id="package" name="Package" placeholder="Desired Service" required><h2 class="fitMiddle big allFields">Fill Out All Fields</h2><input id="email" name="Email" placeholder="Your E-Mail Address" required><input id="video" name="Video" placeholder="Your Website URL" required><h2 class="fitMiddle big success">Success!<br>You&#39;ll be hearing from us</h2><div class="text-xs-center"><div class="g-recaptcha" data-sitekey="6Lct2swUAAAAAKvncYjzXIUXTuyIPuTDYAhS_LE9"></div></div><h2 class="fitMiddle big recap">Validate Re-Captcha</h2><button onclick="getter()" type="submit" value="Submit" id="submit">Submit</button></form>';
}

//INIT firebase

var config = {
  apiKey: "AIzaSyCm5zFsIaVs4tplZFS8La9GzdbzeZYgiF8",
  authDomain: "show-up-on.firebaseapp.com",
  databaseURL: "https://show-up-on.firebaseio.com/",
  projectId: "show-up-on",
  storageBucket: "show-up-on.appspot.com",
  messagingSenderId: "757776688783"
};

firebase.initializeApp(config);
//initialize a database called names on the fly
var entries = firebase.database().ref('entries');

//END INIT FIREBASE

function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        //alert("not validated");
        return false;
    } else {
        //alert("validated");
        return true;
    }
}

$(".theForm").submit(function(e) {
    e.preventDefault();
});

name ="";
package ="";
email=""
video=""

getter = function(){
	name = $('#name').val();
	package = $('#package').val();
	email = $('#email').val();
	video = $('#video').val();

  if(name !== "" && package !== "" && email !== "" && video !== ""){
    if(validateRecaptcha() === true){
      $(".recap").hide();
      $(".allFields").hide();
    entries.push({name: name, package: package, email: email, video: video, is_approved: "0"});
    $('#submit').hide();
    $(".success").show();
    setTimeout(function(){ $('#submit').show(); }, 2000);
    name = $('#name').val("");
  	package = $('#package').val("");
  	email = $('#email').val("");
  	video = $('#video').val("");
  }else{
    $(".recap").show();
  }}else{
    //console.log("Fill out all fields pls..")
    $(".allFields").show();
  }
}//END function

//HIDE FORM triggers
$(".success").hide();
$(".allFields").hide();
$(".recap").hide();