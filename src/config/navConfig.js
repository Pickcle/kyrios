export default {
  master: [
    {
      name: 'link世界',
      route: 'all'
    },
    {
      name: '我的收藏',
      route: 'collection'
    },
    {
      name: '设置',
      route: 'setting'
    },
    {
      name: '更多',
      subTabs: [
        {
          name: '直播回放',
          route: 'replay'
        },
        {
          name: 'TA的稿件',
          route: 'article'
        }
      ]
    }
  ],

  visitor: [
    {
      name: 'link世界',
      route: 'all'
    },
    {
      name: '更多',
      subTabs: [
        {
          name: '直播回放',
          route: 'live-replay'
        },
        {
          name: 'TA的稿件',
          route: 'article'
        }
      ]
    }
  ]
}
