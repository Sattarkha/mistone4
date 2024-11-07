var generateResumeButton = document.getElementById("generate-resume");
var resumeContainer = document.getElementById("resume-container");
var formContainer = document.querySelector(".form-container");
var editResumeButton = document.getElementById("edit-resume");
var resumeData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    experience: "",
    photoURL: ""
};
// Function to update the resume preview dynamically
function updateResumePreview() {
    var generatedResume = document.getElementById("generated-resume");
    if (generatedResume) {
        generatedResume.innerHTML = "\n            <div class=\"resume-header\">\n                ".concat(resumeData.photoURL ? "<img src=\"".concat(resumeData.photoURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : "", "\n                <h2>").concat(resumeData.name, "</h2>\n                <p class=\"contact-info\">Email: ").concat(resumeData.email, "</p>\n                <p class=\"contact-info\">Phone: ").concat(resumeData.phone, "</p>\n            </div>\n            <div class=\"section\">\n                <h3>Address</h3>\n                <p>").concat(resumeData.address, "</p>\n            </div>\n            <div class=\"section\">\n                <h3>Skills</h3>\n                <ul class=\"skills-list\">\n                    ").concat(resumeData.skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"section\">\n                <h3>Experience</h3>\n                <p>").concat(resumeData.experience, "</p>\n            </div>\n        ");
    }
}
// Event listener to handle resume generation
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f;
    // Collect user input data
    resumeData.name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
    resumeData.email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
    resumeData.phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || "";
    resumeData.address = ((_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.value) || "";
    resumeData.skills = ((_e = document.getElementById("skills")) === null || _e === void 0 ? void 0 : _e.value) || "";
    resumeData.experience = ((_f = document.getElementById("experience")) === null || _f === void 0 ? void 0 : _f.value) || "";
    // Handle profile picture upload
    var photoInput = document.getElementById("photo");
    if ((photoInput === null || photoInput === void 0 ? void 0 : photoInput.files) && photoInput.files[0]) {
        resumeData.photoURL = URL.createObjectURL(photoInput.files[0]); // Create a temporary URL for the image file
    }
    // Generate the resume preview
    updateResumePreview();
    // Show the resume container and hide the form container
    resumeContainer.style.display = "block";
    formContainer.style.display = "none";
});
// Event listener to allow editing of the generated resume
editResumeButton === null || editResumeButton === void 0 ? void 0 : editResumeButton.addEventListener("click", function () {
    // Show the form container and hide the resume container
    formContainer.style.display = "block";
    resumeContainer.style.display = "none";
    // Pre-populate the form with current data
    document.getElementById("name").value = resumeData.name;
    document.getElementById("email").value = resumeData.email;
    document.getElementById("phone").value = resumeData.phone;
    document.getElementById("address").value = resumeData.address;
    document.getElementById("skills").value = resumeData.skills;
    document.getElementById("experience").value = resumeData.experience;
});
