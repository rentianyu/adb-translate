---
title: "Settings"
date: 2020-12-11T20:59:00+08:00
lastmod: 2020-12-11T20:59:00+08:00
publishdate: 2020-12-11T20:59:00+08:00
description: ""
weight: 10
---

```bash
:/system/bin # settings
Settings provider (settings) commands:
  help
      Print this help text.
  get [--user <USER_ID> | current] NAMESPACE KEY
      Retrieve the current value of KEY.
  put [--user <USER_ID> | current] NAMESPACE KEY VALUE [TAG] [default]
      Change the contents of KEY to VALUE.
      TAG to associate with the setting.
      {default} to set as the default, case-insensitive only for global/secure namespace
  delete NAMESPACE KEY
      Delete the entry for KEY.
  reset [--user <USER_ID> | current] NAMESPACE {PACKAGE_NAME | RESET_MODE}
      Reset the global/secure table for a package with mode.
      RESET_MODE is one of {untrusted_defaults, untrusted_clear, trusted_defaults}, case-insensitive
  list NAMESPACE
      Print all defined keys.
      NAMESPACE is one of {system, secure, global}, case-insensitive
```

