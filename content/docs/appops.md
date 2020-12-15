```bash
:/system/bin # appops
AppOps service (appops) commands:
  help
    Print this help text.
  start [--user <USER_ID>] <PACKAGE | UID> <OP>
    Starts a given operation for a particular application.
  stop [--user <USER_ID>] <PACKAGE | UID> <OP>
    Stops a given operation for a particular application.
  set [--user <USER_ID>] <PACKAGE | UID> <OP> <MODE>
    Set the mode for a particular application and operation.
  get [--user <USER_ID>] <PACKAGE | UID> [<OP>]
    Return the mode for a particular application and optional operation.
  query-op [--user <USER_ID>] <OP> [<MODE>]
    Print all packages that currently have the given op in the given mode.
  reset [--user <USER_ID>] [<PACKAGE>]
    Reset the given application or all applications to default modes.
  write-settings
    Immediately write pending changes to storage.
  read-settings
    Read the last written settings, replacing current state in RAM.
  options:
    <PACKAGE> an Android package name.
    <OP>      an AppOps operation.
    <MODE>    one of allow, ignore, deny, or default
    <USER_ID> the user id under which the package is installed. If --user is not
              specified, the current user is assumed.
```

