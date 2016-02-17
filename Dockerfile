#pull from base image.
FROM xgsdev/dhub-frontend

# **** add user *****
RUN adduser --disabled-password --gecos "" deployer
RUN echo "deployer ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
# ***********

ENV HOME /home/deployer/

RUN chown -R deployer:deployer $HOME

USER deployer

# Define working directory.
WORKDIR /home/deployer/code
