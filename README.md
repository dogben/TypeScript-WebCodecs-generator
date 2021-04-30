# WebCodecs Typescript lib generator

This repo is forked from
https://github.com/microsoft/TypeScript-DOM-lib-generator to generate TypeScript
bindings from the WebCodecs IDL files in the Chromium repo.

## Build Instructions

To get things setup:

```sh
npm install
```

To generate the `.d.ts` files

```sh
cat /path/to/chromium/src/third_party/blink/renderer/modules/webcodecs/*.idl > inputfiles/idl/webcodecs.widl
npm run build
npm run baseline-accept
```

You can then run `git diff` to look at the changes. Then,

```sh
cp baselines/webcodecs.generated.d.ts /path/to/DefinitelyTyped/types/dom-webcodecs/
```

If there are diffs to `baselines/dom.generated.d.ts`, these will need to be
handled manually.

For WebCodecs, we assume that all APIs are exposed to both Window and
DedicatedWorker, including AudioBuffer (part of the Web Audio spec). If this
assumption does not hold in the future, we may need to split the declarations
into two sets. Note that `inputfiles/idl/Web Audio.widl` has been manually
edited in this repo and running `fetch-idl` will overwrite these edits.
