# NavLinks Component

## Description

The `NavLinks` component is responsible for rendering the main navigation links for the application. It displays a list of links that allow users to navigate to different sections of the website, including the homepage, product categories, order tracking, blog, and about us page. It's designed to be used within a larger navigation structure, such as the `Navbar` component.

## Features

- **Navigation:** Provides links to key sections of the application.
- **Active Link Styling:** Highlights the currently active link using a conditional class (`nav-link-active`).
- **Dropdown Indicator:** Includes a dropdown icon next to "دسته بندی محصول" (Product Category) to indicate a potential submenu or interaction.
- **Responsiveness:** Uses Tailwind CSS for styling and adapts to different screen sizes, with font sizes adjusting from `10px` on small screens to `14px` on larger (lg) screens.
- **Route Management:** Integrates with `react-router-dom`'s `NavLink` for declarative routing.

## Technologies Used

- React
- `react-router-dom` (for `NavLink` and routing)
- `react-icons` (specifically `IoMdArrowDropdown` for the dropdown icon)
- Tailwind CSS (for styling and layout)

## Usage

Import and render the `NavLinks` component within your main layout or navigation component. It's typically placed where navigation is intended to appear.

```jsx
import NavLinks from "../path/to/components/NavLinks";

function Navbar() {
  return (
    <nav>
      {/* Other Navbar elements */}
      <NavLinks />
      {/* Other Navbar elements */}
    </nav>
  );
}

export default Navbar;
```
