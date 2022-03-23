```bash
:/system/bin # dpm
为了帮助开发和测试设备管理应用程序，可以向设备策略管理器dpm发送命令。
dpm = device policy manager
usage: dpm [subcommand] [options]
用法：dpm [子命令] [可选操作]

usage: dpm set-active-admin [ --user <USER_ID> | current ] <COMPONENT>
用法：dpm 设置活跃管理员 [用户ID | 当前用户] <组件>

usage: dpm set-device-owner [ --user <USER_ID> | current *EXPERIMENTAL* ] [ --name <NAME> ] <COMPONENT>
用法：dpm 设置设备所有者 [用户ID | 当前用户-'实验性'] [名字] <组件> 

usage: dpm set-profile-owner [ --user <USER_ID> | current ] [ --name <NAME> ] <COMPONENT>
用法：dpm 设置概述所有者 [用户ID | 当前用户] [名字] <组件>

usage: dpm remove-active-admin [ --user <USER_ID> | current ] [ --name <NAME> ] <COMPONENT>
用法：dpm 移除活跃管理员 [用户ID | 当前用户] [名字] <组件>

dpm set-active-admin: Sets the given component as active admin for an existing user.
                      作为活动管理员为已经存在的用户设置给定的组件???
dpm set-device-owner: Sets the given component as active admin, and its package as device owner.
		      作为活跃管理员设置给定的组件以及其作为设备拥有者设置其包???
dpm set-profile-owner: Sets the given component as active admin and profile owner for an existing user.                     作为活跃管理员和概述所有者为已经存在的用户设置给定的组件???

dpm remove-active-admin: Disables an active admin, the admin must have declared android:testOnly in the application in its manifest. This will also remove device and profile owners.
	关闭一个活跃管理员，该管理员需在其应用清单中申明安卓：testOnly.这同样会移除设备和概述拥有者。

dpm clear-freeze-period-record: clears framework-maintained record of past freeze periods that the device went through. For use during feature development to prevent triggering restriction on setting freeze periods.
	清理掉设备先前冻结周期的框架记录.在之后的开发期，防止在设置冻结时间上触发限制。???

dpm force-security-logs: makes all security logs available to the DPC and triggers DeviceAdminReceiver.onSecurityLogsAvailable() if needed.
使得所有的安全日志能够到达数据处理中心，并且如果需要可触发DeviceAdminReceiver.onSecurityLogsAvailable()函数。
```

