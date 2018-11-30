# babel-preset-stage-0x

**Deprecated: Use latest babel-preset-env**

> Babel preset for stage 0,1,2,3 + with customizable plugin blacklist.

## Motivation

We were using babel preset-es2015 + stage-0 in our project. After upgrading to Node.js 7, we want to try native async/await feature. However, babel-preset-stage-0 depends on babel-preset-stage-3 that includes `transform-async-to-generator` and can't be excluded. Thus I create this preset.

## Install

```sh
npm install --save-dev babel-preset-stage-0x
```

## Usage

**.babelrc**

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": 7
        },
        "exclude": [
          "transform-async-to-generator"
        ]
      }
    ],
    [
      "stage-0x",
      {
        "transform-async-to-generator": false,
        "transform-async-generator-functions": false
      }
    ]
  ]
}
```

