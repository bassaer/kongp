# kongp

### start origin server
```
❯ yarn dev
yarn run v1.19.1
$ ts-node src/server.ts
start: http://localost:8002/health
start: http://localost:8003/health
```

### start kong
```
❯ kong start -c kong.conf
Kong started
```

### request
```
❯ curl 'localhost:8000/service1/health'
OK Service1

❯ curl 'localhost:8000/service2/health'
OK Service2
```
