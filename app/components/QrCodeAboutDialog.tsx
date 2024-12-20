import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiOutlinePaintBrush, HiOutlineBolt, HiOutlineQrCode, HiOutlineLockClosed } from "react-icons/hi2";

const QrCodeAboutDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">About</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>About the Page</DialogTitle>
          </DialogHeader>
          <div className=" py-4">
            <div>
              <p className="text-3xl font-semibold mb-4">Scan and Create Any QR Code in Seconds</p>
              <p className="text-lg mb-6">
                DIT-QR is your go-to web Application for quickly and securely generating and scanning
                any QR Code, Whether for accessing Websites, Creating text and sending email, Our system
                got your covered.
              </p>
            </div>
            <Tabs defaultValue="features" className="mb-12">
              <TabsList>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="how-it-works">How it works</TabsTrigger>
                <TabsTrigger value="information">Information</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>
              <TabsContent value="features">
                <Card>
                  <CardHeader>
                    <CardTitle>Features</CardTitle>
                    <CardDescription>Some of the key feature of the web Application</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <HiOutlineBolt size={20}/>
                      <span>Lightning fast QR Scanning and Generation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiOutlineLockClosed size={20}/> 
                      <span>Secure and Private</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiOutlinePaintBrush size={20}/>
                      <span>Customizable QR codes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HiOutlineQrCode size={20}/>
                      <span>Supports all QR Code Types</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="how-it-works">
                <Card>
                  <CardHeader>
                    <CardTitle>How it works</CardTitle>
                    <CardDescription>A simple guide on how to use the web Application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Open the QR Code Web application.</li>
                      <li>Click the Qr Code Scanner button to scan any QR Code.</li>
                      <li>If you want to generate a QR Code, Choose the method of QR you want to generate.</li>
                      <li>Once you selected your method, Fill in the given field, and submit your response.</li>
                      <li>The QR-Code will be provided in the preview spot.</li>
                      <li>Download the QR Code and enjoy!</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="information">
                <Card>
                  <CardHeader>
                    <CardTitle>Information</CardTitle>
                    <CardDescription>About the DIT-QR Web Application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        DIT-QR is developed by a group of student in the course of DIT 1-4 of Polytechnic University
                        of the Phlippines with the use of Next.JS to deliver a responsive and dynamic User interface, 
                        and Flask as the backend, handling the server-side logic and QR Code processing with Python.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent> 
              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy First</CardTitle>
                    <CardDescription>Your Data stays private and safe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                     At DIT QR, Your privacy is our priority. Any data you generate or scan using 
                     this application will be securely stored and accessible only to you. We ensure that your 
                     information will not be shared, leaked, or used by others under any circumstances.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QrCodeAboutDialog