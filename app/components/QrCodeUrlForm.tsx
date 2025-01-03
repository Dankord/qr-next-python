import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const QrCodeUrlformSchema = z.object({
  url: z.string().min(2).max(200),
  color: z.string().optional(),
  bgColor: z.string().optional(),
})

interface QrCodeUrlFormProps {
  setQrCode: (qrCode: string) => void;
}

const QrCodeUrlForm: React.FC<QrCodeUrlFormProps> = ({ setQrCode }) => {
  const form = useForm<z.infer<typeof QrCodeUrlformSchema>>({
    resolver: zodResolver(QrCodeUrlformSchema),
  })

  const onSubmit = async (data: z.infer<typeof QrCodeUrlformSchema>) => {
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(`${url}/api/qr/url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataResponse = await response.blob()
      const qrUrl = URL.createObjectURL(dataResponse)
      setQrCode(qrUrl);
      console.log(dataResponse);

      toast({
        title: 'QR Code is Created',
        description: 'Your QR has been created.',
      })
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to create QR Code.',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Removed the customizable feature due to scanner bug */}

        {/* <div className="flex items-center">
          <p className="text-sm font-bold">Customization:</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-5">
          <div>
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a color for your QR" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="black">Default</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="pink">Pink</SelectItem>
                      <SelectItem value="brown">Brown</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="bgColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background Color</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a background color for your QR" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="white">Default</SelectItem>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="pink">Pink</SelectItem>
                      <SelectItem value="brown">Brown</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}
        <Button type="submit">Generate QR Code</Button>
      </form>
    </Form>
  )
}

export default QrCodeUrlForm