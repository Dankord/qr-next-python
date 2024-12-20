import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataProps } from "./QrCodeScannerDialog"

interface QrCodeInfoDialogProps {
  setIsInfoOpen: (isOpen: boolean) => void
  isOpen: boolean
  dataScan: DataProps|null
}

const QrCodeInfoDialog: React.FC<QrCodeInfoDialogProps> = ({ setIsInfoOpen, isOpen, dataScan }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsInfoOpen}>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Scanned Data</DialogTitle>
      </DialogHeader>
        <div className="mt-5">
          <div className="flex items-center justify-center border p-7">
          <p className="text-lg">
             {dataScan?.text}
          </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QrCodeInfoDialog