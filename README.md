# UserCard Component

The `UserCard` component displays user details with a copy-to-clipboard functionality and a notification tooltip to confirm the action.

## Features:

1. **User Information Display**:
    - Shows the user’s first name, last name, and email.
2. **Copy to Clipboard**:

    - A button with a clipboard icon (`FaRegCopy`) allows users to copy the user details (name and email) to their clipboard.

3. **Tooltip Confirmation**:

    - After copying user details, a tooltip with the text `Copied!` appears below the copy button to provide feedback to the user.
    - The tooltip automatically disappears after 2 seconds.
    - It’s positioned dynamically, ensuring the tooltip remains visible even on small screens.

4. **Responsive Design**:

    - The component is fully responsive, supporting both mobile and desktop layouts.
    - It uses `flexbox` for layout adjustment between mobile (`flex-col`) and desktop (`flex-row`).

5. **Accessibility**:
    - Includes accessible features like `aria-live="polite"` for screen readers to announce the tooltip.
    - The button for copying is accessible via `aria-label`.
    - Keyboard support: The component can be interacted with using the "Enter" key.

## Technologies Used:

-   **React**: To build the component and manage the state for copying functionality.
-   **Tailwind CSS**: For responsive design and styling.
-   **React Icons**: To add the clipboard icon (`FaRegCopy`).

## Custom Hook: `useClipboardCopy`

-   Handles the clipboard copying logic and manages the state for tracking whether the content has been copied.
