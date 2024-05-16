import { students } from "./studentInfo.js";

// HTML CHANGES HAVE TO BE UPDATED HERE
const template = `<div class="container">
                    <div class="row">
                        <div class="cols-2">
                            <img class="avatar" src="" alt="">
                        </div>
                        <div class="cols-10 student-hero">
                            <h3 class="name"></h3>
                            <h4 class="program"></h4>
                            <nav class="student-links-wrapper">
                                <ul class="student-links-wrapper__items"></ul>
                            </nav>
                            <div class="button-wrapper">
                              <a class="website-link button-alt">View Website</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cols-12">
                            <div class="student-grid-2">
                                <div class="item_img item-large">
                                    <img class="large-image" width="1720" height="1920">
                                </div>
                                <div class="item_img item-medium">
                                    <img class="medium-image" width="1280" height="720">
                                </div>
                                <div class="item_img item-small">
                                    <img class="small-image" width="640" height="600">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

function replaceElementAttributes(element, attributes) {
  if (!attributes) {
    return;
  }

  const attrKeys = Object.keys(attributes);

  attrKeys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
}

function replaceChildElement(element, updatedValue) {
  element.innerHTML = updatedValue;
}

function createStudentSections(allStudents, studentContainer, studentSection) {
  allStudents.forEach((student, i) => {
    const studentTemplate = studentSection.cloneNode(true);

    // Add class for even students
    const isEven = i % 2;

    const avatarImage = studentTemplate.querySelector(".avatar");
    const nameEl = studentTemplate.querySelector(".name");
    const programEl = studentTemplate.querySelector(".program");
    const websiteLinkEl = studentTemplate.querySelector(".website-link");
    const buttonWrapper = studentTemplate.querySelector(".button-wrapper");

    studentTemplate.id = student.id;
    replaceElementAttributes(avatarImage, student.profileImage);
    replaceChildElement(nameEl, student.name);
    replaceChildElement(programEl, student.program);
    replaceElementAttributes(websiteLinkEl, student.websiteLink);

    if (student.program.toLowerCase() === "animation") {
      const demoReelEl = document.createElement("a");
      demoReelEl.classList.add("demo-reel-link", "button-alt");
      demoReelEl.innerHTML = "Watch Demo Reel";
      replaceElementAttributes(demoReelEl, student.demoReelLink);

      buttonWrapper.appendChild(demoReelEl);
    }

    // Dynamically generate the social links
    // if there are none remove the nav for semantics
    if (!!student.links) {
      const linkWrapperItems = studentTemplate.querySelector(
        ".student-links-wrapper__items",
      );
      student.links.forEach((link) => {
        const li = document.createElement("li");
        const linkEl = document.createElement("a");
        linkEl.classList.add("fab", "icon", link.iconClass);
        linkEl.href = link.href;
        li.appendChild(linkEl);

        linkWrapperItems.appendChild(li);
      });
    } else {
      const studentLinksNav = studentTemplate.querySelector(
        ".student-links-wrapper",
      );

      studentLinksNav.remove();
    }

    // Projects
    const large = studentTemplate.querySelector(".large-image");
    const medium = studentTemplate.querySelector(".medium-image");
    const small = studentTemplate.querySelector(".small-image");

    replaceElementAttributes(large, student?.projectLarge);
    replaceElementAttributes(medium, student?.projectMedium);
    replaceElementAttributes(small, student?.projectSmall);

    studentContainer.appendChild(studentTemplate);
  });
}

function renderStudentLinks(allStudents) {
  const gradItems = document.querySelector(".nav-graduate-items");

  allStudents.forEach((student) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${student.id}`;
    link.classList.add("scroll");
    link.innerHTML = student.name;

    li.appendChild(link);
    gradItems.appendChild(li);
  });
}

function run() {
  const studentContainer = document.querySelector(".student-container");

  // Encapsulate all render logic in this conditional so that if there
  // is a page without the container it won't run anything
  if (studentContainer) {
    const studentSection = document.createElement("section");
    studentSection.classList.add("student");
    studentSection.innerHTML = template;

    createStudentSections(students, studentContainer, studentSection);
    renderStudentLinks(students);
  }
}

run();
