const { execSync } = require('child_process');

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

try {
  console.log("🚀 Starting Deployment Automation...");

  // 1. Check if we are on development branch
  const currentBranch = execSync('git branch --show-current').toString().trim();
  if (currentBranch !== 'development') {
    console.error("❌ Error: You must be on the 'development' branch to deploy.");
    process.exit(1);
  }

  // 2. Ensure working directory is clean (ignore local-only files)

  const rawStatus = execSync("git status --porcelain").toString();

  const ignored = [
    ".env",
    "prisma/dev.db",
    "deploy"
  ];

  const remaining = rawStatus
    .split("\n")
    .filter(Boolean)
    .filter(line => !ignored.some(item => line.includes(item)));

  if (remaining.length > 0) {
    console.error("❌ Error: Working directory has uncommitted source changes:");
    console.log(remaining.join("\n"));
    process.exit(1);
  }

  // 3. Push any latest development commits
  console.log("📦 Pushing latest development changes...");
  run("git push origin development");

  // 4. Switch to main
  console.log("🔀 Switching to main branch...");
  run("git checkout main");

  // 5. Merge development into main
  console.log("🔄 Merging development into main...");
  run("git merge development");

  // 6. Push main (Triggers Hostinger Auto Deployment)
  console.log("🚀 Pushing to main (Triggering Hostinger Deployment)...");
  run("git push origin main");

  // 7. Switch back to development
  console.log("🔙 Switching back to development branch...");
  run("git checkout development");

  console.log("\n✅ Deployment successful! Hostinger is now building your app from the main branch.");
} catch (error) {
  console.error("\n❌ Deployment failed:", error.message);
  // Attempt to recover by switching back to development branch
  try {
    execSync('git checkout development', { stdio: 'ignore' });
  } catch (e) { }
  process.exit(1);
}
