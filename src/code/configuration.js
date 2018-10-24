const code = `
// ################################
// File: _core.scss
// ################################

// Settings
// ------------------------------------------
@import 'settings/fonts';
@import 'settings/mixins';
@import 'settings/breakpoints';
@import 'settings/colors';
@import 'settings/typography';
@import 'settings/animations';
@import 'settings/dimensions';
@import 'settings/shadows';
@import 'settings/borders';

// Extensions
// ------------------------------------------
@import 'extensions/typography';
@import 'extensions/space';
@import 'extensions/distance';


// ################################
// File: CardHeadlineComponent.scss
// ################################
@import 'core';

.card-headline {...}


// ################################
// File: angular.json
// ################################
...
"stylePreprocessorOptions": {
  "includePaths": [
    "src/styles"
  ]
},
...
`;

export default code;