"use client"

import React, { useState, useEffect } from 'react'
import QrCodeAboutDialog from "./QrCodeAboutDialog"
import QrCodeScannerDialog from "./QrCodeScannerDialog"
import QrCodeInfoDialog from "./QrCodeInfoDialog"
import { HiMiniQrCode } from "react-icons/hi2";
import { DataProps } from "./QrCodeScannerDialog"
import { Button } from "@/components/ui/button";
import { IoIosQrScanner } from "react-icons/io";

const QrCodeNavBar = () => {
  const [dataScan, setDataScan] = useState<DataProps | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    if (dataScan) {
      setIsInfoOpen(true)
      setIsScannerOpen(false)
    }
  }, [dataScan])

  const handleScannerClick = () => {
    setIsScannerOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <div className="mx-4 sm:mx-8 flex h-14 items-center">
          <div className="flex items-center space-x-4 lg:space-x-0 gap-2">
            <HiMiniQrCode size={32} />
            <h1 className="font-bold">QR-Generator</h1>
          </div>
          <div className="flex flex-1 items-center space-x-4 justify-end">
            <div className="flex items-center gap-4">
              <Button onClick={handleScannerClick}>
                <IoIosQrScanner size={20} />
                Qr-Scanner
              </Button>
              <QrCodeAboutDialog />
            </div>
          </div>
        </div>
      </header>
      <QrCodeScannerDialog setIsScannerOpen={setIsScannerOpen} isOpen={isScannerOpen} setDataScan={setDataScan} />
      <QrCodeInfoDialog setIsInfoOpen={setIsInfoOpen} isOpen={isInfoOpen} dataScan={dataScan} setIsScannerOpen={setIsScannerOpen} />
    </>
  )
}

export default QrCodeNavBar