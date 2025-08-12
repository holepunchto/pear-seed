# pear-seed

> Seed or reseed a Pear project by link

## Usage

```js
import seed from 'pear-seed'
```

```js
function status (info) { console.log(info) }
const link = 'pear://....'
const stream = seed(link, opts)
stream.on('data', status)
```

## License

Apache-2.0