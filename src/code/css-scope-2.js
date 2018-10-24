const test = `<Card [size]="big"></Card>

// Card Component
<div 
  class="card" 
  [ngClass]="'card--' + size"
>
  <div class="card__headline">
    {{ headline }}
  </div>
  <div class="card__description">
    {{ description }}
  <div>
</div>

.card { 
  background-color: red; 
}
.card__headline { 
  color: white;
  font-size: 24px;
}
.card__description { 
  padding: 10px;
  font-size: 14px; 
}

`;

export default test;