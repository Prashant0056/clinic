'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import createClient from '@/supabase/client';
import { toast, Toaster } from 'sonner';

const supabase = createClient();

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field cannot be empty.' })
    .email({ message: 'Enter a valid email.' }),
  password: z
    .string()
    .min(8, {
      message: 'Incorrect password',
    })
    .max(20),
});

const LoginForm = () => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsRedirecting(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast.error('Error', {
        description: error.message,
      });
      setIsRedirecting(false);
    } else router.push('/home');
  };

  const redirect = async (address: string) => {
    setIsRedirecting(true);
    router.push(`/${address}`);
  };

  return (
    <>
      <Toaster richColors />
      <div className="flex flex-col gap-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-[3vh]"
          >
            <div className="flex flex-col gap-6 w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your mail"
                        {...field}
                        disabled={isRedirecting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        disabled={isRedirecting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center flex-col w-fit gap-4">
              <Button
                type="submit"
                disabled={isRedirecting}
                className="text-[1.3em] px-6 py-6 "
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
