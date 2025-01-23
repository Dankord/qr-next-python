"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer"
// @ts-expect-error This is working Just a typescript error
import QrReader from "react-qr-scanner";
import { useMediaQuery } from "@/hooks/use-media-query"

export interface DataProps {
  text: string;
}

interface QrCodeScannerProps {
  setIsScannerOpen: (isOpen: boolean) => void
  isOpen: boolean
  setDataScan: (dataScan: DataProps | null) => void
}

const QrCodeScannerDialog: React.FC<QrCodeScannerProps> = ({ setIsScannerOpen, isOpen, setDataScan }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleScan = (detectCodes: DataProps | null) => {
    if (!detectCodes || !detectCodes.text) {
      console.log("No valid QR code detected.");
      return;
    }
    setDataScan(detectCodes);

    if (detectCodes.text.startsWith("mailto:")) {
      window.location.href = detectCodes.text;
    } else {
      console.log("Scanned QR code is not a mailto link:", detectCodes.text);
    }
  };

  const handleError = (err: unknown) => {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred.");
    }
  };
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsScannerOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <div className="pt-5">
            <QrReader
              onScan={handleScan}
              onError={handleError}
              style={{
                width: "100%",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={isOpen} onOpenChange={setIsScannerOpen}>
      <DrawerContent>
        <div className="pt-5">
          <QrReader
            onScan={handleScan}
            onError={handleError}
            style={{
              width: "100%",
            }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
};

export default QrCodeScannerDialog;
