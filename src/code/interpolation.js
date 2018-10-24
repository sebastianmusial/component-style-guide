const content = `.card-headline {
  font-size: 18px;

  @include min-screen($tablet) {
    font-size: 20px;
  }

  @include min-screen($desktop) {
    font-size: 24px;
  }
}
`;

export default content;