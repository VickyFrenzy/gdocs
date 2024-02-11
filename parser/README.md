# Usage

Just get the latest release and run it :
`parser.exe -d examples`

## Build your own

If you want to release your own binaries:

### All in once

`deno task release:all`

### Windows

`deno task release:win32`

### Linux (x86)

`deno task release:linux:x86`

## Mac M1

`deno task release:apple:m1`

## Mac (Intel)

`deno task release:apple:x86`

and then get it from the "build" folder. On linux / mac remember to `chmod +x parser_youArch` before `./parser_youArch`

## Run from source

`deno task parse -d examples`
