export function handleClick(
  modalElement: React.RefObject<HTMLDialogElement>,
  action: "open" | "close"
) {
  const dialogs = [...document.getElementsByTagName("dialog")];
  if (action == "open") {
    modalElement.current?.showModal();
    document.body.style.overflow = "hidden";
    dialogs.forEach((d) => {
      d.addEventListener("click", () => closeModal(modalElement));
    });
  }
  if (action == "close") {
    closeModal(modalElement);

    dialogs.forEach((d) => {
      d.removeEventListener("click", () => closeModal(modalElement));
    });
  }
}

function closeModal(modalElement: React.RefObject<HTMLDialogElement>) {
  modalElement.current?.close();
  document.body.style.overflow = "";
}
