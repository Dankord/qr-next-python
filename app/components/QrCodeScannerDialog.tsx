"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// @ts-expect-error This is working Just a typescript error
import QrReader from "react-qr-scanner";

export interface DataProps {
  text: string;
}

interface QrCodeScannerProps {
  setIsScannerOpen: (isOpen: boolean) => void
  isOpen:boolean
  setDataScan: (dataScan: DataProps | null) => void
}

const QrCodeScannerDialog: React.FC<QrCodeScannerProps> = ({ setIsScannerOpen, isOpen, setDataScan }) => {

const handleScan = (detectCodes: DataProps | null) => {
  console.log(detectCodes)
    if (detectCodes) {
      setDataScan(detectCodes)
    }
  };

  const handleError = (err: unknown) => {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsScannerOpen}>
      <DialogContent className="sm:max-w-[700px]">
        <QrReader
          onScan={handleScan}
          onError={handleError}
          style={{ 
            width: "100%",
           }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default QrCodeScannerDialog;
