'use client'
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { z } from "zod";
import { useForm } from "react-hook-form";

function page() {

    const formSchema = z.object({
        email: z.string({
            required_error:'Email is required'
        }),
        message: z.string().min(30, 'Message must me 30 character long'),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
        resolver: zodR
    })

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-400 mt-6 text-center">We are here to help with any question related to our courses, program, or events. We are here to assist you in you musical journey </p>
        <div>

        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default page
