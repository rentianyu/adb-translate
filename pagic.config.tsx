import { React } from 'https://deno.land/x/pagic/mod.ts';

export default {
  srcDir: '.',
  exclude: ['examples'],
  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'gitalk'],
  title: 'ADB 翻译文档',
  description: '此开源项目由QQ群773276432发起的ADB有关命令的翻译及其使用，目前还在建设中，希望大家能够贡献自己的一份力量，使之成为将来ADB命令的查询手册，方便大家查询。加油吧，搞机人！',
  github: 'https://github.com/rentianyu/adb-translate',
  head: <link rel="icon" type="image/png" href="/favicon.png" />,
  // 导航栏
  nav: [
    {
      text: '赞助网站维护者',
      link: 'https://github.com/rentianyu',
      target: '_blank',
      popover: (
        <>
          <img src="/assets/wechat.jpg" width="256" style={{ marginRight: '1rem', verticalAlign: 'top' }} />
          <img src="/assets/alipay.jpg" width="256" style={{ verticalAlign: 'top' }} />
        </>
      )
    },
    {
      text: '加入 QQ 群',
      link: 'https://jq.qq.com/?_wv=1027&k=LCtkXOpt',
      target: '_blank',
      popover: (
        <>
          <p style={{ marginTop: 0, marginBottom: '1rem' }}>群号: 773276432</p>
          <img src="/assets/join-qq.jpg" width="256" />
        </>
      )
    },
  ],
  // 侧边栏
  sidebar: {
    '/': [
      {
        link: 'introduction/README.md',
        ]
      },
      {
        link: 'adb/README.md',
        children: [
          'adb/am.md',
          'adb/appops.md',
          'adb/busybox.md',
          'adb/cmd.md',
          'adb/dpm.md',
          'adb/dumpsys.md',
          'adb/getprop.md',
          'adb/logcat.md',
          'adb/pm.md',
          'adb/screencap.md',
          'adb/screenrecord.md',
          'adb/service.md',
          'adb/setenforce.md',
          'adb/setprop.md',
          'adb/settings.md',
          'adb/svc.md',
          'adb/telecom.md',
          'adb/toybox.md',
          'adb/wm.md',
        ]
      },
      'thanks/README.md'
    ]
  },
  tools: {
    editOnGitHub: true,
    backToTop: true
  },
  gitalk: {
    clientID: '02b6690ae2881b818993',
    clientSecret: 'ab1dc3c6f7040f0b7a81b8be542bfafd7a74b89c',
    repo: 'adb-talk',
    owner: 'rentianyu',
    admin: ['rentianyu'],
    pagerDirection: 'first'
  },
};
