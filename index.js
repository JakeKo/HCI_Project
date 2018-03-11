const people = [
	{
		name: "Cindy Lou Who",
		email: "clwho@unl.edu",
		photo: "./img/p3.jpeg"
	},
	{
		name: "Sammy Davis",
		email: "slewis@unl.edu",
		photo: "./img/p1.jpeg"
	},
	{
		name: "Ichabod Crane",
		email: "ichabod.crane@unl.edu",
		photo: "./img/p2.jpeg"
	},
	{
		name: "Nikola Tesla",
		email: "teslan@unl.edu",
		photo: "./img/p5.jpeg"
	},
	{
		name: "Elizabeth Ann Seaton",
		email: "ea.seaton@unl.edu",
		photo: "./img/p4.jpeg"
	},
];

$(document).ready(function() {
	people.forEach(person => addCard(person));

	$(".person-card").hover(function() {
		$(this).find(".pin-toggle").show();
	}, function() {
		$(this).find(".pin-toggle").hide();
	});

	$(".network-search-bar-field").on("focus", function() {
		$(".network").hide();
		$(".search-window").css("display", "flex");
	});
});

function addCard(person) {
	$(".network-list").append(
		`<div class="person-card">
			<div class="pin-toggle">
				<i class="material-icons md-18">clear</i>
			</div>
			<div class="card-body">
				<img class="card-portrait" src="${person.photo}" />
				<div class="card-title">${person.name}</div>
			</div>
			<div class="schedule-button">Schedule Appointment</div>
		</div>`
	);

	$(".search-results").append(
		`<div class="person-card">
			<div class="pin-toggle">
				<i class="material-icons md-18">clear</i>
			</div>
			<div class="card-body">
				<img class="card-portrait" src="${person.photo}" />
				<div class="card-title">${person.name}</div>
			</div>
			<div class="schedule-button">Schedule Appointment</div>
		</div>`
	);
}