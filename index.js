const cards = [
  { link: "https://bca.schoology.com/", name: "Schoology", icon: "fas fa-school" },
  { link: "https://bcts.powerschool.com/public/", name: "Powerschool", icon: "fas fa-graduation-cap" },
  { link: "https://outlook.office.com/mail/", name: "Outlook", icon: "fa-sharp fa-solid fa-envelope" },
  { link: "https://signup.bergen.org/dashboard/index.php/", name: "Dashboard", icon: "fab fa-elementor" },
  { link: "https://www.blinklearning.com/v/1703163655/themes/tmpux/launch.php#content/", name: "BlinkLearning", icon: "fa fa-book-open" },
  { link: "https://www.deltamath.com/app/student/3036485/upcoming/", name: "DeltaMath", icon: "fa-solid fa-calculator" },
  { link: "https://student.cengage.com/dashboard/", name: "Webassign", icon: "fa-solid fa-superscript" },
  { link: "https://docs.google.com/spreadsheets/d/1S5v7kTbSiqV8GottWVi5tzpqLdTrEgWEY4ND4zvyV3o/edit", name: "\"YourBCABus\"", icon: "fas fa-bus" },
  { link: "https://docs.google.com/document/d/e/2PACX-1vRkhySmwAiTtY88tcshckpV4F0vRrULccaGrYl_Sf2ubWpyyXA4l8c-KAOuMzSwFe-qyAQhLqXzVsbA/pub", name: "\"TableJet\"", icon: "fa-solid fa-list" },
  { link: "https://drive.google.com/drive/my-drive", name: "Google Drive", icon: "fa-brands fa-google-drive" },
  { link: "https://www.office.com/", name: "MS Office", icon: "fa-brands fa-microsoft" },
  { link: "https://student.desmos.com/", name: "Desmos", icon: "fa-solid fa-shapes" },
  { link: "https://www.turnitin.com/login_page.asp?lang=en_us/", name: "Turnitin", icon: "far fa-file-alt" },
  { link: "https://student.naviance.com/bca/", name: "Naviance", icon: "far fa-compass" },
  { link: "https://outlook.office365.com/owa/calendar/CounselorBookings@bergen.org/bookings/", name: "Guidance Signup", icon: "fas fa-hands-helping" },
  { link: "https://spanishdict.com", name: "SpanishDict", icon: "fa-solid fa-book" }
];

function cardFactory(cards) {
  const container = document.getElementById('card-container');
  container.className = 'cards';

  cards.forEach(card => {
    const cardHTML = `
      <a href="${card.link}">
        <div class="custcard">
          <div class="card-header">${card.name}</div>
          <div class="card-main">
            <i class="${card.icon}"></i>
          </div>
        </div>
      </a>
    `;
    container.innerHTML += cardHTML;
  });
}

cardFactory(cards)


function setPowerOfTwoColumns() {
  const gridContainer = document.querySelector(".cards");
  const containerWidth = gridContainer.clientWidth;
  const columnWidth = 350; // Minimum width for each column
  let columns = Math.floor(containerWidth / columnWidth);
  let powerOfTwoColumns = 1;

  while (powerOfTwoColumns * 2 <= columns) {
    powerOfTwoColumns *= 2;
  }

  if (powerOfTwoColumns > columns) {
    powerOfTwoColumns /= 2;
  }

  gridContainer.style.gridTemplateColumns = `repeat(${powerOfTwoColumns}, 1fr)`;
}

window.addEventListener("resize", setPowerOfTwoColumns);
window.addEventListener("load", setPowerOfTwoColumns);
