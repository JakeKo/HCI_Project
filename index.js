const people = [
	{
		name: "Cindy Lou Who",
		officeHours: "MWF 10:30 - 3:00",
		email: "clwho@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p3.jpeg",
		isPinned: true,
	},
	{
		name: "Sammy Davis",
		officeHours: "MWF 10:30 - 3:00",
		email: "slewis@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p1.jpeg",
		isPinned: true,
	},
	{
		name: "Ichabod Crane",
		officeHours: "MWF 10:30 - 3:00",
		email: "ichabod.crane@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p2.jpeg",
		isPinned: true,
	},
	{
		name: "Nikola Tesla",
		officeHours: "MWF 10:30 - 3:00",
		email: "teslan@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p5.jpeg",
		isPinned: true,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: true,
	},


	
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
	{
		name: "Elizabeth Ann Seaton",
		officeHours: "MWF 10:30 - 3:00",
		email: "ea.seaton@unl.edu",
		phone: "(402) 123-4567",
		photo: "./img/p4.jpeg",
		isPinned: false,
	},
];

const showPinned = (person) => person.isPinned;
const showUnpinned = (person) => !person.isPinned;
const showAdvisors = (person) => person.isAdvisor;
const showProfessors = (person) => person.isProfessor;
const showAll = (person) => true;

$(document).ready(function() {
	refreshCardList(".network-list", showPinned);
	refreshCardList(".search-results", showAll);

	$(".person-search-bar-field").keyup(function(e) {
		if (e.keyCode == 13) {
			$(".network").hide();
			$(".search-window").css("display", "flex");
		}
	});

	$(".fullscreen-filter").on("click", function() {
		$(".fullscreen-filter").hide();
		$(".focus-card").hide();
	});

	$(".search-exit").on("click", function() {
		refreshCardList(".network-list", showPinned);
		$(".network").show();
		$(".search-window").hide();
	});

	$(".search-filter").change(function() {
		refreshCardList(".search-results", showAll);
	})
});

function addCard(index, person, parent) {
	const html =
		`<div class="person-card">
			<div class="pin-toggle">
				<i class="material-icons md-18">${person.isPinned ? "clear" : "add"}</i>
			</div>
			<div class="card-body" data-index="${index}">
				<img class="card-portrait" src="${person.photo}" />
				<div class="card-title">${person.name}</div>
			</div>
			<div class="schedule-button" onclick="window.location.href='./Schedule/index.html'">Schedule Appointment</div>
		</div>`;

	$(parent).append(html);
}

function focusCard(index) {
	const person = people[index];

	$(".focus-card").find(".focus-card-portrait").attr("src", person.photo);
	$(".focus-card").find(".focus-card-title").html(person.name);
	$(".focus-card").find(".focus-card-office-hours").html(person.officeHours);
	$(".focus-card").find(".focus-card-email").html(person.email);
	$(".focus-card").find(".focus-card-phone").html(person.phone);
	$(".focus-card").find(".focus-pin-toggle").html(`<i class="material-icons md-24">${person.isPinned ? "clear" : "add"}</i>`);

	$(".fullscreen-filter").show();
	$(".focus-card").css("display", "flex");
}

function refreshCardList(parent, filter) {
	$(parent).empty();

	people.forEach((person, index) => {
		if (filter(person)) {
			addCard(index, person, parent);
		}
	});

	refreshCardHandlers();
}

function refreshCardHandlers() {
	$(".card-body").unbind("click");
	$(".card-body").unbind("mouseenter mouseleave");
	$(".person-card").unbind("click");

	$(".person-card").hover(function() {
		$(this).find(".pin-toggle").show();
	}, function() {
		$(this).find(".pin-toggle").hide();
	});

	$(".card-body").on("click", function() {
		focusCard($(this).data("index"));
	});

	$(".person-card").on("click", ".pin-toggle", function() {
		let index = $(this).parent().find(".card-body").data("index");
		people[index].isPinned = !people[index].isPinned;

		refreshCardList(".search-results", showAll);
		refreshCardList(".network-list", showPinned)
	});
}