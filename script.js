function toggleSkills(skillId) {
    var skillElement = document.getElementById(skillId);
    var majorSkill = document.querySelector(`h3[onclick="toggleSkills('${skillId}')"]`);

    // Toggle the display of sub-skills
    if (skillElement.style.display === "block") {
        skillElement.style.display = "none";
        majorSkill.classList.remove("active");
    } else {
        skillElement.style.display = "block";
        majorSkill.classList.add("active");
    }
}
