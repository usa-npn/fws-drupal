# Development Setup

Both directories `npm_common` and `npn_fws_dashboard` are in this directory's `.gitignore` so can be checked out for development within this module.

```
$ git clone git@github.com:usa-npn/npn_fws_dashboard.git
$ cd npn_fws_dashboard
$ npm install
$ ng build --output-path ../app [--watch]
```

Add the optional `--watch` listed above to the `ng build` command to have code changes automatically compiled.  In this way you can develop within the context of the Drupal site but requires browser refreshes which often aren't required when using `ng serve`.

If developing updates to `npn_common` then there would be some extra steps.

E.g.

```
$ git clone git@github.com:usa-npn/npn_common.git
$ cd npn_common
$ npm link
$ rm -rf ./node_modules
$ cd ../npm_fws_dashboard
$ npm link npn_common
```

Not sure if `npm link` works on Windows boxes or not since it uses symlinks.

Unfortunately it is necessary to remove `node_modules` from `npn_common` (E.g. `rm -rf ./node_modules` above) for `npn_fws_dashboard` to compile since `ng serve|build` would dig into its own `./node_modules/npn_common/node_modules` and result in the build failing.

This has a very unfortunate side effect for coding of `npn_common` in that code linting and completion doesn't work properly since node_modules is not available.
