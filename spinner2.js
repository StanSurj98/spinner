// Refactor the below to about 8-10 lines of code, refactoring the setTimeout()'s
const anim = ["\r|", "\r/", "\r-", "\r\\", "\r|"];

const spinner = (anim) => {
  let delay = 0;
  // loop through each elm in the new array
  for (const x of anim) {
    setTimeout(() => {
      process.stdout.write(x);
    }, delay += 300);
  };
  setTimeout(() => {
    console.log("\n")
  }, delay);
};

spinner(anim);

