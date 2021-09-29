# Herald React Widget

Adds the Herald changelog and banner widget to React applications.

## Installation

Install my-project with npm

NPM

```bash
npm install @useherald/react-widget
```

Yarn

```bash
yarn add @useherald/react-widget
```

## Usage/Examples

```javascript
import { Herald } from '@useherald/react-widget';

function App() {
	return <Herald icon={<FaBell />} author={process.env.HERALD_AUTHOR} />;
}
```

## Props

| Prop     | Type                    | Description                          |
| :------- | :---------------------- | :----------------------------------- |
| `author` | `String`                | ID of the author                     |
| `icon`   | `ReactNode`             | Icon to display in the widget button |
| `text`   | `ReactNode` or `String` | Text to display in the widget button |
