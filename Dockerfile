FROM kobsio/kobs:v0.9.1 as app
FROM kobsio/plugin:v0.9.1 as plugin-helloworld

FROM golang:1.18.3 as api
WORKDIR /kobs
COPY go.mod go.sum /kobs/
RUN go mod download
COPY . .
RUN export CGO_ENABLED=0 && make build

FROM alpine:3.16.0
RUN apk update && apk add --no-cache ca-certificates
RUN mkdir /kobs
COPY --from=api /kobs/bin/kobs /kobs
COPY --from=app /kobs/app /kobs/app
COPY --from=plugin-helloworld /kobs/helloworld /kobs/app/plugins/helloworld
WORKDIR /kobs
USER nobody
ENTRYPOINT  [ "/kobs/kobs" ]
