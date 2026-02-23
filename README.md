# quest-log

TUI task launcher for devs who use Claude Code. Auto-detects your git repos, tracks tasks, and launches Claude in a tmux window already working on whatever you select.

![catppuccin mocha theme](https://img.shields.io/badge/theme-catppuccin%20mocha-cba6f7)

## what it does

- scans `~/` for git repos on first run
- shows projects with tasks/subtasks, progress bars, git dirty status
- press Enter on a task → opens a tmux window with `claude` prompted to work on it
- optionally pre-seed tasks via `~/.config/quest-log/seed.json`

## install

```sh
git clone https://github.com/mellen-dev/quest-log
cd quest-log
bun install
```

## run

```sh
bun run src/main.ts
```

Or build a binary:

```sh
bun build src/main.ts --compile --outfile quest-log
./quest-log
```

## keys

| key | action |
|-----|--------|
| `h/l` | switch panel |
| `j/k` | move up/down |
| `Enter` | launch claude on task |
| `Space` | toggle done |
| `a` | add item |
| `d` | delete item |
| `r` | rename |
| `S` | rescan repos |
| `gg/G` | top/bottom |
| `q` | quit |

## seed config

Drop a `seed.json` in `~/.config/quest-log/` to pre-populate tasks on first run:

```json
{
  "projects": [
    {
      "name": "My Project",
      "repo": "my-project",
      "tasks": [
        {
          "name": "ship v1",
          "subtasks": ["write tests", "deploy"]
        }
      ]
    },
    {
      "name": "old-thing",
      "repo": "old-thing",
      "done": true
    }
  ]
}
```

`repo` maps to a directory name in `~/`. Projects without a `repo` field are standalone (hardware projects, etc).

Without a seed config, it just discovers your repos and adds them with no tasks.

## requirements

- [bun](https://bun.sh)
- [claude](https://claude.ai/download) (CLI) — for the task launcher
- tmux — Enter key opens tasks in new tmux windows
