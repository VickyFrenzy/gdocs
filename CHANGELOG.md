# Changelog

## Version pre-0.1

- Migration from yarn to Deno
- Implemented basic functionality for parsing and processing directories.
- Added support for parsing configuration files and applying settings accordingly.
- Included options to specify output path, directories to parse, and configuration files.
- Added support for setting the title of the project.
- Implemented parsing of tabs from the configuration file and adding corresponding categories to the project.
- Included option to set icons for tabs.

## Version pre-0.2 ⚠️

- Added support for `-h` or `--help` option to display usage information.
- Included `-f` or `--filename` option to set the output filename.
- Included `-o` or `--output` option to change the output directory.

**⚠️ Breaking changes**

- Changed default output path to the current working directory. You can get the old behaviour by using `-o ../builder/src/parsed.json`

## Version pre-0.3

- Add binary tests on the CI. (hopefuly) no more bugs on the linux binary !
- Bugfix on the `-d` argument
- Bugfix on the `--help` argument

## Version pre-0.4

- Backport some forks features :

  - `Add stub and deprecated tags` by @azzen
  - `Larger side menu` by @azzen
  - `Add a badge element` by @azzen

- resolving old issues :
  - Search functionality (#4)
  - Better internal tag (#5)
  - Forcefully sort internal docs to the bottom (#6)
  - UI issues with lots of long entries. (#7)
  - Class view enhancements (#8)

## Version pre-0.5

- Bugfix the globals not working
- Better error page, and the home page is now centered !
- Test for badges

## Version 0.1

- Fix GH Pages routing
- Fix Readme broken link
- Link to the up-to-date demo
- Update Readme to have examples on setup and usage

## Version pre-0.6

- Fix release code and Changelog

## Version 0.1.1

- Bump to deno 1.41.0 to smaller binaries
