"use client"

import QrCodeTextForm from "./QrCodeTextForm"
import QrCodeUrlForm from "./QrCodeUrlForm"
import QrCodeEmailForm from "./QrCodeEmailForm"
import React, { useState } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Link, Mail, Type } from 'lucide-react'
import { Button } from "@/components/ui/button"

const QrCodeTabs = () => {
  const [qrCode, setQrCode] = useState("");

  const handleQrCodeDownloadClick = () => {
    if (qrCode) {
      const now = new Date();

      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;
      
      const formattedDate = `${month}/${day}/${year} time: ${hours}:${minutes} ${ampm}`;
      const link = document.createElement('a');
      link.href = qrCode;
      link.download = `qrcode-${formattedDate}.png`;
      link.click();
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 shadow-md">
          <CardContent className="p-6">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Text
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  URL
                </TabsTrigger>
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </TabsTrigger>
              </TabsList>
              <TabsContent value="text" className="space-y-4">
                <div className="space-y-2">
                  <QrCodeTextForm setQrCode={setQrCode} />
                </div>
              </TabsContent>
              <TabsContent value="url" className="space-y-4">
                <div className="space-y-2">
                  <QrCodeUrlForm setQrCode={setQrCode} />
                </div>
              </TabsContent>
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <QrCodeEmailForm setQrCode={setQrCode} />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className=" h-fit col-span-1 shadow-md">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-64 h-64 flex shadow-sm border items-center justify-center rounded-lg">
              {qrCode ? (
                <img src={qrCode} />
              ) : (
                <p>Preview</p>
              )}
            </div>
            {qrCode && (
              <Button className="mt-4" onClick={handleQrCodeDownloadClick}>
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QrCodeTabs