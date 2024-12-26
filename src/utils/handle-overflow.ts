export function handleOverflow() {
  const root = document.getElementById("root") as HTMLDivElement;
  const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
  const contactPage = document.getElementById("contact-page") as HTMLElement;
  const imageAndForm = document.getElementById("right-home") as HTMLElement;

  if (window.innerWidth >= 768) {
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    if (contactPage) contactPage.style.overflow = "hidden";
    if (imageAndForm) imageAndForm.style.overflow = "scroll";
  } else if (window.innerWidth < 768) {
    if (contactPage) contactPage.style.overflow = "scroll";
    if (imageAndForm) imageAndForm.style.overflow = "hidden";
    root.style.overflow = "scroll";
  }
}
