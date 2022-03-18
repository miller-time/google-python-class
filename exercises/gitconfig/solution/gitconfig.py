#!/usr/bin/python

import argparse
import subprocess


def parse_args() -> argparse.Namespace:
  parser = argparse.ArgumentParser()
  # add arguments to this parser
  parser.add_argument('--list', action='store_true', help='list existing git configs')
  parser.add_argument('--set', help='config ket to set')
  parser.add_argument('--value', help='config value to set')
  return parser.parse_args()


def list_config() -> None:
  subprocess.run(['git', 'config', '--global', '--list'])


def set_config(key: str, value: str) -> None:
  subprocess.run(['git', 'config', '--global', f'{key}={value}'])


def main() -> None:
  args = parse_args()
  # once you've added arguments to the ArgumentParser
  # get them out and pass them to your function(s)
  if args.list:
    list_config()
  elif args.set and args.value:
    set_config(args.set, args.value)


if __name__=="__main__":
  main()
