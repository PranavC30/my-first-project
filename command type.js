let cmd = prompt("Enter command (ls / mkdir / cd / touch):");

switch (cmd) {
  case "ls":
    console.log("📂 show all folder");
    break;

  case "mkdir":
    console.log("📁 creating directory");
    break;

  case "cd":
    console.log("📂 change directory");
    break;

  case "touch":
    console.log("📄 creating file");
    break;

  default:
    console.log("❌ Invalid command");
}
