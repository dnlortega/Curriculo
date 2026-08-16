const fs = require('fs');

let content = fs.readFileSync('src/app/times/page.tsx', 'utf8');

// Replace standard font sizes
content = content.replace(/text-\[8px\]|text-\[9px\]|text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-sm');
content = content.replace(/lg:text-\[8px\]|lg:text-\[9px\]|lg:text-\[10px\]|lg:text-\[11px\]/g, 'lg:text-sm');

// Remove strict constraints to allow scrolling since text is bigger
content = content.replace('overflow-hidden relative', 'overflow-y-auto relative custom-scrollbar');
content = content.replace('min-h-0 z-10', 'z-10');

// Give Pie Chart more vertical space
content = content.replace('className="flex-1 p-1 min-h-0 relative flex items-center justify-center"', 'className="flex-1 p-2 min-h-[150px] relative flex items-center justify-center"');

// Fix icon sizes
content = content.replace(/w-3\.5/g, 'w-4');
content = content.replace(/h-3\.5/g, 'h-4');

// Expand padding in lists
content = content.replace(/py-1\.5/g, 'py-2');
content = content.replace(/px-1\.5/g, 'px-2');

fs.writeFileSync('src/app/times/page.tsx', content);
console.log('Done');
