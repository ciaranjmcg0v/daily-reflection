# Daily Reflection App, developed by Ciaran McGovern

## 1. Zustand Store Implementation

- Created a Zustand store to manage:
  - User's name
  - Emoji before reflection
  - Reflection text
  - Emoji after reflection
  - AI-generated reflection summary

## 2. Component Structure and Navigation Logic

- Defined navigation flow based on user login status:
  - **Not Logged In:**
    - `InitialPage` → `EmotionPageOne` → `Reflection` → `EmotionPageTwo` → `SummaryPage`
  - **Logged In:**
    - `EmotionPageOne` → `Reflection` → `EmotionPageTwo` → `SummaryPage`

## 3. Emoji Selection UI

- Enhanced emoji selection:
  - Selected emoji now enlarges and displays a colored background for clear visibility.

## 4. Progress Representation

- Added an arrow or horizontal line between emojis in the `SummaryPage` to represent progress before and after reflection.

## 5. Button Styles

- Ensured all buttons maintain consistent styles, including hover effects and padding adjustments.

## 6. Cleanup and Refactoring

- Removed unnecessary imports and ensured components are clean and readable.
- Verified all components function correctly with the Zustand store for state management.

## 7. UI/UX Improvements

- Improved overall user experience with clear visual feedback during emoji and button interactions.

## Future Enhancements

- Consider implementing additional validations and error handling for user input.
- Explore further UI customization options to enhance user engagement.
- Implement OpenAI for summary generation and feedback to simulate user interaction.
