/**
 * 前端数据类型定义，便于后续接 API 时对齐
 */

/** @typedef {'charging' | 'food' | 'sight' | 'hotel'} PoiType */

/**
 * @typedef {Object} Poi
 * @property {string} id
 * @property {string} name
 * @property {PoiType} type
 * @property {number} lat
 * @property {number} lng
 * @property {string} address
 * @property {string} [description]
 * @property {string} [recommendReason]
 * @property {number} [stayDuration] 建议停留时长(分钟)
 * @property {number} [distanceFromRoute] 距路线距离(km)
 * @property {number} day 所属第几天
 */

/**
 * @typedef {Object} ItineraryDay
 * @property {number} day
 * @property {string} date
 * @property {string} route
 * @property {number} driveKm
 * @property {number} driveMinutes
 * @property {string[]} chargeStops
 * @property {string[]} sights
 * @property {string[]} foods
 * @property {string} [hotel]
 * @property {Poi[]} [pois]
 */

/**
 * @typedef {Object} ExpenseItem
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {number} amount
 * @property {number} [percent]
 */

/**
 * @typedef {Object} Trip
 * @property {string} tripId
 * @property {string} title
 * @property {string} origin
 * @property {string} destination
 * @property {number} days
 * @property {number} totalDistance
 * @property {number} totalDriveTime
 * @property {number} totalChargeStops
 * @property {number} estimatedCost
 * @property {ItineraryDay[]} itineraryDays
 * @property {Poi[]} poiList
 * @property {ExpenseItem[]} expenses
 * @property {'draft' | 'upcoming' | 'ongoing' | 'completed'} status
 * @property {'tesla' | 'other'} vehicleType
 * @property {string} [startDate]
 * @property {string} [createdAt]
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} nickname
 * @property {string} [avatar]
 * @property {string} [vehicleType]
 * @property {string[]} [savedTripIds]
 */

export const POI_TYPE_LABELS = {
  charging: '充电站',
  food: '美食',
  sight: '景点',
  hotel: '酒店',
};
