```bash
:/system/bin # logcat --help
Usage: logcat [options] [filterspecs]
查看系统日志
options include:
  -s              Set default filter to silent. Equivalent to filterspec '*:S'
  		  默认日志输出无筛选,相当于筛选说明'*:S'	
  -f <file>, --file=<file>               Log to file. Default is stdout
  		  将日志写入文件，默认为标准命令行输出
  -r <kbytes>, --rotate-kbytes=<kbytes>
                  Rotate log every kbytes. Requires -f option
		  每xKB循环一次日志，需要配合-f操作
  -n <count>, --rotate-count=<count>
                  Sets max number of rotated logs to <count>, default 4
		 设置循环日志的最大次数，默认为4 
  --id=<id>       If the signature id for logging to file changes, then clear
                  the fileset and continue
		  如果记录到文件的日志标识id改变，就会清除文件集然后继续
  -v <format>, --format=<format>
                  Sets log print format verb and adverbs, where <format> is:
                    brief help long process raw tag thread threadtime time
                  and individually flagged modifying adverbs can be added:
                    color descriptive epoch monotonic printable uid
                    usec UTC year zone
                  Multiple -v parameters or comma separated list of format and
                  format modifiers are allowed.
		  设置日志输出格式方便查看：color颜色,可添加具体颜色名称，green、red等；
		  descriptive描述；epoch标志性事件；monotonic无变化事件；printale表格形式;
		  uid用户id形式；usec感觉和printable差不多；UTC日期；year年份；zone分区范围
		  可以组合多个参数用于输出你想要的数据格式
  -D, --dividers  Print dividers between each log buffer
  -c, --clear     Clear (flush) the entire log and exit
                  if Log to File specified, clear fileset instead
		  清理日志并退出，如果日志是写入规定的文件，那就清理文件集
  -d              Dump the log and then exit (don't block')
 		  扔掉日志退出，不是块。 		
  -e <expr>, --regex=<expr>
                  Only print lines where the log message matches <expr>
                  where <expr> is a Perl-compatible regular expression
		  只打印正则匹配的日志内容
  -m <count>, --max-count=<count>
                  Quit after printing <count> lines. This is meant to be
                  paired with --regex, but will work on its own.
		  打印指定行数并退出,可与正则匹配搭配
  --print         Paired with --regex and --max-count to let content bypass
                  regex filter but still stop at number of matches.
		  正则匹配与最大行数配合，让内容可绕过正则筛选，但仍然可停在匹配的行数 
  -t <count>      Print only the most recent <count> lines (implies -d)
                  只打印最新行，可指定行数。 
  -t '<time>'     Print most recent lines since specified time (implies -d)
    		  从特殊的时间点打印最近的行
  -T <count>      Print only the most recent <count> lines (does not imply -d)
      	          同-t<count>但不会退出logcat
  -T '<time>'     Print most recent lines since specified time (not imply -d)
                  count is pure numerical, time is 'MM-DD hh:mm:ss.mmm...'
                  'YYYY-MM-DD hh:mm:ss.mmm...' or 'sssss.mmm...' format
		  指定日期打印log
  -g, --buffer-size                      Get the size of the ring buffer.
  		获取log缓冲区大小
  -G <size>, --buffer-size=<size>
                  Set size of log ring buffer, may suffix with K or M.
		  设置设置缓冲区大小，可以K或者M后缀
  -L, --last      Dump logs from prior to last reboot
   		  扔掉从上一次重启之前的日志
  -b <buffer>, --buffer=<buffer>         Request alternate ring buffer, 'main',
                  'system', 'radio', 'events', 'crash', 'default' or 'all'.
                  Multiple -b parameters or comma separated list of buffers are
                  allowed. Buffers interleaved. Default -b main,system,crash.
		 请求备用的缓冲区log，可结合其他参数使用。
  -B, --binary    Output the log in binary.
  		  以二进制的方式输出log 		
  -S, --statistics                       Output statistics.
  		  输出日志的统计数据
  -p, --prune     Print prune white and ~black list. Service is specified as
                  UID, UID/PID or /PID. Weighed for quicker pruning if prefix
                  with ~, otherwise weighed for longevity if unadorned. All
                  other pruning activity is oldest first. Special case ~!
                  represents an automatic quicker pruning for the noisiest
                  UID as determined by the current statistics.
		  +++
  -P '<list> ...', --prune='<list> ...'
                  Set prune white and ~black list, using same format as
                  listed above. Must be quoted.
		  基本同-p
  --pid=<pid>     Only prints logs from the given pid.
  		  只打印指定pid的log
  --wrap          Sleep for 2 hours or when buffer about to wrap whichever
                  comes first. Improves efficiency of polling by providing
                  an about-to-wrap wakeup.
		 +++ 

filterspecs are a series of
  <tag>[:priority]

where <tag> is a log component tag (or * for all) and priority is:
  V    Verbose (default for <tag>)
  D    Debug (default for '*')
  I    Info
  W    Warn
  E    Error
  F    Fatal
  S    Silent (suppress all output)

'*' by itself means '*:D' and <tag> by itself means <tag>:V.
If no '*' filterspec or -s on command line, all filter defaults to '*:V'.
eg: '*:S <tag>' prints only <tag>, '<tag>:S' suppresses all <tag> log messages.

If not specified on the command line, filterspec is set from ANDROID_LOG_TAGS.

If not specified with -v on command line, format is set from ANDROID_PRINTF_LOG
or defaults to "threadtime"
```
+++
