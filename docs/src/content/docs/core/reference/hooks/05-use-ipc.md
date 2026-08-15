---
title: Zikojs | Hooks | useIPC
description: useIPC
draft : true
sidebar:
    label : useIPC
---
## Definition 

`useIPC` is an **inter-process / inter-tab communication hook** built on top of the browser’s
`BroadcastChannel` API.

It allows different browser contexts (tabs, windows, iframes, workers) to **emit and listen to events**
while supporting:
- Event names
- Room-based messaging
- One-time listeners
- Listener filtering
- Automatic sender isolation

## Signature 

```ts
    useIPC(name : string) : UseIPC
```

## Methods

- `📦 .emit(event: string, data: any, rooms?: string[]) : this`
- `📦 .on(event: string, handler: (data: any) => void, rooms?: string | string[]) : this`
- `📦 .off(event: string, handler: (data: any) => void) : this`
- `📦 .once(event: string, handler: (data: any) => void, rooms?: string | string[]): this`
- `📦 .join(...rooms: string[]) : this`
- `📦 .leave(...rooms: string[]) : this`
- `📦 .close() : this`