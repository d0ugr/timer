// Trio programmed by @d0ugr, @Linh095 and @BilliMorgan
//
// The PC speaker might be blacklisted in Linux (check in /etc/modprobe.d/blacklist.conf for example).
//    "modprobe pcspkr" to load the kernel module to enable it.
//    "modprobe -r pcspkr" to unload the kernel module to disable it.

const timer1 = (timers) => {

  timers.forEach(element => {
    let timeout = Number(element);
    if (Number.isInteger(timeout) && timeout > 0) {
      setTimeout(() => {
        process.stdout.write(`\x07${timeout}s timeout\n`);
      }, timeout * 1000);
    }
  });

};

timer1(process.argv.slice(2));
