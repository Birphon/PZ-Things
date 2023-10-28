// Event listener for button clicks
document.querySelector("#button1").addEventListener("click", function () {
	const startingPoints = parseInt(this.getAttribute("data-startingPoint"));
	const skillValue = this.getAttribute("data-skillValue");
	updateSkills(startingPoints, skillValue);
});

document.querySelector("#button2").addEventListener("click", function () {
	const startingPoints = parseInt(this.getAttribute("data-startingPoint"));
	const skillValue = this.getAttribute("data-skillValue");
	updateSkills(startingPoints, skillValue);
});

// Function to update skills and starting points
function updateSkills(startingPoints, skillValue) {
	// Update startingPoints
	const startingPointsElement = document.getElementById("starting-points");
	const currentStartingPoints = parseInt(startingPointsElement.textContent);
	startingPointsElement.textContent = currentStartingPoints + startingPoints;

	// Update skills
	const skillsList = document.getElementById("skills-list");
	const skillItem = document.createElement("li");
	skillItem.textContent = `${skillValue}: ${getSkillValue(skillValue)}`;
	skillsList.appendChild(skillItem);
}

// Function to get the current skill value
function getSkillValue(skillValue) {
	// Implement your logic to get and update skill values here
	return 0;
}

// Add event listeners for checkbox changes and implement logic to update skills and starting points based on checkboxes.
