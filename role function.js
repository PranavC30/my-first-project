// Functions
function allowAllAccess() {
    console.log("✅ Admin: Full access granted!");
}

function allowEditing() {
    console.log("✏️ Editor: Editing access granted!");
}

function readOnly() {
    console.log("👀 User: Read-only access granted!");
}

// Take role input (for example)
let role = prompt("Enter your role (admin / editor / user):");

// Check role
if (role === "admin") {
    allowAllAccess();
} else if (role === "editor") {
    allowEditing();
} else if (role === "user") {
    readOnly();
} else {
    console.log("❌ Invalid role!");
}
