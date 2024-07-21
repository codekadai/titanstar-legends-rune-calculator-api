## TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000 API

### Description

This is a basic API for the [TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000](https://github.com/marcomaza92/titanstar-legends-rune-calculator) challenge.

Here we have two endpoints that connect with a Supabase database (PostgreSQL) instance:

- `/api/players`: which returns the players and its informacion (`name` and `talentPoints`)
- `/api/paths`: which returns the paths and their respective runes

### Tech Stack

- ExpressJS
- pnpm
- TS

### Setup

#### Install the dependencies

```sh
pnpm install
```

#### Run the development server

```sh
pnpm run dev
```

### Demo

- [Go to API MVP](https://titanstar-legends-rune-calculator.vercel-api.app/api/paths)
- [Go to UI MVP](https://titanstar-legends-rune-calculator.vercel.app/)
