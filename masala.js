let a = '(((yfgfs))p)';
a.split('');
let check = true;
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (count < 0) console.log(-1);
  if (a[i] === '(') {
    count++;
    check = true;
    if (!check && count < 0) {
      console.log(i);
    }
  }
  if (a[i] === '(') {
    count--;
    check = false;
  }
}
