# -*- mode: ruby -*-
# vi: set ft=ruby :
require 'vagrant-aws'
# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.

# 
Vagrant.configure(2) do |config|

  config.vm.box = 'dummy'

  # Synced folder
  config.vm.synced_folder "./repositorio", "/home/ubuntu", type: "smb", smb_host: "186.80.103.103", smb_username: "Gabriel", smb_password: "esb", mount_options: ["username=esb","password=esb"]

  # Configuration
  config.vm.provider :aws do |aws, override|
    aws.access_key_id = ENV['AWS_ACCESS_KEY_ID']
    aws.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
    aws.keypair_name = "microservices"

    aws.region = 'us-east-2'
    aws.ami = "ami-963d0ef3"
    aws.security_groups = ['launch-refundms']
    aws.instance_type = "t2.micro"
    aws.tags["Name"] = "Master"

    override.ssh.username = "ubuntu"
    override.ssh.private_key_path = "/Users/Gabriel/documents/desarrollo/Amazon/EC2/microservices.pem"

  end
  # Script to execute after init
  #config.vm.provision "file", source: "~/Desarrollo/ArqNewGen/taller3/IotSensor/MaquinaIot/install.sh", destination: "$HOME/install.sh"
  config.vm.provision "shell", inline: "sudo sh install.sh"

end
