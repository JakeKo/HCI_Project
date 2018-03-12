const people = [
	{
		name: "Cindy Lou Who",
		officeHours: "MWF 10:30 - 3:00",
		email: "clwho@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p3.jpeg"
	},
	{
		name: "Sammy Davis",
		officeHours: "MWF 10:30 - 3:00",
		email: "slewis@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p1.jpeg"
	},
	{
		name: "Ichabod Crane",
		officeHours: "MWF 10:30 - 3:00",
		email: "ichabod.crane@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p2.jpeg"
	},
	{
		name: "Nikola Tesla",
		officeHours: "MWF 10:30 - 3:00",
		email: "teslan@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p5.jpeg"
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg"
	},
];

$(document).ready(function() {
	people.forEach((person, index) => addCard(index, person));

	$(".person-card").hover(function() {
		$(this).find(".pin-toggle").show();
	}, function() {
		$(this).find(".pin-toggle").hide();
	});

	$(".card-body").on("click", function() {
		focusCard($(this).data("index"));
	})

	$(".person-search-bar-field").on("focus", function() {
		$(".network").hide();
		$(".search-window").css("display", "flex");
	});

	$(".fullscreen-filter").on("click", unfocusCard);
});

function addCard(index, person) {
	const html =
		`<div class="person-card">
			<div class="pin-toggle">
				<i class="material-icons md-18">clear</i>
			</div>
			<div class="card-body" data-index="${index}">
				<img class="card-portrait" src="${person.photo}" />
				<div class="card-title">${person.name}</div>
			</div>
			<div class="schedule-button" onclick="window.location.href='./Schedule/index.html'">Schedule Appointment</div>
		</div>`;

	$(".network-list").append(html);
	$(".search-results").append(html);
}

function focusCard(index) {
	let person = people[index];

	$(".focus-card").find(".focus-card-portrait").attr("src", person.photo);
	$(".focus-card").find(".focus-card-title").html(person.name);
	$(".focus-card").find(".focus-card-office-hours").html(person.officeHours);
	$(".focus-card").find(".focus-card-email").html(person.email);
	$(".focus-card").find(".focus-card-phone").html(person.phone);

	$(".fullscreen-filter").css("display", "block");
	$(".focus-card").css("display", "flex");
}

function unfocusCard() {
	$(".fullscreen-filter").css("display", "none");
	$(".focus-card").css("display", "none");
}