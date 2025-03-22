# Support podman or docker to build
ifndef $(CTR)
	CTR := podman 
endif

REGISTRY := localhost
IMAGE := mlb-app-frontend
TAG := latest


build_container:
	$(CTR) build -t $(REGISTRY)/$(IMAGE):$(TAG) -f ./Dockerfile .


run_container:
	$(CTR) run -d --rm -it --name mlb-app-frontend -p 3002:3000 $(REGISTRY)/$(IMAGE):$(TAG)