#!/bin/bash
# 删除原来的目录
sed -i "/          'adb/d" pagic.config.tsx
echo -e '# `ADB` 有关命令目录\n' > adb/README.md
for i in $(ls adb | tac); do
	sed -i "/children/a\          'adb/${i}'," pagic.config.tsx
	sed -i "/          'adb\/README/d" pagic.config.tsx
	sed -i "2i[${i}](${i})" adb/README.md
done

cat adb/README.md