FROM fluent/fluent-bit:latest

COPY ./src/logging/total.conf /fluent-bit/etc/fluent-bit.conf
COPY ./src/logging/extends.conf /fluent-bit/etc/extends.conf