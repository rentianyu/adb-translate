```bash
:/system/bin # telecom
usage: telecom [subcommand] [options]
usage: telecom set-phone-account-enabled <COMPONENT> <ID> <USER_SN>
usage: telecom set-phone-account-disabled <COMPONENT> <ID> <USER_SN>
usage: telecom register-phone-account <COMPONENT> <ID> <USER_SN> <LABEL>
usage: telecom register-sim-phone-account <COMPONENT> <ID> <USER_SN> <LABEL> <ADDRESS>
usage: telecom unregister-phone-account <COMPONENT> <ID> <USER_SN>
usage: telecom set-default-dialer <PACKAGE>
usage: telecom get-default-dialer
usage: telecom get-system-dialer
usage: telecom wait-on-handlers

telecom set-phone-account-enabled: Enables the given phone account, if it has
 already been registered with Telecom.

telecom set-phone-account-disabled: Disables the given phone account, if it
 has already been registered with telecom.

telecom set-default-dialer: Sets the default dialer to the given component.

telecom get-default-dialer: Displays the current default dialer.

telecom get-system-dialer: Displays the current system dialer.

telecom wait-on-handlers: Wait until all handlers finish their work.
```