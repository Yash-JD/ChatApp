import React from 'react';
import { Button } from '@/components/ui/button';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import Chat from './pages/chat';
import Profile from './pages/profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

// https://gist.github.com/koolkishan/8b590127ab27e3bdea1f39649f3ee8e9
// https://gist.github.com/koolkishan/b186b8eab5dbbaee383fd8f79f25eca9