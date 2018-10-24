const content = `/// Calculate the definition of a line between two points
/// @param $map - A Sass map of viewport widths and size value pairs
/// @returns A linear equation as a calc() function
@function linear-interpolation($map, $negative: false) {
  $keys: map-keys($map);

  @if (length($keys) != 2) {
    @error 'linear-interpolation() $map must be exactly 2 values';
  }

  $m: (map-get($map, nth($keys, 2)) - map-get($map, nth($keys, 1))) / (nth($keys, 2) - nth($keys, 1));
  $b: map-get($map, nth($keys, 1)) - $m * nth($keys, 1);
  $sign: '+';
  $negativeSign: '+';

  @if ($b < 0) {
    $sign: '-';
    $b: abs($b);
  }

  @if ($negative) {
    $negativeSign: '-';
    $sign: '-';
  }

  @return calc(#{$negativeSign}#{$m*100}vw #{$sign} #{$b});
}


@mixin interpolation($style, $map, $negative: false) {
  $keys: map-keys($map);
  #{$style}: linear-interpolation($map, $negative);
  $sign: '';

  @if ($negative) {
    $sign: '-';
  }

  @include max-screen(nth($keys, 1)) {
    $max-value: map-get($map, nth($keys, 1));
    #{$style}: #{$sign}#{$max-value};
  }

  @include min-screen(nth($keys, 2)) {
    $min-value: map-get($map, nth($keys, 2));
    #{$style}: #{$sign}#{$min-value};
  }
}
`;

export default content;