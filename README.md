### installazione

```bash
docker build -t mirkobriga/task . && docker run -p 8080:8080 -d mirkobriga/task
```

### richiedere tutte le transazioni

```bash
curl localhost:8080/transactions
```

### richiedere transazioni filtrate per customer

```bash
curl localhost:8080/transactions/{customer_id}
```