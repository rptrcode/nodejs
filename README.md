# azure-nodejs-webapp

webapp deployed on azure

check this : http://rptr-nodejs-webapp.azurewebsites.net/

```
docker run -p 49160:3001 -d rptr/nodets
```
Test :

```
curl -i localhost:49160 
```


Print the output of your app:

```
# get container id
docker ps

#print logs
docker logs container_id 

docker ps
# enter inside docker container
docker exec -it container_id /bin/bash
```
