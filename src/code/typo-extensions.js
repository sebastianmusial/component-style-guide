const code = `@each $name, $value in $typo-font {
  %u-font--#{$name} {
    font-family: $value;
  }
}
 
@each $name, $value in $typo-size {
  %u-text--#{$name} {
    @include interpolation('font-size', $value);
  }
}

//######################
%u-font--primary {...}
%u-font--secondary {...}
%u-font--icofont {...}

%u-text--small {...}
%u-text--medium {...}
%u-text--big {...}
`;

export default code;