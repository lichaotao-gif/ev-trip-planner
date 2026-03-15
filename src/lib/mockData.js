/**
 * 前端演示用 mock 数据，结构预留后续接 API
 */

const now = new Date();
const fmt = (d) => d.toISOString().slice(0, 10);

export const mockUser = {
  id: 'u1',
  nickname: 'EV 旅行者',
  avatar: null,
  vehicleType: 'tesla',
  savedTripIds: ['t1', 't2'],
};

export const mockTrips = [
  {
    tripId: 't1',
    title: '北京 → 上海 五日自驾',
    origin: '北京',
    destination: '上海',
    days: 5,
    totalDistance: 1280,
    totalDriveTime: 680,
    totalChargeStops: 4,
    estimatedCost: 6820,
    status: 'upcoming',
    vehicleType: 'tesla',
    startDate: '2025-04-01',
    createdAt: fmt(now),
    itineraryDays: [
      {
        day: 1,
        date: '2025-04-01',
        route: '北京 → 天津 → 沧州',
        driveKm: 280,
        driveMinutes: 200,
        chargeStops: ['沧州特斯拉超充站'],
        sights: ['天津意式风情区', '古文化街', '海河夜景'],
        foods: ['狗不理包子', '煎饼果子'],
        hotel: '沧州希尔顿欢朋酒店',
        pois: [
          { id: 'p1', name: '沧州特斯拉超充站', type: 'charging', lat: 38.3, lng: 116.8, address: '沧州市运河区', recommendReason: '顺路补能，约 30 分钟', stayDuration: 30, distanceFromRoute: 0, day: 1 },
          { id: 'p2', name: '天津意式风情区', type: 'sight', lat: 39.14, lng: 117.2, address: '天津市河北区', recommendReason: '拍照打卡', stayDuration: 90, distanceFromRoute: 2, day: 1 },
          { id: 'p3', name: '狗不理包子', type: 'food', lat: 39.12, lng: 117.18, address: '天津市和平区', recommendReason: '老字号', stayDuration: 60, distanceFromRoute: 1, day: 1 },
          { id: 'p4', name: '沧州希尔顿欢朋酒店', type: 'hotel', lat: 38.32, lng: 116.85, address: '沧州市运河区', recommendReason: '含早、有充电', stayDuration: 0, distanceFromRoute: 0, day: 1 },
        ],
      },
      {
        day: 2,
        date: '2025-04-02',
        route: '沧州 → 济南',
        driveKm: 260,
        driveMinutes: 190,
        chargeStops: ['济南经十路超充'],
        sights: ['趵突泉', '大明湖', '宽厚里'],
        foods: ['把子肉', '甜沫'],
        hotel: '济南泉城大酒店',
        pois: [
          { id: 'p5', name: '济南经十路超充', type: 'charging', lat: 36.65, lng: 117.06, address: '济南市历下区', recommendReason: '市区方便', stayDuration: 35, distanceFromRoute: 0, day: 2 },
          { id: 'p6', name: '趵突泉', type: 'sight', lat: 36.66, lng: 117.02, address: '济南市历下区', recommendReason: '天下第一泉', stayDuration: 120, distanceFromRoute: 3, day: 2 },
          { id: 'p7', name: '把子肉', type: 'food', lat: 36.66, lng: 117.0, address: '济南市', recommendReason: '本地特色', stayDuration: 45, distanceFromRoute: 2, day: 2 },
          { id: 'p8', name: '济南泉城大酒店', type: 'hotel', lat: 36.67, lng: 117.05, address: '济南市历下区', recommendReason: '近景区', stayDuration: 0, distanceFromRoute: 0, day: 2 },
        ],
      },
      {
        day: 3,
        date: '2025-04-03',
        route: '济南 → 徐州',
        driveKm: 320,
        driveMinutes: 220,
        chargeStops: ['徐州万达超充'],
        sights: ['云龙湖', '户部山'],
        foods: ['地锅鸡', '羊肉汤'],
        hotel: '徐州苏宁凯悦',
        pois: [
          { id: 'p9', name: '徐州万达超充', type: 'charging', lat: 34.2, lng: 117.18, address: '徐州市云龙区', recommendReason: '商场旁', stayDuration: 40, distanceFromRoute: 0, day: 3 },
          { id: 'p10', name: '云龙湖', type: 'sight', lat: 34.22, lng: 117.15, address: '徐州市', recommendReason: '湖景', stayDuration: 90, distanceFromRoute: 2, day: 3 },
          { id: 'p11', name: '地锅鸡', type: 'food', lat: 34.21, lng: 117.17, address: '徐州市', recommendReason: '必吃', stayDuration: 60, distanceFromRoute: 1, day: 3 },
          { id: 'p12', name: '徐州苏宁凯悦', type: 'hotel', lat: 34.2, lng: 117.19, address: '徐州市', recommendReason: '市中心', stayDuration: 0, distanceFromRoute: 0, day: 3 },
        ],
      },
      {
        day: 4,
        date: '2025-04-04',
        route: '徐州 → 南京',
        driveKm: 220,
        driveMinutes: 160,
        chargeStops: ['南京江宁超充'],
        sights: ['夫子庙', '玄武湖'],
        foods: ['鸭血粉丝汤', '盐水鸭'],
        hotel: '南京金陵饭店',
        pois: [
          { id: 'p13', name: '南京江宁超充', type: 'charging', lat: 31.95, lng: 118.83, address: '南京市江宁区', recommendReason: '下高速即达', stayDuration: 30, distanceFromRoute: 0, day: 4 },
          { id: 'p14', name: '夫子庙', type: 'sight', lat: 32.02, lng: 118.78, address: '南京市秦淮区', recommendReason: '夜游', stayDuration: 120, distanceFromRoute: 5, day: 4 },
          { id: 'p15', name: '鸭血粉丝汤', type: 'food', lat: 32.03, lng: 118.77, address: '南京市', recommendReason: '经典', stayDuration: 45, distanceFromRoute: 2, day: 4 },
          { id: 'p16', name: '南京金陵饭店', type: 'hotel', lat: 32.04, lng: 118.78, address: '南京市鼓楼区', recommendReason: '地标', stayDuration: 0, distanceFromRoute: 0, day: 4 },
        ],
      },
      {
        day: 5,
        date: '2025-04-05',
        route: '南京 → 上海',
        driveKm: 200,
        driveMinutes: 150,
        chargeStops: [],
        sights: ['外滩', '陆家嘴'],
        foods: ['小笼包', '本帮菜'],
        hotel: null,
        pois: [
          { id: 'p17', name: '外滩', type: 'sight', lat: 31.24, lng: 121.49, address: '上海市黄浦区', recommendReason: '必到', stayDuration: 90, distanceFromRoute: 0, day: 5 },
          { id: 'p18', name: '小笼包', type: 'food', lat: 31.23, lng: 121.48, address: '上海市', recommendReason: '南翔小笼', stayDuration: 50, distanceFromRoute: 1, day: 5 },
        ],
      },
    ],
    poiList: [], // 下面合并
    expenses: [
      { id: 'e1', name: '住宿', icon: 'hotel', amount: 2400, percent: 35 },
      { id: 'e2', name: '充电', icon: 'charging', amount: 580, percent: 9 },
      { id: 'e3', name: '高速', icon: 'road', amount: 640, percent: 9 },
      { id: 'e4', name: '餐饮', icon: 'food', amount: 750, percent: 11 },
      { id: 'e5', name: '门票', icon: 'ticket', amount: 600, percent: 9 },
      { id: 'e6', name: '其他', icon: 'other', amount: 1850, percent: 27 },
    ],
  },
  {
    tripId: 't2',
    title: '上海周末 杭州两日',
    origin: '上海',
    destination: '杭州',
    days: 2,
    totalDistance: 360,
    totalDriveTime: 240,
    totalChargeStops: 1,
    estimatedCost: 2180,
    status: 'completed',
    vehicleType: 'tesla',
    startDate: '2025-03-08',
    createdAt: '2025-03-01',
    itineraryDays: [
      { day: 1, date: '2025-03-08', route: '上海 → 杭州', driveKm: 180, driveMinutes: 120, chargeStops: ['嘉兴服务区超充'], sights: ['西湖', '雷峰塔'], foods: ['西湖醋鱼', '龙井虾仁'], hotel: '杭州西湖国宾馆', pois: [] },
      { day: 2, date: '2025-03-09', route: '杭州 → 上海', driveKm: 180, driveMinutes: 120, chargeStops: [], sights: ['灵隐寺'], foods: ['片儿川'], hotel: null, pois: [] },
    ],
    poiList: [],
    expenses: [
      { id: 'e1', name: '住宿', icon: 'hotel', amount: 800, percent: 37 },
      { id: 'e2', name: '充电', icon: 'charging', amount: 120, percent: 5 },
      { id: 'e3', name: '高速', icon: 'road', amount: 180, percent: 8 },
      { id: 'e4', name: '餐饮', icon: 'food', amount: 420, percent: 19 },
      { id: 'e5', name: '门票', icon: 'ticket', amount: 260, percent: 12 },
      { id: 'e6', name: '其他', icon: 'other', amount: 400, percent: 19 },
    ],
  },
];

// 为 t1 合并所有天的 pois 到 poiList
mockTrips[0].poiList = mockTrips[0].itineraryDays.flatMap((d) => (d.pois || []));

export const mockRecommendedRoutes = [
  { id: 'r1', origin: '北京', destination: '北戴河', days: 2, tag: '周末短途' },
  { id: 'r2', origin: '上海', destination: '千岛湖', days: 3, tag: '热门路线' },
  { id: 'r3', origin: '广州', destination: '桂林', days: 4, tag: '长途自驾' },
];

export function getTripById(tripId) {
  return mockTrips.find((t) => t.tripId === tripId) || null;
}

export function getExpensesByTripId(tripId) {
  const trip = getTripById(tripId);
  return trip ? trip.expenses : [];
}
