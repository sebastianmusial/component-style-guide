const content = `.card-headline {
  $map: ($mobile: 10px, $tablet: 15; $desktop: 20px)
  @include linear-interpolation('font-size', $map);
}`;

export default content;