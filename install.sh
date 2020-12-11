#!/usr/bin/env bash

python3 --version
python3 -m pip install --upgrade pip
pip3 --version
pip3 install --upgrade virtualenv
python3 -m venv venv || virtualenv venv && . venv/bin/activate
pip3 install -r requirements.txt
ruby -v
gem install bundler
bundle -v
bundle version
bundle update --bundler
bundle install
bundle exec rubocop -A
bundle exec reek -c .reek.yml
bundle exec mdl .
rubycritic -p packages/cays
