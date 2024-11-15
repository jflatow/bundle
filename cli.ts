import { bundle } from 'https://deno.land/x/emit/mod.ts';

async function main(url: string) {
  const mod = await bundle(url);
  const enc = new TextEncoder();
  await Deno.stdout.write(enc.encode(mod.code));
}

await main(...Deno.args);
