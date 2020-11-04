const args = process.argv.slice(2);
const timer = () => {

for (let i = 0; i < args.length; i++) { //looping through the array in the command line
  setTimeout(() => {
    process.stdout.write('\x07'); //emits a sound. for mac just write '...' instead of 'x\07'  
  }, args[i]*1000); // since it takes seconds in miliseconds we have to mutliply by 1000.
}


}
timer();