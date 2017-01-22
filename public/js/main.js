var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');
var $occupation = $('#occupation');
var $lifeExpectancy = $('#lifeexpectancy');

var friendTemplate = "" + 
	"<li>" +
	"<p><strong>Name:</strong> {{name}}</p>" +

	"<p><strong>Age:</strong> {{age}}</p>" +

	"<p><strong>occupation:</strong> {{occupation}}</p>" +	

	"<p><strong>Life Expectancy:</strong> {{lifeexpectancy}}</p>" +

	"</li>";

function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
}

$(document).ready(function() {
	// alert("jQuery is working");

	// GET data request
	$.ajax({
		type : "GET",
		url  : "http://rest.learncode.academy/api/learncode/friends",
		
		success : function(friend){
			$.each(friend, function(i, friend){
				addFriend(friend);
			});
		},

		error   : function(){
			alert("Error loading friends");
		}


	});
		
		
	// POST to add a friend
	$('#add-friend').on("click", function(){

		var friend = {
			name: $name.val(),
			occupation: $occupation.val(),
			age: $age.val(),
			lifeexpectancy: $lifeExpectancy.val()
		};

		$.ajax({
		type : "POST",
		url : "http://rest.learncode.academy/api/learncode/friends",
 		data : friend,
		success : function(newFriend) {
				addFriend(newFriend);
				console.log(newFriend);

		},

		error : function() {
			alert("Error");
		}	
		});
	});
});