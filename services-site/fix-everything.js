import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log("Restoring files to undo the corrupted anchor tags...");
execSync('git restore src/components src/pages');

function fixFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Add "use client"
      if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
        content = '"use client";\n' + content;
      }
      
      // 2. Remove .html from string literals and hrefs
      // We look for anything that is ["']/some-path.html["']
      content = content.replace(/(["'])\/?([a-zA-Z0-9-]+)\.html\1/g, '$1/$2$1');
      // Fix relative ones like ./index.html and ./services.html
      content = content.replace(/href=["']\.\/index\.html["']/g, 'href="/"');
      content = content.replace(/href=["']\.\/services\.html["']/g, 'href="/services"');
      
      // 3. Fix image.src
      const imgImportRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+["']\.\.?\/.*?\.(png|jpe?g|svg|webp|gif)["']/g;
      let match;
      let imgVariables = [];
      while ((match = imgImportRegex.exec(content)) !== null) {
        imgVariables.push(match[1]);
      }
      
      for (const imgVar of imgVariables) {
        const srcRegex = new RegExp(`src=\\{${imgVar}\\}`, 'g');
        content = content.replace(srcRegex, `src={${imgVar}.src || ${imgVar}}`);
      }

      // 4. Fix usePathname in Navbar and Footer
      if (file === 'Navbar.jsx' || file === 'Footer.jsx') {
        if (!content.includes('import { usePathname }')) {
          content = content.replace('import { Fa', 'import { usePathname } from "next/navigation";\nimport { Fa');
        }
        content = content.replace(/typeof window !== ["']undefined["'] \? window\.location\.pathname\.replace\(\/\\\/\\$\/, ["']["']\) \|\| ["']\/["'] : ["']\/["']/g, 'usePathname() ? usePathname().replace(/\\/$/, "") || "/" : "/"');
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

console.log("Applying all safe Next.js fixes...");
fixFiles('src/components');
fixFiles('src/pages');
fixFiles('src/app');

console.log("Done!");
