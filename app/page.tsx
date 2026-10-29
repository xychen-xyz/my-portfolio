'use client';

import { useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'done'>('idle');
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const runPipeline = () => {
    setPipelineState('running');
    setDemoLog(['[0.1s] 接收到海外独立站表单: Liam Vance (Vance Logistics Ltd, Sydney)']);

    setTimeout(() => {
      setDemoLog((prev) => [
        ...prev,
        '[0.6s] 🤖 AI 大数据背调穿透: 澳大利亚 12 年建材分销商，评级 [A级大客户]',
        '[0.9s] 建议销售策略: 提供 AS/NZS 澳标检测报告与集装箱整柜阶梯 FOB 报价',
      ]);
    }, 600);

    setTimeout(() => {
      setDemoLog((prev) => [
        ...prev,
        '[1.3s] 📤 成功派发卡片至【出海销售大群】企业微信 Webhook (HTTP 200 OK)',
        '[1.4s] 💾 潜客基础信息已归档至私有大数据库',
      ]);
      setPipelineState('done');
    }, 1300);
  };

  return (
    <div className="space-y-12">
      {/* 极简导航 */}
      <header className="flex items-center justify-between pb-4">
        <nav className="flex items-center space-x-5 text-sm">
          <a href="#about" className="font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-75 transition">home</a>
          <a href="#work" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition">work</a>
          <a href="#writing" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition">writing</a>
          <a href="#demo" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition">pipeline</a>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-xs font-mono"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* 个人介绍 */}
      <section id="about" className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Leo
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-mono tracking-tight">
          Cross-border B2B Growth · Factory Storytelling · AI & Systems Automation
        </p>

        <div className="text-neutral-700 dark:text-neutral-300 text-[15px] leading-relaxed space-y-3 pt-2">
          <p>
            I bridge the gap between <strong>heavy manufacturing</strong> and <strong>modern digital automation</strong>. 
            大多数做跨境出海的营销人员不懂工业机械与代码，而多数技术工程师又无法站在车间一线用流利英语面对镜头。我将这两者打通。
          </p>
          <p>
            我致力于为出海企业搭建从 <strong>地道英语工厂探厂口播（Tony-Style）</strong>、<strong>精准买量投流与漏斗优化</strong>，到 <strong>AI 潜客大数据秒级提纯</strong> 与 <strong>企业微信实时派单</strong> 的完整端到端商业获客链路。
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono pt-2 text-neutral-500 dark:text-neutral-400">
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4">contact me ↗</a>
          <a href="#writing" className="hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4">read essays ↗</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 underline underline-offset-4">github ↗</a>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800/80" />

      {/* 核心能力与实战案例 */}
      <section id="work" className="space-y-6">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Selected Capabilities
        </h2>

        <div className="space-y-6 text-sm">
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">01 / B2B 工厂出海短视频与英语口播</span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Tony of LCSIGN Style</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13.5px]">
              深入工厂车间现场，用母语级流利英文讲解工业产品核心参数与质检标准。自研拍摄、收音、工业运镜与剪辑节奏，具备日更级稳定产出能力，为企业建立真实的外商信任感。
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">02 / 广告买量投放与转化漏斗分析</span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">TikTok & Meta Ads</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13.5px]">
              以数据分析师视角操盘买量投放。设计高转化外贸独立表单，深度监控 CTR、留资转化率及单个有效线索成本（CPL），用真实转化数据反哺短视频素材的迭代方向。
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">03 / AI 潜客深度清洗与企微 Webhook 极速交付</span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Full-Stack Automation</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13.5px]">
              自主编写后端脚本：海外客户留资后，通过 LLM 实时调用大数据分析潜客公司规模、采购类目与决策人信用评级，2 秒内格式化推送到国内企业微信群机器人，实现秒级响应。
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-neutral-900 dark:text-neutral-100">04 / 跨境出海合规环境与企业数据底座</span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Infra & Knowledge Base</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[13.5px]">
              规划企业级出海网络合规配置与防关联运营环境；利用开源数据方案搭建企业级客户大数据库与资产知识库，保障企业核心数据私有化可控。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800/80" />

      {/* 文章手记 */}
      <section id="writing" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Writing & Playbooks
          </h2>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Essays</span>
        </div>

        <div className="space-y-4">
          <div className="group block cursor-pointer">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-400">
                B2B 制造业短视频日更交付实战：像 Tony 一样赢得海外采购商信任
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 ml-4 shrink-0">
                2026-10
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              探讨车间实景拍摄的分镜组织、工业品参数通俗化英语表达，以及单人如何完成日更闭环。
            </p>
          </div>

          <div className="group block cursor-pointer">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-400">
                2秒内完成线索提纯：海外表单联动大模型与企业微信的自动化架构
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 ml-4 shrink-0">
                2026-09
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              如何用轻量服务器接收 Webhook，调用大模型对访客域名进行深挖，并在企微群实现结构化播报。
            </p>
          </div>

          <div className="group block cursor-pointer">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-400">
                出海企业海外本地化网络环境合规搭建与隔离运维手册
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 ml-4 shrink-0">
                2026-08
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              从 IP 纯净度检测、多账号环境物理隔离到内容发布节点的风控规避逻辑全解析。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800/80" />

      {/* 极简交互演示 */}
      <section id="demo" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Interactive Pipeline
          </h2>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Live Simulation</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
          点击下方按钮，实时模拟海外买家留资 ➔ 后端脚本深挖数据 ➔ 企微群格式化推送的完整数据链路：
        </p>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 bg-neutral-50 dark:bg-[#161616] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            <span>pipeline.log</span>
            <span className={pipelineState === 'running' ? 'text-amber-500' : pipelineState === 'done' ? 'text-emerald-500 font-bold' : 'text-neutral-400'}>
              {pipelineState === 'idle' ? 'ready' : pipelineState === 'running' ? 'processing...' : 'delivered (200 OK)'}
            </span>
          </div>

          <div className="text-neutral-700 dark:text-neutral-300 space-y-1.5 leading-normal min-h-[70px]">
            {demoLog.length === 0 ? (
              <div className="text-neutral-400 italic">点击下方按钮触发全流程模拟...</div>
            ) : (
              demoLog.map((log, index) => (
                <div key={index}>{log}</div>
              ))
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={runPipeline}
              disabled={pipelineState === 'running'}
              className="px-3.5 py-1.5 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium hover:opacity-90 disabled:opacity-50 transition text-xs"
            >
              {pipelineState === 'running' ? 'Executing Pipeline...' : 'Run Pipeline Trigger ➔'}
            </button>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800/80" />

      {/* 底部联络 */}
      <footer id="contact" className="space-y-4 pt-2 pb-12 text-sm text-neutral-600 dark:text-neutral-400">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Connect
        </h2>
        <p className="leading-relaxed text-[13.5px]">
          If you are an enterprise manufacturer expanding overseas, or an entrepreneur exploring automated lead generation systems, feel free to reach out.
        </p>

        <ul className="space-y-2 text-xs font-mono pt-1">
          <li>
            <span className="text-neutral-400 dark:text-neutral-500 w-20 inline-block">email:</span>
            <a href="mailto:contact@yourname.xyz" className="text-neutral-900 dark:text-neutral-100 hover:underline">contact@yourname.xyz ↗</a>
          </li>
          <li>
            <span className="text-neutral-400 dark:text-neutral-500 w-20 inline-block">wechat:</span>
            <span className="text-neutral-900 dark:text-neutral-100">your-wechat-id (备注出海交流)</span>
          </li>
          <li>
            <span className="text-neutral-400 dark:text-neutral-500 w-20 inline-block">github:</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-900 dark:text-neutral-100 hover:underline">@yourusername ↗</a>
          </li>
        </ul>

        <div className="pt-8 text-xs font-mono text-neutral-400 dark:text-neutral-500">
          © 2026 Leo · Built with Next.js & Tailwind CSS · Inspired by Lee Robinson
        </div>
      </footer>
    </div>
  );
}
