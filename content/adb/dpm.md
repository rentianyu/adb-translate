---
title: "Dpm"
date: 2020-12-11T20:58:57+08:00
lastmod: 2020-12-11T20:58:57+08:00
publishdate: 2020-12-11T20:58:57+08:00
description: ""
weight: 10
---

```bash
:/system/bin # dpm
usage: dpm [subcommand] [options]
usage: dpm set-active-admin [ --user <USER_ID> | current ] <COMPONENT>
usage: dpm set-device-owner [ --user <USER_ID> | current *EXPERIMENTAL* ] [ --name <NAME> ] <COMPONENT>
usage: dpm set-profile-owner [ --user <USER_ID> | current ] [ --name <NAME> ] <COMPONENT>
usage: dpm remove-active-admin [ --user <USER_ID> | current ] [ --name <NAME> ] <COMPONENT>

dpm set-active-admin: Sets the given component as active admin for an existing user.

dpm set-device-owner: Sets the given component as active admin, and its package as device owner.

dpm set-profile-owner: Sets the given component as active admin and profile owner for an existing user.

dpm remove-active-admin: Disables an active admin, the admin must have declared android:testOnly in the application in its manifest. This will also remove device and profile owners.

dpm clear-freeze-period-record: clears framework-maintained record of past freeze periods that the device went through. For use during feature development to prevent triggering restriction on setting freeze periods.

dpm force-security-logs: makes all security logs available to the DPC and triggers DeviceAdminReceiver.onSecurityLogsAvailable() if needed.
```

