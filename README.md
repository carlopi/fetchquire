# fetchquire

Multi-platform best effor utility to fetch/read a file

## Why?

read is used by Internet Explorer
require('fs').readFile works in node
fetch is a Web API to retrive files
and since node 18 it also introduces fetch as global variable with a somehow different syntax than the Web API.

It's possible to have a function automatically feature-detecting and actually retriving our file?
