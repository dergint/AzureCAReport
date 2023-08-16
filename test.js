let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
  console.log ('You get the gold medal!');
  break;
  case 'second place' :
  console.log ('You get the silver medal!');
  break;
  case 'third place':
  console.log ('You get the bronz medal!');
  break;
  default:
  console.log ('No medal awarded.');
  break;
}
athleteFinalPosition = 'second place';
console.log (athleteFinalPosition);