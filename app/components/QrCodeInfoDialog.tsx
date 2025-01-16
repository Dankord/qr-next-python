import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataProps } from "./QrCodeScannerDialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface QrCodeInfoDialogProps {
  setIsInfoOpen: (isOpen: boolean) => void
  isOpen: boolean
  dataScan: DataProps | null
  setIsScannerOpen: (isScannerOpen: boolean) => void
}

const QrCodeInfoDialog: React.FC<QrCodeInfoDialogProps> = ({ setIsInfoOpen, isOpen, dataScan, setIsScannerOpen }) => {
  const { toast } = useToast()

  const handleScanAgainClick = () => {
    setIsScannerOpen(true)
    setIsInfoOpen(false)
  }

  const handleCopyToClipboardClick = () => {
    if (dataScan?.text) {
      navigator.clipboard
        .writeText(dataScan.text)
        .then(() => {
          toast({
            title: "Copied to Clipboard",
            description: "You have copied the data to your clipboard",
          })
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
          alert('Failed to copy text.');
        });
    } else {
      toast({
        title: "No Data Copied",
        description: "No Data has been copied",
      })
    }
  };

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
          <div className="flex justify-center gap-5 items-center pt-5">
            <Button onClick={handleScanAgainClick}>
              Scan Again
            </Button>
            <Button onClick={handleCopyToClipboardClick}>
              Copy to Clipboard
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QrCodeInfoDialog