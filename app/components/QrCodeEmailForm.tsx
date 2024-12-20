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
import { Input } from "@/components/ui/input"

const QrCodeTextformSchema = z.object({
    email: z.string().min(2).max(50),
    subject: z.string().min(2).max(50),
    message: z.string().min(2).max(200),
  })

const QrCodeEmailForm = () => {
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email Subject"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Email body..."
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

export default QrCodeEmailForm