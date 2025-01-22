"use client"
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
import { Textarea } from "@/components/ui/textarea"

interface QrCodeTextFormProps {
  setQrCode: (qrCode: string) => void;
}

const QrCodeTextformSchema = z.object({
  text: z.string().min(2).max(500),
})

const QrCodeTextForm: React.FC<QrCodeTextFormProps> = ({ setQrCode }) => {
  const form = useForm<z.infer<typeof QrCodeTextformSchema>>({
    resolver: zodResolver(QrCodeTextformSchema),
  })

  const onSubmit = async (data: z.infer<typeof QrCodeTextformSchema>) => {
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(`${url}/api/qr/text`, {
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
      const qrText = URL.createObjectURL(dataResponse)
      setQrCode(qrText);
      console.log(dataResponse);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Text</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your text here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Generate QR Code</Button>
      </form>
    </Form>
  )
}

export default QrCodeTextForm