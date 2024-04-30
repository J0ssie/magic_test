FROM ubuntu:20.04

RUN apt-get update -y && apt-get install -y \
    xinetd

RUN useradd -m ctf
WORKDIR /home/ctf

COPY ctf.xinetd /etc/xinetd.d/ctf
COPY start.sh /start.sh
COPY ./src/ /home/ctf/

RUN chmod -R 755 /home/ctf
RUN chmod +x /home/ctf/chall
RUN chown root:root /home/ctf

RUN chmod +x /start.sh

USER ctf

ENTRYPOINT []
CMD ["/usr/sbin/xinetd","-dontfork"]
EXPOSE 9999
