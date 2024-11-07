const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement | null;
const resumeContainer = document.getElementById("resume-container") as HTMLDivElement | null;
const formContainer = document.querySelector(".form-container") as HTMLDivElement | null;
const editResumeButton = document.getElementById("edit-resume") as HTMLButtonElement | null;

let resumeData = {
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
    const generatedResume = document.getElementById("generated-resume") as HTMLDivElement | null;
    if (generatedResume) {
        generatedResume.innerHTML = `
            <div class="resume-header">
                ${resumeData.photoURL ? `<img src="${resumeData.photoURL}" alt="Profile Picture" class="profile-pic">` : ""}
                <h2>${resumeData.name}</h2>
                <p class="contact-info">Email: ${resumeData.email}</p>
                <p class="contact-info">Phone: ${resumeData.phone}</p>
            </div>
            <div class="section">
                <h3>Address</h3>
                <p>${resumeData.address}</p>
            </div>
            <div class="section">
                <h3>Skills</h3>
                <ul class="skills-list">
                    ${resumeData.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
            <div class="section">
                <h3>Experience</h3>
                <p>${resumeData.experience}</p>
            </div>
        `;
    }
}

// Event listener to handle resume generation
generateResumeButton?.addEventListener("click", function() {
    // Collect user input data
    resumeData.name = (document.getElementById("name") as HTMLInputElement | null)?.value || "";
    resumeData.email = (document.getElementById("email") as HTMLInputElement | null)?.value || "";
    resumeData.phone = (document.getElementById("phone") as HTMLInputElement | null)?.value || "";
    resumeData.address = (document.getElementById("address") as HTMLTextAreaElement | null)?.value || "";
    resumeData.skills = (document.getElementById("skills") as HTMLTextAreaElement | null)?.value || "";
    resumeData.experience = (document.getElementById("experience") as HTMLTextAreaElement | null)?.value || "";

    // Handle profile picture upload
    const photoInput = document.getElementById("photo") as HTMLInputElement | null;
    if (photoInput?.files && photoInput.files[0]) {
        resumeData.photoURL = URL.createObjectURL(photoInput.files[0]);  // Create a temporary URL for the image file
    }

    // Generate the resume preview
    updateResumePreview();

    // Show the resume container and hide the form container
    resumeContainer!.style.display = "block";
    formContainer!.style.display = "none";
});

// Event listener to allow editing of the generated resume
editResumeButton?.addEventListener("click", function() {
    // Show the form container and hide the resume container
    formContainer!.style.display = "block";
    resumeContainer!.style.display = "none";

    // Pre-populate the form with current data
    (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
    (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
    (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
    (document.getElementById("address") as HTMLTextAreaElement).value = resumeData.address;
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;
    (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
});
