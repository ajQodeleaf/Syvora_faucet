"use client";

import "./globals.css";

import { SessionProvider } from "next-auth/react";

import Header from "../components/nav-bar/Header";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/toaster";
import { AuthProvider } from "../context/AuthContext";
import { ConfigProvider } from "../context/ConfigContext";
import { WalletProvider } from "../context/WalletContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-center items-center">
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConfigProvider>
              <WalletProvider>
                <AuthProvider>
                  <div className="relative flex h-screen w-screen items-center justify-center">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <span className="emoji absolute text-8xl transform animate-float1">
                        🤑
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float2">
                        💰
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float3">
                        💲
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float4">
                        💸
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float2">
                        🤑
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float3">
                        💰
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float1">
                        💸
                      </span>
                      <span className="emoji absolute text-8xl transform animate-float4">
                        💲
                      </span>
                    </div>
                  </div>
                  {children}
                  <Header />
                  <Toaster />
                </AuthProvider>
              </WalletProvider>
            </ConfigProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
