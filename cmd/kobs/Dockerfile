FROM --platform=linux/amd64 node:14 as app
WORKDIR /kobs
COPY app /kobs/app
RUN cd app && yarn install --frozen-lockfile --network-timeout 3600000
RUN cd app && yarn build

FROM golang:1.17.0-alpine3.14 as api
ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "Building on $BUILDPLATFORM, for $TARGETPLATFORM" > /log
RUN apk update && apk add git make
WORKDIR /kobs
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN make build

FROM alpine:3.14
RUN apk update && apk add --no-cache ca-certificates
RUN mkdir /kobs
COPY --from=app /kobs/app/build /kobs/app/build
COPY --from=api /kobs/bin/kobs /kobs
WORKDIR /kobs
USER nobody
ENTRYPOINT  [ "/kobs/kobs" ]
