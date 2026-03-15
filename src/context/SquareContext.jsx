'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useApp } from '@/context/AppContext';
import {
  mockSquarePosts,
  getSquarePostById as getPostByIdStatic,
  getTripById,
} from '@/lib/mockData';

const SquareContext = createContext(null);

export function SquareProvider({ children }) {
  const { user, saveTrip } = useApp();
  const currentUserId = user?.id || null;

  const [posts, setPosts] = useState(() =>
    mockSquarePosts.map((p) => ({
      ...p,
      comments: [...(p.comments || [])],
      companionRequests: [...(p.companionRequests || [])],
    }))
  );

  const getSquarePostById = useCallback(
    (postId) => posts.find((p) => p.postId === postId) || getPostByIdStatic(postId),
    [posts]
  );

  const likePost = useCallback(
    (postId) => {
      if (!currentUserId) return;
      setPosts((prev) =>
        prev.map((p) => {
          if (p.postId !== postId) return p;
          const liked = p.likedByUserIds?.includes(currentUserId);
          return {
            ...p,
            likedByUserIds: liked
              ? (p.likedByUserIds || []).filter((id) => id !== currentUserId)
              : [...(p.likedByUserIds || []), currentUserId],
            likeCount: (p.likeCount || 0) + (liked ? -1 : 1),
          };
        })
      );
    },
    [currentUserId]
  );

  const collectPost = useCallback(
    (postId) => {
      if (!currentUserId) return;
      setPosts((prev) =>
        prev.map((p) => {
          if (p.postId !== postId) return p;
          const collected = p.collectedByUserIds?.includes(currentUserId);
          return {
            ...p,
            collectedByUserIds: collected
              ? (p.collectedByUserIds || []).filter((id) => id !== currentUserId)
              : [...(p.collectedByUserIds || []), currentUserId],
            collectCount: (p.collectCount || 0) + (collected ? -1 : 1),
          };
        })
      );
    },
    [currentUserId]
  );

  const addComment = useCallback(
    (postId, content) => {
      const nickname = user?.nickname || '游客';
      const newComment = {
        id: `c-${Date.now()}`,
        userId: currentUserId,
        nickname,
        content,
        createdAt: new Date().toISOString(),
      };
      setPosts((prev) =>
        prev.map((p) => {
          if (p.postId !== postId) return p;
          return {
            ...p,
            comments: [...(p.comments || []), newComment],
            commentCount: (p.commentCount || 0) + 1,
          };
        })
      );
    },
    [currentUserId, user?.nickname]
  );

  const addCompanionRequest = useCallback(
    (postId, message) => {
      const nickname = user?.nickname || '游客';
      const newReq = {
        id: `cr-${Date.now()}`,
        userId: currentUserId,
        nickname,
        message,
        createdAt: new Date().toISOString(),
      };
      setPosts((prev) =>
        prev.map((p) => {
          if (p.postId !== postId) return p;
          return {
            ...p,
            companionRequests: [...(p.companionRequests || []), newReq],
            companionCount: (p.companionCount || 0) + 1,
          };
        })
      );
    },
    [currentUserId, user?.nickname]
  );

  const reuseTrip = useCallback(
    (postId) => {
      const post = posts.find((p) => p.postId === postId);
      if (!post?.tripId) return false;
      saveTrip(post.tripId);
      return post.tripId;
    },
    [posts, saveTrip]
  );

  const publishToSquare = useCallback(
    (tripId) => {
      if (!currentUserId || !user?.nickname) return null;
      const trip = getTripById(tripId);
      if (!trip) return null;
      const newPost = {
        postId: `sp-${Date.now()}`,
        tripId,
        author: { id: user.id, nickname: user.nickname, avatar: user.avatar },
        publishedAt: new Date().toISOString(),
        likeCount: 0,
        collectCount: 0,
        commentCount: 0,
        companionCount: 0,
        likedByUserIds: [],
        collectedByUserIds: [],
        comments: [],
        companionRequests: [],
      };
      setPosts((prev) => [newPost, ...prev]);
      return newPost.postId;
    },
    [currentUserId, user]
  );

  const squarePosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <SquareContext.Provider
      value={{
        squarePosts,
        getSquarePostById,
        likePost,
        collectPost,
        addComment,
        addCompanionRequest,
        reuseTrip,
        publishToSquare,
        currentUserId,
      }}
    >
      {children}
    </SquareContext.Provider>
  );
}

export function useSquare() {
  const ctx = useContext(SquareContext);
  if (!ctx) throw new Error('useSquare must be used within SquareProvider');
  return ctx;
}
