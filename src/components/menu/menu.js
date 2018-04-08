export default {
  data: [
    {
      id: 'M1000',
      routerPath: 'overview',
      label: '总览',
      name: '总览',
      normal: {
        routerPath: '/overview/all'
      },
      children: [
        {
          id: 'M1200',
          label: '总览',
          icon: 'icon-qbcl',
          name: '总览',
          routerPath: '/overview'
        }
      ]
    },
    {
      id: 'M2000',
      routerPath: 'security',
      name: '综合安全态势',
      label: '综合安全态势',
      normal: {
        routerPath: '/manage/passmanage'
      },
      children: [
        {
          id: 'M2100',
          label: '安全态势感知',
          icon: 'icon-wangluoanquan1',
          name: '安全态势感知',
          children: [{
            id: 'M2101',
            label: '攻击态势',
            name: '攻击态势',
            routerPath: '/manage'
          },
          {
            id: 'M2102',
            label: '非法操作态势',
            name: '非法操作态势',
            routerPath: '/security/securityaware/operate'
          }
          ]
        },
        {
          id: 'M2200',
          label: '资产态势',
          icon: 'icon-kanshu03-copy',
          name: '资产态势',
          children: [
            {
              id: 'M2201',
              label: 'IT资产画像',
              name: 'IT资产画像',
              routerPath: '/security/capital/itfrigure'
            },
            {
              id: 'M2202',
              label: '资产清单',
              name: '资产清单',
              routerPath: '/security/capital/list'
            }
          ]
        },
        {
          id: 'M2300',
          label: '攻击画像',
          icon: 'icon-gongjishijian',
          name: '攻击画像',
          routerPath: '/security/attackportrait'
        },
        {
          id: 'M2400',
          label: '安全态势报告',
          icon: 'icon-baogao',
          name: '安全态势报告',
          routerPath: '/security/report'
        }
      ]
    },
    {
      id: 'M3000',
      label: '威胁情报中心',
      routerPath: 'threaten',
      name: '情报中心',
      normal: {
        routerPath: '/threaten/infoprocess'
      },
      children: [
        {
          id: 'M3200',
          label: '情报展示',
          icon: 'icon-qbcl',
          name: '情报展示',
          routerPath: '/threaten/infoprocess'
        }
      ]
    },
    {
      id: 'M4000',
      label: '安全分析',
      routerPath: 'safetyanalysis',
      name: '安全分析',
      normal: {
        routerPath: '/safetyanalysis/fulltextsearch'
      },
      children: [
        {
          id: 'M4100',
          label: '数据搜索',
          icon: 'icon-file-fullTextSearch',
          name: '数据搜索',
          routerPath: '/safetyanalysis/fulltextsearch'
        },
        {
          id: 'M4200',
          label: '安全事件',
          icon: 'icon-anquancopy',
          name: '安全事件',
          routerPath: '/safetyanalysis/securityevent'
        },
        {
          id: 'M4300',
          label: '模型分析',
          icon: 'icon-zuhemoxingfenxi',
          name: '模型分析',
          children: [
            {
              id: 'M4301',
              label: '单页面',
              name: '单页面',
              routerPath: '/safetyanalysis/modelanalysis/singlepage'
            }, {
              id: 'M4302',
              label: '单用户',
              name: '单用户',
              routerPath: '/safetyanalysis/modelanalysis/singleuser'
            }, {
              id: 'M4303',
              label: '模型监控',
              name: '模型监控',
              routerPath: '/safetyanalysis/modelanalysis/monitor'
            }, {
              id: 'M4304',
              label: '名单管理',
              name: '名单管理',
              routerPath: '/safetyanalysis/modelanalysis/list'
            }
          ]
        },
        {
          id: 'M4400',
          label: '策略分析',
          icon: 'icon-strategy',
          name: '策略分析',
          normal: {
            routerPath: '/safetyanalysis/gameanalysis/listManagement'
          },
          children: [{
            id: 'M4401',
            label: '名单管理',
            name: '名单管理',
            routerPath: '/safetyanalysis/gameanalysis/listManagement'
          },
          {
            id: 'M4402',
            label: '关联策略',
            name: '关联策略',
            routerPath: '/safetyanalysis/gameanalysis/associationStrategy'
          },
          {
            id: 'M4403',
            label: '筛选规则',
            name: '筛选规则',
            routerPath: '/safetyanalysis/gameanalysis/filterRules'
          }]
        },
        {
          id: 'M4500',
          label: '场景参数',
          icon: 'icon-canshu',
          name: '场景参数',
          routerPath: '/safetyanalysis/netanalysis'
        }
      ]
    },
    {
      id: 'M5000',
      label: '数据中心',
      routerPath: 'sdc',
      name: '数据中心',
      normal: {
        routerPath: '/sdc/dataaccessmgt'
      },
      children: [

        {
          id: 'M5100',
          label: '采集器管理',
          icon: 'icon-yingyongjieru',
          name: '采集器管理',
          routerPath: '/sdc/dataaccessmgt'
        },
        {
          id: 'M5200',
          label: 'ETL管理',
          icon: 'icon-etl',
          name: 'ETL管理',
          routerPath: '/sdc/etlmgt'
        },
        {
          id: 'M5300',
          label: '存储器管理',
          icon: 'icon-cunchu',
          name: '存储器管理',
          routerPath: '/sdc/storagemgt'
        }
      ]
    },
    {
      id: 'M7000',
      label: '系统管理',
      routerPath: 'sysmgt',
      name: '系统管理',
      normal: {
        routerPath: '/sysmgt/runshow'
      },
      children: [
        {
          id: 'M7200',
          label: '系统运行监控',
          icon: 'icon-xitongyunxing',
          name: '系统运行监控',
          routerPath: '/sysmgt/runshow'
        },
        {
          id: 'M7100',
          label: '用户权限管理',
          icon: 'icon-yonghujiquanxianguanli',
          name: '用户权限管理',
          routerPath: '/sysmgt/userauthority',
          children: [{
            id: 'M7101',
            label: '用户设置',
            name: '用户设置',
            routerPath: '/sysmgt/userauthority/userset'
          },
          {
            id: 'M7102',
            label: '角色设置',
            name: '角色设置',
            routerPath: '/sysmgt/userauthority/roleset'
          },
          {
            id: 'M7103',
            label: '部门设置',
            name: '部门设置',
            routerPath: '/sysmgt/userauthority/usergroupset'
          },
          {
            id: 'M7104',
            label: '密码策略管理',
            name: '密码策略管理',
            routerPath: '/sysmgt/userauthority/passwordPolicy'
          }
          ]
        },
        {
          id: 'M7300',
          label: '系统告警通知',
          icon: 'icon-anquanjinggao',
          name: '系统告警通知',
          routerPath: '/sysmgt/alarminform'
        },
        {
          id: 'M7400',
          label: '数据字典管理',
          icon: 'icon-zidiansousuo',
          name: '数据字典管理',
          routerPath: '/sysmgt/sysdictionary'
        },
        {
          id: 'M7500',
          label: '环境变量配置',
          icon: 'icon-peizhi',
          name: '环境变量配置',
          routerPath: '/sysmgt/environment'
        },
        {
          id: 'M7600',
          label: '系统日志管理',
          icon: 'icon-rizhixitong',
          name: '系统日志管理',
          routerPath: '/sysmgt/syslog'
        }
      ]
    }
  ]
}
