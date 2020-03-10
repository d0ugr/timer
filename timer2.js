// Trio programmed by @d0ugr, @Linh095 and @BilliMorgan
//
// The PC speaker might be blacklisted in Linux (check in /etc/modprobe.d/blacklist.conf for example).
//    "modprobe pcspkr" to load the kernel module to enable it.
//    "modprobe -r pcspkr" to unload the kernel module to disable it.

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", (key) => {

  const keyValue = Number(key);

  if (key === "\x03") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.toLowerCase() === "b") {
    process.stdout.write("\x07");
  } else if (Number.isInteger(keyValue) && keyValue !== 0) {
    process.stdout.write(`Starting timer for ${keyValue} seconds \n`);
    setTimeout(() => process.stdout.write(`\x07${keyValue} second timeout\n`), keyValue * 1000);
  } else {
    process.stdout.write("DO NOT PRESS THAT KEY\n");
  }

});

process.stdout.write("Ready for action\n");
