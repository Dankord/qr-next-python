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

const QrCodeTextformSchema = z.object({
  text: z.string().min(2).max(100),
})

const QrCodeTextForm = () => {
  const form = useForm<z.infer<typeof QrCodeTextformSchema>>({
    resolver: zodResolver(QrCodeTextformSchema),
  })

  const onSubmit = async (data: z.infer<typeof QrCodeTextformSchema>) => {
    console.log(data)
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