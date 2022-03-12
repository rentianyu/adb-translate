```bash
:/system/bin # screenrecord --help
Usage: screenrecord [options] <filename>
screenrecord 参数 文件名
Android screenrecord v1.2.  Records the device's display to a .mp4 file.'
安卓屏幕记录，记录设备屏幕内容保存为mp4文件
Options:
--size WIDTHxHEIGHT
    Set the video size, e.g. "1280x720".  Default is the device's main'
    display resolution if supported 1280x720 if not.  For best results,
    use a size supported by the AVC encoder.
   设置记录尺寸 
--bit-rate RATE
    Set the video bit rate, in bits per second.  Value may be specified as
    bits or megabits, e.g. '4000000' is equivalent to '4M'.  Default 20Mbps.
    设置视频比特率，美妙的bits，默认20M
--bugreport
    Add additional information, such as a timestamp overlay, that is helpful
    in videos captured to illustrate bugs.
   增加额外的信息，例如覆盖一个时间戳，这对捕获bug有帮助。 
--time-limit TIME
    Set the maximum recording time, in seconds.  Default / maximum is 180.
    设置最大的每秒记录，默认180
--verbose
    Display interesting information on stdout.
    在标准输出中显示感兴趣的信息
--help
    Show this message.
    现实帮助信息
Recording continues until Ctrl-C is hit or the time limit is reached.
Ctrl-C停止记录或设置的记录时间到。
```
