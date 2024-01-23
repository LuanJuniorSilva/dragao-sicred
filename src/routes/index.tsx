import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { 
  ConfigPage,
  DashboardPage,
  DragonPage,
  DragonsPage,
  SignInPage,
  FormEditPage } from '../pages'
import { PrivateRoute } from './PrivateRoute'

const Router = () => (
  <Routes>
    <Route 
    path="/login"
    element={
      <SignInPage />
    }
    />

    <Route 
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>} 
    />
     <Route 
      path="/dragons"
      element={
        <PrivateRoute>
          <DragonsPage />
        </PrivateRoute>} 
    />
     <Route 
      path="/dragon/:id"
      element={
        <PrivateRoute>
          <DragonPage />
        </PrivateRoute>} 
    />
     <Route 
      path="/form"
      element={
        <PrivateRoute>
          <FormEditPage />
        </PrivateRoute>} 
    />
     <Route 
      path="/form/:id"
      element={
        <PrivateRoute>
          <FormEditPage />
        </PrivateRoute>} 
    />
     <Route 
      path="/config"
      element={
        <PrivateRoute>
          <ConfigPage />
        </PrivateRoute>} 
    />
    <Route path="/" element={(<Navigate to="/login" />)} />
  </Routes>
)

export default Router
