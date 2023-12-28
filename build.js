const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const servicesPath = path.join(__dirname, "services");
const modules = fs.readdirSync(servicesPath);

modules.forEach((module) => {
  const modulePath = path.join(servicesPath, module);
  if (fs.statSync(modulePath).isDirectory()) {
    console.log(`Building module: ${module}`);
    execSync(
      `tsup ${path.join(
        modulePath,
        "index.ts"
      )} --format cjs,esm --dts --outDir ${path.join("dist", module)}`,
      { stdio: "inherit" }
    );
  }
});
