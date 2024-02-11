# Usage

**If you don't have anything**

Just get the latest release and run it :
`parser.exe -d examples`

**If you have deno**
Get the `parser.min.js` from the release and run
`deno run --allow-read --allow-write build\parser.min.js -d examples`
(Where `-d examples` are your own args)

## Build your own

If you want to release your own binaries:

### All in once

`deno task release:all`

### Windows

`deno task release:win32`

### Linux (x86)

`deno task release:linux:x86`

### Mac M1

`deno task release:apple:m1`

### Mac (Intel)

`deno task release:apple:x86`

and then get it from the "build" folder. On linux / mac remember to `chmod +x parser_youArch` before `./parser_youArch`

## Build the JS

`deno task bundle`

## Run from source

`deno task parse -d examples`

### Dev mode

`deno task parse -d start`
