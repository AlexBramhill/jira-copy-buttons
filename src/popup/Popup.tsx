import UrlInput from "./components/UrlInput";

export default function Popup() {
  return (
    <div>
      <h1>Jira Branch Creator</h1>
      <p>Add all Jira url you want to enable this extension for below.</p>
      <UrlInput />
    </div>
  );
}
