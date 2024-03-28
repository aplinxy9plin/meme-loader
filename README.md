# Meme Loader
[![npm](https://img.shields.io/npm/v/meme-loader.svg)](https://www.npmjs.com/package/meme-loader)

## Features

- Give a fun to your users by meme loader
- Fully customizable
- Easy to use

## Installation

#### npm
```bash
npm install --save meme-loader
```

## Usage

```js
import React from 'react';
import { MemeLoader } from 'meme-loader';

function App() {
  return (
    <div className="App">
      <MemeLoader meme="racoon" />
    </div>
  );
}

export default App;
```

#### Props

|prop|type|required|default value|description|
|---|--- |---     |---          |---        |
|**meme**|"racoon", "chipi"|YES|'racoon'|Choosen meme|
|**title**|ReactNode|NO|'This is your title'|Title of loader|
|**description**|ReactNode|NO|'Description'|Description of loader|
|**muted**|boolean|NO|true|Prop that mute/unmute video|
|**containerClassName**|string|NO|""|ClassName of container|
|**memeLoaderClassName**|string|NO|""|ClassName of meme loader|
|**videoClassName**|string|NO|""|ClassName of video|
|**titleClassName**|string|NO|""|ClassName of title div|
|**descriptionClassName**|string|NO|""|ClassName of description div|
|**containerStyle**|CSSProperties|NO|undefined|style of description div|
|**memeLoaderStyle**|CSSProperties|NO|undefined|style of description div|
|**videoStyle**|CSSProperties|NO|undefined|style of description div|
|**titleStyle**|CSSProperties|NO|undefined|style of description div|
|**descriptionStyle**|CSSProperties|NO|undefined|style of description div|

## About

This project is maintained by [AplinXy9plin](https://github.com/aplinxy9plin)
