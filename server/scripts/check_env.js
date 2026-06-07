// Simple env checker to help Render logs show missing vars (safe, no secrets committed)
const required = [
  'MONGODB_URI',
  'JWT_SECRET',
  'CLIENT_URL',
  'PRODUCTION_CLIENT_URL',
];

console.log('Checking required environment variables...');
let ok = true;
required.forEach((k) => {
  if (process.env[k]) {
    // Mask values in logs
    const val = String(process.env[k]);
    const masked = val.length > 8 ? val.slice(0, 4) + '...' + val.slice(-4) : '***';
    console.log(`- ${k}: set (${masked})`);
  } else {
    console.log(`- ${k}: MISSING`);
    ok = false;
  }
});

if (!ok) {
  console.error('\nOne or more required environment variables are missing.');
  process.exitCode = 2;
} else {
  console.log('\nAll required environment variables appear set.');
}
