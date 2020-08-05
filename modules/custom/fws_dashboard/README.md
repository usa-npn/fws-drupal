# Development Setup

Both directories `npm_common` and `npn_fws_dashboard` are in this directory's `.gitignore` so can be checked out for development within this module.

```
$ git clone git@github.com:usa-npn/npn_fws_dashboard.git
$ cd npn_fws_dashboard
$ npm install
$ ng build --output-path ../app [--watch]
```

For the status of spring Dashboard

```
$ git clone git@github.com:usa-npn/npn_fws_spring.git
$ cd npn_fws_spring
$ npm install
$ ng build --output-path ../spring [--watch]
```

Add the optional `--watch` listed above to the `ng build` command to have code changes automatically compiled.  In this way you can develop within the context of the Drupal site but requires browser refreshes which often aren't required when using `ng serve`.

_Important_: The above command will result in a __development__ build of the application.  In this situation CSS will be inlined into the app document and the JavaScript will not be minified so will be significantly larger.  Prior to committing code and pushing a production build should be built and tested like:

```
$ cd npn_fws_dashboard
$ ng build --output-path ../app --prod
```

If developing updates to `npn_common` then there would be some extra steps.

E.g.

```
$ git clone git@github.com:usa-npn/npn_common.git
$ cd npn_common
$ npm link
$ rm -rf ./node_modules
// or $ mv ./node_modules ./node_modules.bak (which will be ignored and can be moved back if necessary).
$ cd ../npm_fws_dashboard
$ npm link npn_common
```

Not sure if `npm link` works on Windows boxes or not since it uses symlinks.

Unfortunately it is necessary to remove `node_modules` from `npn_common` (E.g. `rm -rf ./node_modules` above) for `npn_fws_dashboard` to compile since `ng serve|build` would dig into its own `./node_modules/npn_common/node_modules` and result in the build failing.

This has a very unfortunate side effect for coding of `npn_common` in that code linting and completion doesn't work properly since node_modules is not available.

## Known issues

### npn_common

As mentioned above `npn_common` isn't a "library" of compiled code, it's simply a bunch of code that can be compiled into another application.  There are some minor annoying development time issues that arise (at least using Atom as an editor).  I'm not certain this is actually a big deal but just want to comment on it.  Turning it into a versioned library would require a build framework, more tests internally to validate it functions outside of an application, etc.

### npn_common modules

It would be ideal to have each visualization be its own module.  Currently the `npn_common/visualizations/index.ts` barrel is one BIG module that deals with all the dependencies, etc. for ALL visualizations, so an application at the moment cannot be picky about which visualizations it wants to include.  It will need to import that module and get the code for all visualizations even if they're not used.  It's not clear if the `ng build` process might not shake out what isn't actually used, it could be.

One big module or many smaller modules both have drawbacks but at the moment that module's contents are pretty large and marginally cumbersome.

### `environment.ts`

Angular CLI projects have this "seemingly" nice facility where they generate an environment constant for you that you can provide variations of for different functioning builds.  By default there is an `environment.ts` and `environment.prod.ts`.  A normal dev build should use `environment.ts` and when generating a production build `environment.prod.ts` should over-write `environment.ts` so that all code will be compiled against its contents.

Angular CLI builds are NOT doing this for some reason I cannot figure out.  I'd suggest in the future moving any constants that are within `environment.ts` out into other classes, services, constants, etc.

At the moment `npn_fws_dashboard/src/app/app.module.ts` is keying off of `environment.production` to call Angular's `enableProdMode()` function (which turns off things like assertions) and is nulling out `console.log|info|debug` to in essence disable development time debugging.

### Logging

All code is at the moment simply using `console.log|info|debug` as opposed to some service like AngularJS `$log` which can be configured.  Part of the reason for this was keeping things moving and because there were many cases where simple classes would want to log something and providing "injected" services became very cumbersome.  This should probably be reviewed.

At the moment when `environment.production` is set to true the application on bootstrap will replace `console.log|info|debug` with a no-op function essentially turning off all non error/warning related log messages.

<<<<<<< HEAD
test2
=======
test
>>>>>>> 87f2a515c1d2a5e92f29a937d11fdcfbe28e2168
