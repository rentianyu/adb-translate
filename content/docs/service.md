```bash
:/system/bin # service -h
Usage: service [-h|-?]
用法：服务 [-h|?]
       service list
       服务列表
       service check SERVICE
       查看某一个服务
       service call SERVICE CODE [i32 N | i64 N | f N | d N | s16 STR ] ...
      服务调用服务代码 
Options:???
   i32: Write the 32-bit integer N into the send parcel.
   i64: Write the 64-bit integer N into the send parcel.
   f:   Write the 32-bit single-precision number N into the send parcel.
   d:   Write the 64-bit double-precision number N into the send parcel.
   s16: Write the UTF-16 string STR into the send parcel.
```
