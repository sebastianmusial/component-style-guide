const code = `// Extends - distance (margin)
// ------------------------------------------
// * u-distance--{name}
// * u--distance--{name} // negative distance
// * v - vertical
// * h - horizontal
// ------------------------------------------
@each $name, $value in $dimensions {
  %u-distance--#{$name} {
    @include interpolation('margin', $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--top-#{$name} {
    @include interpolation('margin-top', $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--right-#{$name} {
    @include interpolation('margin-right', $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--bottom-#{$name} {
    @include interpolation('margin-bottom', $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--left-#{$name} {
    @include interpolation('margin-left', $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--v-#{$name} {
    @include interpolation-multi((
      'margin-top',
      'margin-bottom'
    ), $value);
  }
}

@each $name, $value in $dimensions {
  %u-distance--h-#{$name} {
    @include interpolation-multi((
      'margin-right',
      'margin-left'
    ), $value);
  }
}

...

`;

export default code;