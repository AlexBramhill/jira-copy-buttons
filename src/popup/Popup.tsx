import UrlInput from "./components/UrlInput";
import { PopupContainer } from "./components/PopupContainer";

export default function Popup() {
  return (
    <PopupContainer>
      <h1 class="text-2xl font-bold mb-4">Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <UrlInput />
    </PopupContainer>
  );
}
