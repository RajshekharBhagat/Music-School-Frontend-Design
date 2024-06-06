"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

function Page() {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
    message: z.string().min(30, { message: "Message must be at least 30 characters long" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  
  const onSave = (data: FormData) => {
    console.log(data);
  };
  
  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-400 mt-6 text-center">
          We are here to help with any question related to our courses, program,
          or events. We are here to assist you in your musical journey.
        </p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className="space-y-5 mt-5 p-5 md:p-10">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Email" className="bg-gray-950 text-neutral-300" />
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
                    <FormControl>
                      <Input {...field} placeholder="Your message" className="bg-gray-950 text-neutral-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-gray-900 cursor-pointer text-neutral-300 hover:bg-gray-800" type="submit">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Page;
