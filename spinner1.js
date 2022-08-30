// Here we see that "\rheyyy" brings everything after \r to the beginning of the string
// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// Let's fake animation using setTimeout()
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character
  process.stdout.write("\r\\   ");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1700);


