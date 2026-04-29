# IconButton Component

## Description

The `IconButton` component is a customizable button designed to include icons or other elements as children. It supports multiple visual variants and allows for styling flexibility through props. This component can be used across your application wherever a styled, interactive button with icon support is needed.

## Features

- **Customizable Variants:** Supports four different styles (`primary`, `secondary`, `danger`, `muted`) with distinct background and hover effects.
- **Flexible Size:** Accepts `width` and `height` props for direct styling.
- **Children Support:** Can include any React node, such as icons or text, as its children.
- **Custom ClassName:** Allows additional Tailwind classes to be added via `classname` prop.
- **Responsive & Interactive:** Uses Tailwind CSS for smooth transition effects, hover state changes, and rounded corners.

## Technologies Used

- React
- Tailwind CSS for styling
- TypeScript (for typing props)

## Usage

Import the component and use it in your JSX, passing the appropriate props to customize appearance and behavior:

```tsx
import IconButton from "../path/to/IconButton";

function App() {
  return (
    <div>
      <IconButton variant="primary" width={50} height={50} classname="m-2">
        {/* Inside children, you can put icons or text */}
        <SomeIcon />
      </IconButton>

      <IconButton variant="danger" width={60} height={60}>
        Delete
      </IconButton>
    </div>
  );
}

export default App;
```

## Prop Type Default Description

children React.ReactNode — Elements inside the button, such as icons or text
variant "primary" | "secondary" | "danger" | "muted" "muted" Style variant of the button
width number — Width of the button (inline style)
height number — Height of the button (inline style)
classname string — Additional Tailwind CSS classes for custom styling

## Styling

The button uses Tailwind CSS for styling, with predefined style variants stored in the variants object:

primary: Bright background with white text
secondary: Secondary background with default text color
danger: Red background for destructive action
muted: Light background with border and muted text color
You can extend or override these styles by passing custom classes through classname.
