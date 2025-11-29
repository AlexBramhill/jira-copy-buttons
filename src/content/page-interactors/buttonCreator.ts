export const createButton = (
  buttonId: string,
  buttonText: string,
  onClick: (event: MouseEvent) => void
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.id = buttonId;
  button.textContent = buttonText;
  button.style.marginLeft = "8px";
  button.style.height = "32px";
  button.onclick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };
  return button;
};

export const createCopyButton = (
  buttonId: string,
  buttonText: string,
  copyText: string
): HTMLButtonElement => {
  return createButton(buttonId, buttonText, () => {
    navigator.clipboard.writeText(copyText);
  });
};
