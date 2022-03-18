#!/usr/bin/python

import argparse
import subprocess


def parse_args() -> argparse.Namespace:
  parser = argparse.ArgumentParser()
  # add arguments to this parser
  return parser.parse_args()


def main() -> None:
  args = parse_args()
  # once you've added arguments to the ArgumentParser
  # get them out and pass them to your function(s)


if __name__=="__main__":
  main()
