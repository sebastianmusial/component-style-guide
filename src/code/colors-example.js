const code = `
.notification--default {
  background-color: rgba($color-black, .1);
  color: map-get($color-brand, 'yellow');
}

@each $name, $value in $color-notifications {
  .notification--#{$name} {
    background-color: rgba($value, .1);
    color: $value;
  }
 }
`;

export default code;