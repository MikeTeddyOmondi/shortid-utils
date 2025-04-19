# shortid-utils

🔗 A tiny, powerful utility library for generating short, unique, deterministic, and time-based IDs. Perfect for TinyURL-style APIs.

## Features

- 🔁 Random alphanumeric short IDs
- ✅ Collision-resistant generation
- 🧠 Deterministic hash-based IDs
- 🕒 Timestamp/user-based short IDs

## Install

```bash
npm install shortid-utils
```

## Usage

```ts
import { generateShortId } from 'shortid-utils';

const id = generateShortId(); // e.g., 'aZ3k9Lp'
```

## License

MIT
