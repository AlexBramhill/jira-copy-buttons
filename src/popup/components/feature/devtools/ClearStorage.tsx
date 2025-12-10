import { Button } from "../../common/buttons/Button";

export const ClearStorage = () => {
  const handleClearStorage = async () => {
    if (
      confirm(
        "Are you sure you want to clear all Chrome storage? This will reset all settings to defaults."
      )
    ) {
      await chrome.storage.sync.clear();
    }
  };

  return (
    <Button
      onClick={handleClearStorage}
      variant="primary"
      class="bg-red-600 hover:bg-red-700"
    >
      Clear All Storage
    </Button>
  );
};

export default ClearStorage;
