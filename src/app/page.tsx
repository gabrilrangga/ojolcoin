'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Car, 
  Zap, 
  MapPin, 
  Shield, 
  Gift, 
  HeadphonesIcon,
  Coins,
  Smartphone,
  Package,
  Star,
  Wallet,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Rocket,
  Globe,
  Menu,
  X,
  Sparkles,
  Cpu,
  Lock,
  Clock,
  Award,
  Infinity,
  Network,
  Flame,
  Diamond,
  Crown,
  Gem,
  Wand2
} from 'lucide-react'

type Language = 'en' | 'id' | 'cn'

const translations = {
  en: {
    vision: 'Vision',
    joinEarly: 'Join Early Access',
    heroTitle: 'THE FUTURE OF TRANSPORTATION',
    heroSubtitle: 'With low costs, intelligent AI, and an integrated ecosystem, OJOL opens new opportunities in mobility and the digital economy.',
    viewVision: 'View Vision',
    joinEarlyAccess: 'Join Early Access',
    featuresTitle: 'Key Features',
    featuresSubtitle: 'Built for the Modern Era',
    aiDispatch: 'AI Dispatch System',
    aiDispatchDesc: 'Smart matching algorithm that connects passengers with the nearest drivers instantly',
    lowCost: 'Low Cost',
    lowCostDesc: '8% operational fee - the lowest in the industry, ensuring fair earnings for drivers',
    realTime: 'Real-Time Tracking',
    realTimeDesc: 'Live GPS tracking with accurate ETA, route optimization, and a fair ecosystem',
    securePayment: 'Secure Payment',
    securePaymentDesc: 'Various payment options with blockchain-based security',
    driverRewards: 'Driver Rewards',
    driverRewardsDesc: 'Token-based reward system for loyal drivers and users',
    support247: '24/7 Support',
    support247Desc: 'Customer and driver support available around the clock',
    tokenTitle: 'OJOL TOKEN',
    tokenSubtitle: 'Rewards That Matter',
    tokenDesc: 'The OJOL Token powers our ecosystem, providing rewards, discounts, and governance rights to community members.',
    tokenDriver: 'Driver Rewards',
    tokenDriverDesc: 'Earn tokens for every completed trip and get rewarded',
    tokenDiscount: 'Trip Discounts',
    tokenDiscountDesc: 'Use tokens to get trip discounts',
    tokenGovernance: 'Governance',
    tokenGovernanceDesc: 'Based on platform decisions',
    ecosystemTitle: 'PLATFORM ECOSYSTEM',
    rideHailing: 'Ride Hailing',
    rideHailingDesc: 'On-demand motorbike and car ride services with AI matching for fast and reliable pickup',
    foodDelivery: 'Food Delivery',
    foodDeliveryDesc: 'Food and beverage delivery from local restaurants, integrated in the OJOL ecosystem',
    packageDelivery: 'Package Delivery',
    packageDeliveryDesc: 'Fast package and goods delivery for individuals and small businesses across the city',
    rewardSystem: 'Reward System',
    rewardSystemDesc: 'Users and Drivers receive token-based rewards for activities, ratings, loyalty — automatically',
    ojolPay: 'OJOL Pay',
    ojolPayDesc: 'Integrated digital financial service for QRIS payments, interbank transfers, and instant transactions using OJOL Coin in one safe, fast, and efficient ecosystem.',
    coinUtilities: 'OJOL Coin Utilities',
    coinUtilitiesDesc: 'OJOL Coin powers platform access, priority matching, staking, and governance. Utility-based token',
    howItWorksTitle: 'HOW IT WORKS',
    howItWorksSubtitle: 'Smart, Transparent, and Decentralized Mobility Infrastructure',
    onboarding: 'Driver Onboarding',
    onboardingDesc: 'Join easily through a quick registration and verification process, designed to ensure ecosystem quality and reliability from the start',
    coinAccess: 'OJOL Coin-Based Access',
    coinAccessDesc: 'OJOL Coin serves as the ecosystem access key — enabling driver participation in optimally and sustainably accepting requests',
    aiDispatch: 'Intelligent AI Dispatch',
    aiDispatchDesc: 'AI-based matching engine allocates ride requests in real-time to the nearest drivers with an efficient, adaptive, and fair approach',
    transparentRevenue: 'Transparent Revenue Structure',
    transparentRevenueDesc: 'Clear and competitive fee model — drivers retain up to 92% of each fare, with only 8% operational fee and no hidden deductions',
    incentiveLayer: 'Token-Based Incentive Layer',
    incentiveLayerDesc: 'Automated incentive system that rewards in OJOL Coin based on performance, reputation, and contribution level in the network',
    roadmapTitle: 'ROADMAP',
    phase1: 'Phase 1 — Foundation',
    phase1Status: 'In Progress',
    phase1_1: 'Official website launch & platform vision',
    phase1_2: 'OJOL Coin issuance',
    phase1_3: 'Initial community building',
    phase1_4: 'Strategic partnerships initiation',
    phase1_5: 'Core team formation',
    phase2: 'Phase 2 — Development',
    phase2Status: 'Upcoming',
    phase2_1: 'App development (driver & user)',
    phase2_2: 'AI Dispatch system integration',
    phase2_3: 'Security & compliance implementation',
    phase2_4: 'Interactive Product Preview launch',
    phase2_5: 'Community Feedback Loop',
    phase3: 'Phase 3 — Launch',
    phase3Status: 'Upcoming',
    phase3_1: 'Official platform launch',
    phase3_2: 'Driver & passenger app release',
    phase3_3: 'Operations in initial markets',
    phase3_4: 'Expansion to major cities',
    phase4: 'Phase 4 — Ecosystem Maturity',
    phase4Status: 'Upcoming',
    phase4_1: 'Financial services integration (OJOL Pay)',
    phase4_2: 'Full staking & governance',
    phase4_3: 'Global expansion',
    phase4_4: 'Open API for developers',
    phase5: 'Phase 5 — Expansion',
    phase5Status: 'Upcoming',
    phase5_1: 'Regional expansion',
    phase5_2: 'Additional ecosystem services',
    phase5_3: 'OJOL Coin utility enhancement',
    phase5_4: 'Network scalability and growth',
    whyChooseTitle: 'WHY CHOOSE OJOL?',
    whyChooseDesc: 'With lower costs, intelligent AI, and a token-based ecosystem — OJOL opens a new era of digital mobility.',
    drivers: '4 Million',
    driversLabel: 'Drivers in Indonesia',
    users: '88.3 Million',
    usersLabel: 'Users in Indonesia',
    lowFee: '8%',
    lowFeeLabel: 'Lowest Fee in Industry',
    followUs: 'Follow Us',
    connect: 'Connect with our community',
    ctaTitle: 'Join the OJOL Revolution',
    ctaDesc: 'Be part of the future of transportation. Get early access and exclusive rewards.',
    ctaButton: 'Join Early Access',
  },
  id: {
    vision: 'Visi',
    joinEarly: 'Gabung Awal',
    heroTitle: 'MASA DEPAN TRANSPORTASI',
    heroSubtitle: 'Dengan biaya rendah, AI cerdas, dan ekosistem terintegrasi, OJOL membuka peluang baru dalam mobilitas dan ekonomi digital.',
    viewVision: 'Lihat Visi',
    joinEarlyAccess: 'Gabung Akses Awal',
    featuresTitle: 'Fitur Unggulan',
    featuresSubtitle: 'Dibuat untuk era modern',
    aiDispatch: 'Sistem Dispatch AI',
    aiDispatchDesc: 'Algoritma pencocokan cerdas yang menghubungkan penumpang dengan pengemudi terdekat secara instan',
    lowCost: 'Biaya Rendah',
    lowCostDesc: 'Biaya operasional 8% terendah di industri, memastikan penghasilan adil untuk pengemudi',
    realTime: 'Pelacakan Real-Time',
    realTimeDesc: 'Pelacakan GPS langsung dengan ETA akurat, optimasi rute, dan ekosistem yang adil',
    securePayment: 'Pembayaran Aman',
    securePaymentDesc: 'Opsi pembayaran beragam dengan keamanan berbasis blockchain',
    driverRewards: 'Reward Pengemudi',
    driverRewardsDesc: 'Sistem reward berbasis token untuk pengemudi dan pengguna setia',
    support247: 'Dukungan 24/7',
    support247Desc: 'Dukungan pelanggan dan pengemudi sepanjang waktu',
    tokenTitle: 'TOKEN OJOL',
    tokenSubtitle: 'Reward yang berarti',
    tokenDesc: 'Token OJOL menggerakkan ekosistem kami, memberikan reward, diskon, dan hak tata kelola kepada anggota komunitas.',
    tokenDriver: 'Reward Pengemudi',
    tokenDriverDesc: 'Dapatkan token untuk setiap perjalanan yang selesai dan mendapat reward',
    tokenDiscount: 'Diskon Perjalanan',
    tokenDiscountDesc: 'Gunakan token untuk mendapatkan diskon perjalanan',
    tokenGovernance: 'Tata Kelola',
    tokenGovernanceDesc: 'Berdasarkan keputusan platform',
    ecosystemTitle: 'EKOSISTEM PLATFORM',
    rideHailing: 'Ojek Online',
    rideHailingDesc: 'Layanan ojek motor dan mobil on-demand dengan pencocokan AI untuk penjemputan yang cepat dan handal',
    foodDelivery: 'Pesan Antar Makanan',
    foodDeliveryDesc: 'Layanan antar makanan dan minuman dari restoran lokal, terintegrasi dalam ekosistem OJOL',
    packageDelivery: 'Pengiriman Barang',
    packageDeliveryDesc: 'Pengiriman paket dan barang cepat untuk individu dan bisnis kecil di seluruh kota',
    rewardSystem: 'Sistem Reward',
    rewardSystemDesc: 'Pengguna dan Driver mendapatkan reward berbasis token untuk aktivitas, rating, kesetiaan, dan loyalitas — secara otomatis',
    ojolPay: 'OJOL Pay',
    ojolPayDesc: 'Layanan keuangan digital terintegrasi untuk pembayaran QRIS, transfer antar bank, dan transaksi instan menggunakan OJOL Coin dalam satu ekosistem yang aman, cepat, dan efisien.',
    coinUtilities: 'Utilitas OJOL Coin',
    coinUtilitiesDesc: 'OJOL Coin menggerakkan akses platform, priority matching, staking, dan tata kelola. Token berbasis utilitas',
    howItWorksTitle: 'CARA KERJA',
    howItWorksSubtitle: 'Infrastruktur Mobilitas yang Cerdas, Transparan, dan Terdesentralisasi',
    onboarding: 'Onboarding Pengemudi',
    onboardingDesc: 'Bergabung dengan mudah melalui proses registrasi dan verifikasi yang cepat, dirancang untuk memastikan kualitas dan keandalan ekosistem sejak awal',
    coinAccess: 'Akses Berbasis OJOL Coin',
    coinAccessDesc: 'OJOL Coin berfungsi sebagai kunci akses ekosistem — mengaktifkan partisipasi pengemudi dalam menerima permintaan secara optimal dan berkelanjutan',
    aiDispatch: 'Intelligent AI Dispatch',
    aiDispatchDesc: 'Mesin pencocokan berbasis AI mengalokasikan permintaan perjalanan secara real-time kepada pengemudi terdekat dengan pendekatan yang efisien, adaptif, dan adil',
    transparentRevenue: 'Struktur Pendapatan Transparan',
    transparentRevenueDesc: 'Model biaya yang jelas dan kompetitif — pengemudi mempertahankan hingga 92% dari setiap tarif, dengan hanya 8% biaya operasional tanpa potongan tersembunyi',
    incentiveLayer: 'Incentive Layer Berbasis Token',
    incentiveLayerDesc: 'Sistem insentif terotomatisasi yang memberikan reward dalam bentuk OJOL Coin berdasarkan performa, reputasi, dan tingkat kontribusi dalam jaringan',
    roadmapTitle: 'ROADMAP',
    phase1: 'Fase 1 — Foundation',
    phase1Status: 'Sedang Berjalan',
    phase1_1: 'Peluncuran website resmi & visi platform',
    phase1_2: 'Penerbitan OJOL Coin',
    phase1_3: 'Pembangunan komunitas awal',
    phase1_4: 'Inisiasi kemitraan strategis',
    phase1_5: 'Pembentukan tim inti',
    phase2: 'Fase 2 — Development',
    phase2Status: 'Akan Datang',
    phase2_1: 'Pengembangan aplikasi (driver & user)',
    phase2_2: 'Integrasi sistem AI Dispatch',
    phase2_3: 'Implementasi keamanan & kepatuhan',
    phase2_4: 'Peluncuran Interactive Product Preview',
    phase2_5: 'Community Feedback Loop',
    phase3: 'Fase 3 — Launch',
    phase3Status: 'Akan Datang',
    phase3_1: 'Peluncuran resmi platform',
    phase3_2: 'Rilis aplikasi pengemudi & penumpang',
    phase3_3: 'Operasional di pasar awal',
    phase3_4: 'Ekspansi ke kota utama',
    phase4: 'Fase 4 — Ecosystem Maturity',
    phase4Status: 'Akan Datang',
    phase4_1: 'Integrasi layanan finansial (OJOL Pay)',
    phase4_2: 'Staking & governance penuh',
    phase4_3: 'Ekspansi global',
    phase4_4: 'Open API untuk developer',
    phase5: 'Fase 5 — Expansion',
    phase5Status: 'Akan Datang',
    phase5_1: 'Ekspansi regional',
    phase5_2: 'Penambahan layanan dalam ekosistem',
    phase5_3: 'Peningkatan utilitas OJOL Coin',
    phase5_4: 'Skalabilitas dan pertumbuhan jaringan',
    whyChooseTitle: 'MENGAPA MEMILIH OJOL?',
    whyChooseDesc: 'Dengan biaya lebih rendah, AI cerdas, dan ekosistem berbasis token — OJOL membuka era baru mobilitas digital.',
    drivers: '4 Juta',
    driversLabel: 'Driver di Indonesia',
    users: '88,3 Juta',
    usersLabel: 'Pengguna di Indonesia',
    lowFee: '8%',
    lowFeeLabel: 'Biaya Terendah di Industri',
    followUs: 'Ikuti Kami',
    connect: 'Terhubung dengan komunitas kami',
    ctaTitle: 'Bergabung dengan Revolusi OJOL',
    ctaDesc: 'Jadilah bagian dari masa depan transportasi. Dapatkan akses awal dan reward eksklusif.',
    ctaButton: 'Gabung Akses Awal',
  },
  cn: {
    vision: '愿景',
    joinEarly: '提前加入',
    heroTitle: '交通的未来',
    heroSubtitle: '凭借低成本、智能AI和集成生态系统，OJOL在移动出行和数字经济中开辟新机遇。',
    viewVision: '查看愿景',
    joinEarlyAccess: '提前加入',
    featuresTitle: '核心功能',
    featuresSubtitle: '为现代时代打造',
    aiDispatch: 'AI调度系统',
    aiDispatchDesc: '智能匹配算法，即时连接乘客与最近司机',
    lowCost: '低成本',
    lowCostDesc: '8%运营费用——行业最低，确保司机公平收入',
    realTime: '实时追踪',
    realTimeDesc: '实时GPS追踪，准确ETA，路线优化和公平生态系统',
    securePayment: '安全支付',
    securePaymentDesc: '多种支付选项，基于区块链的安全保障',
    driverRewards: '司机奖励',
    driverRewardsDesc: '为忠诚司机和用户提供基于代币的奖励系统',
    support247: '24/7支持',
    support247Desc: '全天候客户和司机支持',
    tokenTitle: 'OJOL代币',
    tokenSubtitle: '有意义的奖励',
    tokenDesc: 'OJOL代币驱动我们的生态系统，为社区成员提供奖励、折扣和治理权。',
    tokenDriver: '司机奖励',
    tokenDriverDesc: '完成每次行程获得代币并获得奖励',
    tokenDiscount: '行程折扣',
    tokenDiscountDesc: '使用代币获得行程折扣',
    tokenGovernance: '治理',
    tokenGovernanceDesc: '基于平台决策',
    ecosystemTitle: '平台生态系统',
    rideHailing: '网约车',
    rideHailingDesc: '按需摩托车和汽车出行服务，AI匹配快速可靠接单',
    foodDelivery: '食品配送',
    foodDeliveryDesc: '本地餐厅食品饮料配送，集成在OJOL生态系统中',
    packageDelivery: '包裹配送',
    packageDeliveryDesc: '为全市个人和小型企业提供快速包裹和货物配送',
    rewardSystem: '奖励系统',
    rewardSystemDesc: '用户和司机因活动、评分、忠诚度自动获得基于代币的奖励',
    ojolPay: 'OJOL支付',
    ojolPayDesc: '集成数字金融服务，支持QRIS支付、银行间转账和使用OJOL Coin的即时交易，在一个安全、快速、高效的生态系统中。',
    coinUtilities: 'OJOL代币实用性',
    coinUtilitiesDesc: 'OJOL Coin驱动平台访问、优先匹配、质押和治理。基于实用性的代币',
    howItWorksTitle: '如何运作',
    howItWorksSubtitle: '智能、透明、去中心化的移动出行基础设施',
    onboarding: '司机入职',
    onboardingDesc: '通过快速注册和验证流程轻松加入，旨在确保生态系统质量和可靠性',
    coinAccess: '基于OJOL代币的访问',
    coinAccessDesc: 'OJOL Coin作为生态系统访问密钥——使司机能够以最佳和可持续的方式接受请求',
    aiDispatch: '智能AI调度',
    aiDispatchDesc: '基于AI的匹配引擎以高效、适应性和公平的方式实时将行程请求分配给最近的司机',
    transparentRevenue: '透明收入结构',
    transparentRevenueDesc: '清晰且有竞争力的费用模式——司机保留每次费用的92%，仅8%运营费用，无隐藏扣除',
    incentiveLayer: '基于代币的激励层',
    incentiveLayerDesc: '自动化激励系统，根据网络中的表现、声誉和贡献水平以OJOL Coin给予奖励',
    roadmapTitle: '路线图',
    phase1: '第一阶段——基础',
    phase1Status: '进行中',
    phase1_1: '官方网站发布和平台愿景',
    phase1_2: 'OJOL代币发行',
    phase1_3: '初期社区建设',
    phase1_4: '战略合作伙伴关系启动',
    phase1_5: '核心团队组建',
    phase2: '第二阶段——开发',
    phase2Status: '即将到来',
    phase2_1: '应用程序开发（司机和用户）',
    phase2_2: 'AI调度系统集成',
    phase2_3: '安全和合规实施',
    phase2_4: '交互式产品预览发布',
    phase2_5: '社区反馈循环',
    phase3: '第三阶段——发布',
    phase3Status: '即将到来',
    phase3_1: '平台正式发布',
    phase3_2: '司机和乘客应用程序发布',
    phase3_3: '在初期市场运营',
    phase3_4: '扩展到主要城市',
    phase4: '第四阶段——生态系统成熟',
    phase4Status: '即将到来',
    phase4_1: '金融服务集成（OJOL支付）',
    phase4_2: '完整质押和治理',
    phase4_3: '全球扩展',
    phase4_4: '开发者开放API',
    phase5: '第五阶段——扩展',
    phase5Status: '即将到来',
    phase5_1: '区域扩展',
    phase5_2: '添加生态系统服务',
    phase5_3: 'OJOL代币实用性提升',
    phase5_4: '网络可扩展性和增长',
    whyChooseTitle: '为什么选择OJOL？',
    whyChooseDesc: '凭借更低成本、智能AI和基于代币的生态系统——OJOL开启数字移动出行新时代。',
    drivers: '400万',
    driversLabel: '印尼司机',
    users: '8830万',
    usersLabel: '印尼用户',
    lowFee: '8%',
    lowFeeLabel: '行业最低费用',
    followUs: '关注我们',
    connect: '与我们的社区建立联系',
    ctaTitle: '加入OJOL革命',
    ctaDesc: '成为交通未来的组成部分。获得早期访问和独家奖励。',
    ctaButton: '提前加入',
  }
}

export default function Home() {
  const [lang, setLang] = useState<Language>('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    setWindowSize({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    })
    
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const t = translations[lang]

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden relative selection:bg-blue-500/30">
      {/* God-Level Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePos.x / windowSize.width * 100}% ${mousePos.y / windowSize.height * 100}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Multiple Animated Gradient Orbs */}
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-600/25 via-purple-600/15 to-transparent rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-gradient-to-bl from-cyan-600/20 via-blue-600/15 to-transparent rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[-5%] left-[25%] w-[55%] h-[55%] bg-gradient-to-tr from-indigo-600/20 via-violet-600/10 to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] bg-gradient-to-br from-violet-600/15 via-purple-600/10 to-transparent rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[50%] right-[15%] w-[35%] h-[35%] bg-gradient-to-bl from-pink-600/10 via-rose-600/5 to-transparent rounded-full blur-[110px] animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Premium Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-[#030712]/80 backdrop-blur-3xl border-b border-white/10 shadow-2xl shadow-blue-500/10' 
            : 'bg-[#030712]/60 backdrop-blur-2xl border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                <img
                  src="/ojol-logo.png"
                  alt="OJOL Logo"
                  className="relative w-full h-full object-contain mix-blend-screen p-2"
                  style={{
                    filter: 'brightness(1.25) contrast(1.15)',
                    background: 'transparent',
                    borderRadius: '0.75rem'
                  }}
                />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold tracking-tight block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                    OJOL
                  </span>
                </span>
                <span className="text-[8px] md:text-[10px] font-semibold tracking-[0.2em] md:tracking-[0.3em] text-blue-400/80 uppercase block hidden sm:block">Future of Mobility</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              {['features', 'token', 'ecosystem', 'roadmap'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="text-xs md:text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300 relative group py-2"
                >
                  {t[`${section === 'features' ? 'features' : section === 'token' ? 'token' : section === 'ecosystem' ? 'ecosystem' : 'roadmap'}${section === 'features' ? 'Title' : section === 'token' ? 'Title' : section === 'ecosystem' ? 'Title' : 'Title'}`]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
                {(['en', 'id', 'cn'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-bold rounded-full transition-all duration-300 ${
                      lang === l 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105' 
                        : 'text-slate-500 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 md:p-3 text-slate-400 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-xl"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#030712]/95 backdrop-blur-3xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {['features', 'token', 'ecosystem', 'roadmap'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="block text-base md:text-lg font-semibold text-slate-300 hover:text-white transition-all duration-300 py-3 hover:pl-4 border-l-2 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t[`${section === 'features' ? 'features' : section === 'token' ? 'token' : section === 'ecosystem' ? 'ecosystem' : 'roadmap'}${section === 'features' ? 'Title' : section === 'token' ? 'Title' : section === 'ecosystem' ? 'Title' : 'Title'}`]}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4">
                {(['en', 'id', 'cn'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 px-3 py-3 md:px-4 md:py-4 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 ${
                      lang === l 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' 
                        : 'bg-white/5 text-slate-500 hover:text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-40 md:pb-24 lg:pt-52 lg:pb-32 px-4 md:px-6 relative" ref={heroRef}>
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Crown Badge */}
            <div className="flex justify-center items-center mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border border-amber-500/30 backdrop-blur-sm group-hover:border-amber-400/50 transition-all duration-500 group-hover:scale-105">
                  <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-bold text-amber-200 tracking-wide">PREMIUM ECO</span>
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Main Logo */}
            <div className="flex justify-center items-center mb-12 md:mb-16 lg:mb-20">
              <div className="relative inline-block animate-float group">
                {/* Outer Circle Ring */}
                <div className="absolute inset-0 rounded-full border-4 bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-indigo-500/40 blur-[2px] animate-pulse"></div>
                <div className="absolute inset-[-8px] rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-[-16px] rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-cyan-600/40 to-indigo-600/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                
                {/* Particle Ring */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                      style={{
                        left: '50%',
                        top: '0%',
                        transform: `translateX(-50%) rotate(${i * 30}deg) translateY(-8px)`,
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Logo Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-500/10 border-3 border-blue-400/30 backdrop-blur-sm shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                  <img
                    src="/ojol-logo.png"
                    alt="OJOL Logo"
                    className="relative w-[80%] h-[80%] object-contain mix-blend-screen"
                    style={{
                      filter: 'brightness(1.25) contrast(1.15) saturate(1.35)',
                      background: 'transparent',
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 via-cyan-100 via-indigo-100 to-white bg-clip-text text-transparent animate-gradient-text">
                  {t.heroTitle}
                </span>
              </h1>
              <div className="flex justify-center items-center gap-4 mt-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <Wand2 className="w-6 h-6 text-cyan-400 animate-pulse" />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed font-light">
                {t.heroSubtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mb-12 md:mb-16 lg:mb-20 xl:mb-24">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-7 text-sm sm:text-base md:text-xl h-auto rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-500 animate-gradient border border-white/20 group"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  {t.viewVision}
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/5 border-2 border-white/20 text-white font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-7 text-sm sm:text-base md:text-xl h-auto rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-500 group"
                onClick={() => window.open('https://pump.fun', '_blank')}
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  {t.joinEarlyAccess}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[
                { value: t.drivers, label: t.driversLabel, icon: Users, gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20', iconGradient: 'from-blue-400 to-cyan-400' },
                { value: t.users, label: t.usersLabel, icon: Users, gradient: 'from-cyan-500/20 to-indigo-500/20', border: 'border-cyan-500/20', iconGradient: 'from-cyan-400 to-indigo-400' },
                { value: t.lowFee, label: t.lowFeeLabel, icon: TrendingUp, gradient: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20', iconGradient: 'from-indigo-400 to-purple-400' }
              ].map((stat, index) => (
                <div key={index} className={`group relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center mb-4 md:mb-6 shadow-lg md:shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 md:mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                <Gem className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  {t.featuresTitle}
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto">{t.featuresSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Cpu, title: t.aiDispatch, desc: t.aiDispatchDesc, gradient: 'from-blue-500/20 to-cyan-500/20', iconGradient: 'from-blue-500 to-cyan-500' },
              { icon: TrendingUp, title: t.lowCost, desc: t.lowCostDesc, gradient: 'from-green-500/20 to-emerald-500/20', iconGradient: 'from-green-500 to-emerald-500' },
              { icon: MapPin, title: t.realTime, desc: t.realTimeDesc, gradient: 'from-blue-500/20 to-indigo-500/20', iconGradient: 'from-blue-500 to-indigo-500' },
              { icon: Lock, title: t.securePayment, desc: t.securePaymentDesc, gradient: 'from-purple-500/20 to-pink-500/20', iconGradient: 'from-purple-500 to-pink-500' },
              { icon: Gift, title: t.driverRewards, desc: t.driverRewardsDesc, gradient: 'from-cyan-500/20 to-blue-500/20', iconGradient: 'from-cyan-500 to-blue-500' },
              { icon: HeadphonesIcon, title: t.support247, desc: t.support247Desc, gradient: 'from-indigo-500/20 to-purple-500/20', iconGradient: 'from-indigo-500 to-purple-500' }
            ].map((feature, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg md:shadow-xl shadow-blue-500/10">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-white text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed text-center">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Token Section */}
      <section id="token" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-indigo-500/15 rounded-full blur-[150px] md:blur-[200px] animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 animate-bounce">
                <Coins className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {t.tokenTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 mb-2 md:mb-4 font-medium">{t.tokenSubtitle}</p>
            <p className="text-slate-300 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg">{t.tokenDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-10 md:mb-12 lg:mb-16">
            {[
              { icon: Gift, title: t.tokenDriver, desc: t.tokenDriverDesc, gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20', iconGradient: 'from-blue-600 to-cyan-500' },
              { icon: TrendingUp, title: t.tokenDiscount, desc: t.tokenDiscountDesc, gradient: 'from-cyan-500/20 to-indigo-500/20', border: 'border-cyan-500/20', iconGradient: 'from-cyan-600 to-indigo-500' },
              { icon: Users, title: t.tokenGovernance, desc: t.tokenGovernanceDesc, gradient: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/20', iconGradient: 'from-indigo-600 to-purple-500' }
            ].map((item, index) => (
              <Card key={index} className={`group relative bg-gradient-to-br ${item.gradient} border ${item.border} backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.iconGradient} flex items-center justify-center mb-4 md:mb-8 mx-auto shadow-lg md:shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-slate-300 text-center text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="text-center relative">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 md:mb-8 mx-auto shadow-lg md:shadow-2xl shadow-indigo-500/40 group-hover:scale-110 transition-transform duration-500">
                  <Diamond className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{t.coinUtilities}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-slate-300 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {t.coinUtilitiesDesc}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                <Network className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                  {t.ecosystemTitle}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Car, title: t.rideHailing, desc: t.rideHailingDesc, gradient: 'from-blue-500/15 to-cyan-500/15' },
              { icon: Smartphone, title: t.foodDelivery, desc: t.foodDeliveryDesc, gradient: 'from-red-500/15 to-orange-500/15' },
              { icon: Package, title: t.packageDelivery, desc: t.packageDeliveryDesc, gradient: 'from-indigo-500/15 to-blue-500/15' },
              { icon: Star, title: t.rewardSystem, desc: t.rewardSystemDesc, gradient: 'from-yellow-500/15 to-orange-500/15' },
              { icon: Wallet, title: 'OJOL Pay', desc: t.ojolPayDesc, gradient: 'from-green-500/15 to-emerald-500/15', span: 2 }
            ].map((item, index) => (
              <Card key={index} className={`group relative bg-gradient-to-br ${item.gradient} border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden ${item.span ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* How It Works Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                <Infinity className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                  {t.howItWorksTitle}
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto">{t.howItWorksSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Users, title: t.onboarding, desc: t.onboardingDesc },
              { icon: Coins, title: t.coinAccess, desc: t.coinAccessDesc },
              { icon: Zap, title: t.aiDispatch, desc: t.aiDispatchDesc },
              { icon: TrendingUp, title: t.transparentRevenue, desc: t.transparentRevenueDesc },
              { icon: Gift, title: t.incentiveLayer, desc: t.incentiveLayerDesc }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="h-full bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 md:mb-6 shadow-lg md:shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 md:mb-4 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-blue-500/30 group-hover:text-blue-500/60 transition-colors" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">
                  {t.roadmapTitle}
                </span>
              </h2>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-5xl mx-auto">
            {[
              {
                phase: t.phase1,
                items: [t.phase1_1, t.phase1_2, t.phase1_3, t.phase1_4, t.phase1_5]
              },
              {
                phase: t.phase2,
                items: [t.phase2_1, t.phase2_2, t.phase2_3, t.phase2_4, t.phase2_5]
              },
              {
                phase: t.phase3,
                items: [t.phase3_1, t.phase3_2, t.phase3_3, t.phase3_4]
              },
              {
                phase: t.phase4,
                items: [t.phase4_1, t.phase4_2, t.phase4_3, t.phase4_4]
              },
              {
                phase: t.phase5,
                items: [t.phase5_1, t.phase5_2, t.phase5_3, t.phase5_4]
              }
            ].map((roadmapItem, index) => (
              <Card key={index} className="group relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/5 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-white">{roadmapItem.phase}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                    {roadmapItem.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 md:gap-3">
                        <span className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-t from-blue-600/15 to-transparent rounded-full blur-[100px] md:blur-[150px] animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 lg:mb-10">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                {t.whyChooseTitle}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto font-light">
              {t.whyChooseDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <Card className="relative bg-gradient-to-br from-blue-600/25 via-cyan-600/25 to-indigo-600/25 border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-50"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-blue-500/30 to-transparent rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-cyan-500/30 to-transparent rounded-full blur-[80px] md:blur-[120px]"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 md:mb-8 lg:mb-10 mx-auto shadow-lg md:shadow-2xl shadow-blue-500/50 animate-bounce">
                <Rocket className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">{t.ctaTitle}</CardTitle>
              <CardDescription className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">{t.ctaDesc}</CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white font-black px-8 md:px-12 lg:px-16 py-5 md:py-6 lg:py-8 text-base md:text-xl lg:text-2xl h-auto rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl shadow-blue-500/40 md:shadow-blue-500/50 hover:shadow-blue-500/60 md:hover:shadow-blue-500/70 hover:scale-105 transition-all duration-500 animate-gradient border border-white/30 group"
                onClick={() => window.open('https://pump.fun', '_blank')}
              >
                <span className="flex items-center gap-3 md:gap-4">
                  {t.ctaButton}
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030712]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-12 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 md:gap-4 lg:gap-5 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                  <img
                    src="/ojol-logo.png"
                    alt="OJOL Logo"
                    className="w-full h-full object-contain mix-blend-screen"
                    style={{
                      filter: 'brightness(1.25) contrast(1.15)',
                      background: 'transparent',
                      borderRadius: '0.75rem'
                    }}
                  />
                </div>
                <div>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent block">
                    OJOL
                  </span>
                  <span className="text-[8px] md:text-[9px] lg:text-[10px] font-semibold tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] text-blue-400/80 uppercase block hidden sm:block">Future of Mobility</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed">
                {t.whyChooseDesc}
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">{t.followUs}</h3>
              <p className="text-slate-400 text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">{t.connect}</p>
              <div className="flex gap-3 md:gap-4 lg:gap-5">
                <a
                  href="https://x.com/ojolasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-blue-500 group"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/+8wyXrTEEddc4OTA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-white/5 hover:bg-cyan-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-500 group"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.89z"/>
                  </svg>
                </a>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-green-500 group"
                >
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">{t.vision}</h3>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a href="#features" className="text-slate-400 hover:text-cyan-400 text-sm md:text-base lg:text-lg transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {t.featuresTitle}
                  </a>
                </li>
                <li>
                  <a href="#token" className="text-slate-400 hover:text-cyan-400 text-sm md:text-base lg:text-lg transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {t.tokenTitle}
                  </a>
                </li>
                <li>
                  <a href="#ecosystem" className="text-slate-400 hover:text-cyan-400 text-sm md:text-base lg:text-lg transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {t.ecosystemTitle}
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-slate-400 hover:text-cyan-400 text-sm md:text-base lg:text-lg transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {t.roadmapTitle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/5 mb-8" />

          <div className="text-center text-slate-500 text-xs md:text-sm lg:text-base">
            <p>© 2026 OJOL. All rights reserved. Powered by Innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
