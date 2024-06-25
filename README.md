# coco
A minimal theme inspired using Steph Ango's [Flexoki](https://stephango.com/flexoki).

Check out the [demo](https://es-romo.github.io/coco/) or my personal [website](https://romo.sh) for a real example.

![coco theme](screenshot.jpg)

## Installation

1. Copy this repository inside of the `themes` folder:

```bash
git submodule add https://github.com/es-romo/coco themes/coco
```

2. Set coco as your theme in `config.toml`:

```toml
theme = "coco"
```
3. **(OPTIONAL)** Copy the sample content:

```bash
cp -r themes/coco/content content
```

## Options

#### Navigation bar links
To add links to the navigation bar, set `menu` under the `[extra]` section of `config.toml`:

```toml
[extra]
menu = [
    {url = "/projects", name = "/projects"},
    {url = "/now", name = "/now"}
]
```

#### Favicon
To add a custom favicon, set `favicon` under the `[extra]` section of `config.toml` to the relative url where it is stored.

```toml
[extra]
favicon = "/path/to/icon.ico"
```

#### External url arrows
For the arrows to appear on the external links as in the demo, set `external_links_target_blank` to `true` under the `[markdown]` section of `config.toml`:

```toml
external_links_target_blank = true
```

## Who is coco?
![Coco the cat](coco.jpg)
She was my rescue cat :)

## License
[MIT](LICENSE)

## Attributions
- Flexoki theme by Step Ango; See [https://stephango.com/flexoki](https://stephango.com/flexoki)
- A Modern CSS Reset by Josh W Comeau; See [https://www.joshwcomeau.com/css/custom-css-reset/](https://www.joshwcomeau.com/css/custom-css-reset/)
- Thanks to not-matthias for the inspiration; See [apollo](https://www.getzola.org/themes/apollo/)
- The default favicon was generated using the following graphics from Twitter Twemoji:
  - Graphics Title: 1f431.svg
  - Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
  - Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f431.svg
  - Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
