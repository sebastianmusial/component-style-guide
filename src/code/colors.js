const code = `// Global
// ------------------------------------------
$color-transparent: rgba(0, 0, 0, 0);
$color-black: #000000;
$color-white: #ffffff;

// Brand
// ------------------------------------------
$color-brand: (
  'primary': #ff00f0,
  'yellow': #d49408,
  'blue': #0600ff,
  'violet': #7a2bff,
  'red': #fb2b50,
  'green': #217761,
);

// Base (mainly typography)
// ------------------------------------------
$color-base: (
  'primary': $color-white,
);

// Aura (mainly background)
// ------------------------------------------
$color-aura: (
  'primary': #eaeaea,
  'grey': #28324c,
  'grey-dark': #1d2537,
);

// Notifications
// ------------------------------------------
$color-notifications: (
  'warning': map-get($color-brand, 'yellow'),
  'info': map-get($color-brand, 'blue'),
  'danger': map-get($color-brand, 'red'),
  'success': map-get($color-brand, 'green'),
);

// Planner - categories
// ------------------------------------------
$color-planner: (
  'platform': map-get($color-brand, 'primary'),
  'groups': map-get($color-brand, 'blue'),
  'timeline': map-get($color-brand, 'violet'),
);
`;

export default code;