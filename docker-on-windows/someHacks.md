# running node-red with a volume folder in C:
in a terminal, run `docker run -it -p 1880:1880 -v "C:\dockervolumes\node_red_data":/data --name mynodered nodered/node-red` and Docker Desktop will complain that this performs poorly (Windows volume mixed with WSL)

# when running with wsl2 and port forwarding doesn't work, try:
the good old restart of wsl with `wsl --shutdown`