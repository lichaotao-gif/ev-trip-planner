'use client';

import { createContext, useContext, useState } from 'react';
import { mockUser, mockTrips, getTripById } from '@/lib/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(null); // 未登录为 null，演示可设为 mockUser
  const [savedTripIds, setSavedTripIds] = useState(mockUser.savedTripIds || []);
  const [lastGeneratedTripId, setLastGeneratedTripId] = useState('t1'); // 最近生成/查看的行程

  const savedTrips = savedTripIds.map((id) => getTripById(id)).filter(Boolean);

  const isSaved = (tripId) => savedTripIds.includes(tripId);

  const saveTrip = (tripId) => {
    if (!savedTripIds.includes(tripId)) {
      setSavedTripIds((prev) => [...prev, tripId]);
    }
  };

  const unsaveTrip = (tripId) => {
    setSavedTripIds((prev) => prev.filter((id) => id !== tripId));
  };

  const login = (emailOrPhone, password) => {
    setUser(mockUser);
    return true;
  };

  const logout = () => setUser(null);

  const register = (emailOrPhone, password, nickname) => {
    setUser({ ...mockUser, nickname: nickname || 'EV 旅行者' });
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        savedTripIds,
        savedTrips,
        lastGeneratedTripId,
        setLastGeneratedTripId,
        isSaved,
        saveTrip,
        unsaveTrip,
        login,
        logout,
        register,
        allTrips: mockTrips,
        getTripById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
