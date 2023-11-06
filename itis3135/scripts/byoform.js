let courses = [];

function addCourse() {
    const coursesContainer = document.getElementById("coursesContainer");

    const newLabel = document.createElement("label");
    newLabel.innerHTML = "Courses I'm currently taking: ";

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "course" + courses.length;
    newLabel.appendChild(newInput);

    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.innerHTML = "Delete";
    newButton.dataset.courseNumber = courses.length;
    newButton.addEventListener('click', function () {
        removeCourse(this.dataset.courseNumber);
    });
    newLabel.appendChild(newButton);

    coursesContainer.appendChild(newLabel);

    const lineBreak = document.createElement("br");
    coursesContainer.appendChild(lineBreak);
    //add new course to array
    courses.push({
        input: newInput,
        button: newButton,
        label: newLabel,
        lineBreak: lineBreak
    });
}



function removeCourse(courseNumber) {
    const coursesContainer = document.getElementById("coursesContainer");
    const courseToRemove = courses[courseNumber];
    if (courseToRemove) {
        coursesContainer.removeChild(courseToRemove.label);

        coursesContainer.removeChild(courseToRemove.lineBreak);
        courses.splice(courseNumber, 1);  //remove courses from array
    }
}



document.getElementById('infoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
        alert("Fill all required fields and only upload PNG or JPG images.");
        return;
    }


    const formData = new FormData(event.target);
    const output = document.getElementById('output');
    const imageFile = formData.get('image');
    const imageUrl = URL.createObjectURL(imageFile);

    output.innerHTML = `
        
        <h2 text-align="center" ><strong> ${formData.get('name')} || ${formData.get('mascot')}</strong></h2>
        
        <figure>
            <img src="${imageUrl}" alt="Uploaded Image of ${formData.get('name')}"">
            <figcaption>${formData.get('caption')}</figcaption>
        </figure>
        <ul>
        <li><strong>Personal Background:</strong> ${formData.get('personalBg')}</li>
        <li><strong>Professional Background:</strong> ${formData.get('professionalBg')}</li>
        <li><strong>Academic Background:</strong> ${formData.get('academicBg')}</li>
        <li><strong>Background in Web Development:</strong> ${formData.get('webDevBg')}</li>
        <li><strong>Primary Computer Platform:</strong> ${formData.get('platform')}</li>
        <li><strong>Courses:</strong></li>
        <ul>
            ${Array.from(formData.keys()).filter(key => key.startsWith('course')).map(key => `<li>${formData.get(key)}</li>`).join('')}
        </ul>
        <li><strong>Funny thing?</strong> ${formData.get('funnyThing')}</li>
        <li><strong>Anything else?</strong> ${formData.get('anythingElse')}</li>
        <li><strong>I understand that what is on this page is not password protected and I will not put anything here that I don’t want publicly available. -  ${formData.get('name')}</li>
        <ul>
    `;

    // // Hide the form after submission
    // event.target.style.display = 'none';

    const resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.innerText = 'Fill out the form again';
    resetLink.classList.add('reset-link');
    resetLink.addEventListener('click', function (e) {
        e.preventDefault();
        output.innerHTML = '';
        document.getElementById('infoForm').style.display = 'block';
    });
    output.appendChild(resetLink);
});


function validateForm() {
    const form = document.getElementById('infoForm');

    if (!form.name.value) return false;
    if (!form.mascot.value) return false;

    const imageFile = form.image.files[0];
    if (imageFile) {
        const fileType = imageFile.type;
        if (fileType !== 'image/png' && fileType !== 'image/jpeg') return false;
    } else {
        return false;
    }

    if (!form.caption.value) return false;
    if (!form.personalBg.value) return false;
    if (!form.professionalBg.value) return false;
    if (!form.academicBg.value) return false;
    if (!form.webDevBg.value) return false;
    if (!form.platform.value) return false;
    if (!form.agreement.checked) return false;

    return true;
}