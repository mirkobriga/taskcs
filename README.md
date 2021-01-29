### installazione

```bash
docker build -t mirkobriga/task . && docker run -p 8080:8080 -d --name mbtask mirkobriga/task
```

### richiedere tutte le transazioni

```bash
curl localhost:8080/transactions
```

### richiedere transazioni filtrate per customer

```bash
curl localhost:8080/transactions/{customer_id}
```

### lanciare test
```bash
docker exec -it mbtask npm run test
```