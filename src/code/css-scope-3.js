const test = `<Card [size]="big">
  <CardHeadline> 
    {{ headline }} 
  </CardHeadline>
  <CardDescription> 
    {{ description }} 
  </CardDescription>
</Card>

<Card [size]="small">
  <CardDescription> 
    {{ description }} 
  </CardDescription>
  <CardHeadline> 
    {{ headline }} 
  </CardHeadline>
</Card>

// Card Component
<div 
  class="card" 
  [ngClass]="'card--' + size"
>
  // this.props.children
  <ng-content></ng-content>
</div>

.card { 
  background-color: red; 
}

// Card Headline Component
<div class="card-headline">
  <ng-content></ng-content>
</div>

.card-headline { 
  color: white;
  font-size: 24px;
}

// Card Description Component
<div class="card-description">
  <ng-content></ng-content>
</div>

.card-description { 
  padding: 10px;
  font-size: 14px; 
}


`;

export default test;