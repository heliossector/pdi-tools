TESTS=$(shell find ./tests -type f -name "*.js")
NODE=/usr/bin/node

MOCHA = ./node_modules/.bin/mocha

tests:
	@NODE_ENV=test $(MOCHA) \
		-r should \
		-R spec \
        $(TESTS)

demo-kitchen:
	$(NODE) ./demo/kitchen.js

demo-file:
	$(NODE) ./demo/file.js


.PHONY: tests demo-kitchen demo-file