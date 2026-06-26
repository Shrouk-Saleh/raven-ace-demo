// Mock Socket.io Client for Standalone Static Raven ACE Demo

const socket = {
  connected: true,
  auth: {},
  connect: () => { console.log('[Mock Socket] connect'); },
  disconnect: () => { console.log('[Mock Socket] disconnect'); },
  on: (event, cb) => { console.log(`[Mock Socket] on(${event})`); },
  off: (event, cb) => { console.log(`[Mock Socket] off(${event})`); },
  emit: (event, data) => { console.log(`[Mock Socket] emit(${event})`, data); },
};

export default socket;
