#!/bin/bash

setup_parser() {
  cp release/parser_x86_64-unknown-linux-gnu /tmp/parser
  chmod +x /tmp/parser
}


run_test() {
  # Run test command
  /tmp/parser -d parser/examples "$@"
  
  if [ ! -f "/tmp/$filename" ]; then
    echo "Test '$test_name': Output file does not exist"
    exit 1
  fi
  
  # Check the file size and length
  file_size=$(stat -c%s "/tmp/$filename")
  file_length=$(wc -l < "/tmp/$filename")
  
  echo "File size: $file_size"
  
  # Check if the file size is more than 40KB and contains "player"
  if [ $file_size -gt 40960 ] && grep -q "player" "/tmp/$filename"; then
    echo "Test '$test_name' passed"
  else
    echo "Test '$test_name' failed: Binary does not generate good files"
    exit 1
  fi
}

# Help message test
help_test() {
  local test_name=$1
  
  # Run test command with --help argument
  help_output=$(/tmp/parser --help)
  
  # Check if the help message contains "-d" option
  if echo "$help_output" | grep -q "\-d"; then
    echo "Test '$test_name' passed"
  else
    echo "Tests failed: Help message does not contain '-d' option."
    exit 1
  fi
}

# Test case 1
test_name="Simple -o usage"
setup_parser
filename="parsed.json"
run_test -o /tmp

# Test case 2
test_name="Simple --output usage"
setup_parser
filename="parsed.json"
run_test --output /tmp

# Test case 3
test_name="Simple -f usage"
setup_parser
filename="parsed_d.json"
run_test -o /tmp -f parsed_d.json

# Test case 4
test_name="Simple --filename usage"
setup_parser
filename="parsed_d.json"
run_test -o /tmp --filename parsed_d.json

# Help message test 1
test_name="Help message -h"
setup_parser
help_test "$test_name"

# Help message test 2
test_name="Help message --help"
setup_parser
help_test "$test_name"

echo "All Tests passed: Binary meets criteria."
exit 0

