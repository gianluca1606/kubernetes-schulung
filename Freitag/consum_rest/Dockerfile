FROM golang:alpine3.6 AS binary
ADD . /app
WORKDIR /app
RUN go build -o main

FROM alpine:3.6
WORKDIR /app
ENV HOSTNAME localhost
COPY --from=binary /app/main /app
CMD ["/app/main"]
