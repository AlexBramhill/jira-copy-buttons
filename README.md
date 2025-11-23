# Jira Branch Creator Button

A Chrome extension that adds a button to Jira issue pages to easily create and copy a git branch name formatted from the ticket details.

## Features

- **Configurable Jira URL**: Set your team's Jira domain in the extension popup.
- **Automatic Button Injection**: A "Copy Branch Name" button is automatically added to Jira issue pages.
- **Formatted Branch Names**: Generates branch names like `TicketNumber/a-brief-ticket-summary`.
- **One-Click Copy**: Copies the generated branch name to your clipboard instantly.

## Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AlexBramhill/jira-branch-creator-button.git
    cd jira-branch-creator-button
    ```

1.  **Install dependencies:**

    ```bash
    npm install
    ```

1.  **Build the extension:**

    ```bash
    npm run dev
    ```

    or

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the packed extension files. Dev mode has live reloading to the build folder (note: extension still requires being reloaded in Chrome based on Chrome's requirements)

1.  **Load the extension in Chrome:**
    - Navigate to `chrome://extensions`.
    - Enable **Developer mode** using the toggle in the top-right corner.
    - Click the **Load unpacked** button.
    - Select the `dist` directory from this project.

## Usage

1.  Click the extension's icon in your Chrome toolbar to open the popup.
2.  Enter the base hostname of your Jira instance (e.g., `your-company.atlassian.net`).
3.  Navigate to any Jira issue page.
4.  The "Copy Branch Name" button will appear near the issue title.
5.  Click the button to copy the formatted branch name to your clipboard.
