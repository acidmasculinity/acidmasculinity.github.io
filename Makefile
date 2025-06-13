.PHONY: all IndexApp

all: IndexApp

IndexApp:
	cd IndexApp && yarn build
	mkdir -p public/wwwroot/
	rsync -r IndexApp/public/ public/wwwroot/
