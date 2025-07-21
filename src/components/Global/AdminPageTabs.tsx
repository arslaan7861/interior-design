"use client";
import React from "react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Package,
  Home,
  MessageSquare,
  ImageIcon,
  BarChart3,
  TrendingUp,
} from "lucide-react";

function AdminPageTabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      {/* ========== RESPONSIVE DASHBOARD NAVIGATION ========== */}
      <div className="space-y-4">
        {/* Mobile Dropdown Navigation */}
        <div className="block lg:hidden">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-full">
              <SelectValue>
                <div className="flex items-center gap-2">
                  {activeTab === "overview" && (
                    <>
                      <BarChart3 className="h-4 w-4" />
                      Overview
                    </>
                  )}
                  {activeTab === "furniture" && (
                    <>
                      <Package className="h-4 w-4" />
                      Furniture
                    </>
                  )}
                  {activeTab === "projects" && (
                    <>
                      <Home className="h-4 w-4" />
                      Projects
                    </>
                  )}
                  {activeTab === "testimonials" && (
                    <>
                      <MessageSquare className="h-4 w-4" />
                      Testimonials
                    </>
                  )}
                  {activeTab === "gallery" && (
                    <>
                      <ImageIcon className="h-4 w-4" />
                      Gallery
                    </>
                  )}
                  {activeTab === "analytics" && (
                    <>
                      <TrendingUp className="h-4 w-4" />
                      Analytics
                    </>
                  )}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="furniture">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Furniture
                </div>
              </SelectItem>
              <SelectItem value="projects">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Projects
                </div>
              </SelectItem>
              <SelectItem value="testimonials">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Testimonials
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Desktop Full Navigation */}
        <div className="hidden lg:block">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="furniture" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Furniture
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Testimonials
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      {children}
    </Tabs>
  );
}

export default AdminPageTabs;
