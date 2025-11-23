import UrlInput from "./components/UrlInput";

export default function Popup() {
  return (
    <div style="min-width: 400px; padding: 16px;">
      <h1>Jira Branch Creator</h1>
      <p>Adds helpful buttons for Jira issues to create branches easily.</p>
      <UrlInput />
    </div>
  );
}
