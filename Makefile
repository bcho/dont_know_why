BUILD_DIR := ./build
SITES_DIR := ./sites

UTILS_SCRIPT := ./utils.js
SCRIPT := $(BUILD_DIR)/dont_know_why.js
CHROME_MANIFEST := $(BUILD_DIR)/manifest.json

SITES :=

include sites.mk

all:
	@mkdir -p $(BUILD_DIR)
	@cat $(UTILS_SCRIPT) $(SITES) > $(SCRIPT)
	@cp manifest.json $(CHROME_MANIFEST)

clean:
	@rm -rf $(BUILD_DIR)


.PHONY: all clean prepare-manifest concat-scripts
