export function handleOverflow(path: string) {
  const root = document.getElementById("root") as HTMLDivElement;
  const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
  // const contactPage = document.getElementById("contact-page") as HTMLElement;
  // const imageAndForm = document.getElementById("right-home") as HTMLElement;
  // const rightHomeDiv = document.getElementById("right-home-div") as HTMLElement;

  if (path != "/" && path != "/contact" && path != "/contact/success") {
    body.style.overflow = "";
    root.style.overflow = "";
    return;
  }

  // if (window.innerWidth >= 992) {
  //   if (imageAndForm) imageAndForm.style.maxHeight = "100vh";
  // } else {
  //   if (imageAndForm) imageAndForm.style.maxHeight = "";
  // }

  if (window.innerWidth >= 992) {
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    // if (contactPage) contactPage.style.overflow = "hidden";
    // if (imageAndForm) imageAndForm.style.overflow = "scroll";
    // if (rightHomeDiv) rightHomeDiv.style.overflow = "scroll";
  } else if (window.innerWidth < 992) {
    // if (contactPage) contactPage.style.overflow = "scroll";
    // if (imageAndForm) imageAndForm.style.overflow = "hidden";
    // if (rightHomeDiv) rightHomeDiv.style.overflow = "hidden";
    body.style.overflow = "scroll";
    root.style.overflow = "scroll";
  }
}
