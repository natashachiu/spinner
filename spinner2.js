process.stdout.write('hello from spinner2.js... \rheyyy\n');

let time = 0;
const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (const el of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${el}   `);
  }, time += 200);
}
